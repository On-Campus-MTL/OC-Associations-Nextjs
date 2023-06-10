import "@/styles/globals.css";
import "rsuite/dist/rsuite.min.css";
import { Lobster, DM_Sans, Inter } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  // this will be the css variable
  weight: "400",
  variable: "--font-lobster",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  // this will be the css variable
  weight: "400",
  variable: "--font-dmSans",
});
const inter = Inter({
  subsets: ["latin"],
  // this will be the css variable

  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main>
      <style jsx global>
        {`
          :root {
            --font-lobster: ${lobster.style.fontFamily};
            --font-dmSans: ${dmSans.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </main>
  );
}
