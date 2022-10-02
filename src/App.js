import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./providers/userProvider.js";
import { MainLayout } from "./layouts/mainLayout.js";
import { Login } from "./views/login.js";
import { Books } from "./views/books.js";
import "./firebase/firebase.config.js";
function App() {
  return (
    <UserProvider>
      <MainLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </MainLayout>
    </UserProvider>
  );
}

export default App;
