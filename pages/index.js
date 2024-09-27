import Layout from "@/component/Layout";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <header>
    <title>VibeNest</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="VibeNest"/>
    <meta name="author" content = "varsha" />
    <meta name="og:url" content = "https://www.linkedin.com/in/varshagupta01/" />
    </header>
<main>
  <Layout/>
</main>
</>
  );
}
