import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { GetUser } from "../providers/userProvider.js";
import { Header } from "../components/header.js";
import { AccountDropdown } from "../components/accountDropdown.js";

export function MainLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [headerDropdown, setHeaderDropdown] = useState(false);
  const { user, setUser } = GetUser();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (user && pathname === "/login") {
      navigate("/");
    } else if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      {!loading && user ? (
        <>
          <Header user={user} setHeaderDropdown={setHeaderDropdown} />
          <main className="relative">
            <AccountDropdown
              user={user}
              headerDropdown={headerDropdown}
              setHeaderDropdown={setHeaderDropdown}
            />
            {children}
          </main>
        </>
      ) : pathname === "/login" ? (
        <>{children}</>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
