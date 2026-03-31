import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { personalData } from "@/utils/data/personal-data";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://harisbaig.dev"),
  title: {
    default: "Haris Baig — Senior React Native Engineer",
    template: "%s — Haris Baig",
  },
  description:
    "Senior React Native Engineer (10+ years) building scalable, high-performance iOS & Android apps used by millions. React Native Core Contributor focused on mobile architecture and performance.",
  keywords: [
    "Haris Baig",
    "React Native",
    "Senior React Native Engineer",
    "Mobile Architecture",
    "Performance Optimization",
    "TypeScript",
    "Swift",
    "Kotlin",
    "Expo",
    "EAS",
    "Offline-first",
  ],
  authors: [{ name: "Haris Baig" }],
  creator: "Haris Baig",
  openGraph: {
    type: "website",
    title: "Haris Baig — Senior React Native Engineer",
    description:
      "Senior React Native Engineer (10+ years) building scalable, high-performance iOS & Android apps used by millions. React Native Core Contributor focused on mobile architecture and performance.",
    url: "/",
    siteName: "Haris Baig",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Haris Baig",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haris Baig — Senior React Native Engineer",
    description:
      "Senior React Native Engineer (10+ years) building scalable, high-performance iOS & Android apps used by millions. React Native Core Contributor focused on mobile architecture and performance.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
