import Script from "next/script";
import Navbar from "./components/layout/navbar";
import "./bootstrap.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light">
      <body>
        <header>
          <Script src="/scripts/bootstrap.bundle.js" />
        </header>
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
