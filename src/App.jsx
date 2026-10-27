import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import BouncingBunny from "./components/BouncingBunny";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
    <BouncingBunny />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/MenuPage" element={<MenuPage />} />
            <Route path="/Contact" element={<Contact />} />

            {/* <Route
            path="/menu"
            element={
              <MenuPage
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              />
            }
          /> */}
          </Route>

          {/* 404 — no header */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
