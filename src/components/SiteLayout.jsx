import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
