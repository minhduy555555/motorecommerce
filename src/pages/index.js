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
      <main style={{zIndex:"-1"}}>
        {/* Slide Show */}
        <SlideHome/>

        {/* Title Product Showcase */}
        <div style={{textAlign:'center' , backgroundColor:"#2B92E4"}}>
          <h1 style={{ fontSize:'32px', textAlign:'center', fontColor:'#000', fontWeight:'bold'}} > Sản Phẩm Nổi Bật </h1>
        </div>
        
        {/* Product Showcase */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          <ul className="home_product" style={{width:'1200px', display:'flex',flexWrap:'wrap', margin:"20px -4px 0 "}} >
            <Prodcuct />
            <Prodcuct />
            <Prodcuct />
            <Prodcuct />
            <Prodcuct />
            <Prodcuct />
            <Prodcuct />
            <Prodcuct />
          </ul>
        </div>
      </main>
    </div>
  );
}
