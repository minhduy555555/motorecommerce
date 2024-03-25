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
        style={{width:'100%'}}
      >
        <SlideHome/>
        <h1 style={{ fontSize:'32px', textAlign:'center' , backgroundColor:"red"}} > Sản Phẩm Nổi Bật </h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
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
        </div>
      </main>
    </div>
  );
}
