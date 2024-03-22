import { Inter } from "next/font/google";
import Head from "next/head";
import SlideHome from "@/components/Slide/index.js";
import Prodcuct from "@/components/Product/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Motorcycle Ecommerce</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
      >
        <SlideHome/>
        <h1 style={{ fontSize:'32px' }} > Sản Phẩm Nổi Bật </h1>
        <ul className="home_product" style={{width:'1200px',display:'flex',flexWrap:'wrap',margin:"20px  -4px 0 "}} >
          <Prodcuct/>
          <Prodcuct/>
          <Prodcuct/>
          <Prodcuct/>
          <Prodcuct/>
          <Prodcuct/>
          <Prodcuct/>
          <Prodcuct/>
        </ul>
      </main>
    </div>
  );
}
