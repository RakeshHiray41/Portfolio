import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <div className="bg-paper text-ink min-h-screen font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-16">{children}</main>
      <Footer />
    </div>
  );
}
