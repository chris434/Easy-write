import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { GetUser } from "../providers/userProvider.js";
import { Header } from "../components/header.js";
export function MainLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = GetUser();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }

    setLoading(false);
  });

  useEffect(() => {
    if (user && pathname === "/login") {
      navigate("/");
    } else if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      {!loading ? (
        <>
          <Header user={user} />
          {children}
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
