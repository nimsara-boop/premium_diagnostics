// app/layout.jsx
import Navbar from '../app/navbar/navbar';
import Footer from '../app/footer/footer';
import '../global.d.ts';
import '../index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Premium Labs',
  description: 'Premium Labs App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo.png" type="image/svg+xml" />
      </head>
      <body className="w-full overflow-hidden">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}