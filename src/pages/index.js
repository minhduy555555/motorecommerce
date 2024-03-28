import Head from "next/head";
import SlideHome from "@/components/Slide/index.js";
// import Prodcuct from "@/components/Product/Index";
import ProductCard from "@/components/constants/Card";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Motorcycle Ecommerce</title>
            </Head>
            <main style={{zIndex:"-1"}}>
                <div>
                    {/* Slide Show */}
                    <SlideHome/>
                </div>

                <div>
                    {/* Title Product Showcase */}
                    <div className="text-center align-middle p-5">
                        <div className="flex justify-between items-center mx-auto">
                            {/* Motorbike Title */}
                            <h1 className="font-bold text-3xl text-[#FF5E22] rounded-lg transition-colors">
                                Xe máy
                            </h1>

                            {/* More motorbike button */}
                            <button className="text-blue-500 text-lg font-semibold rounded-lg">
                                Xem thêm
                            </button>
                        </div>
                    </div>

                    
                    {/* Product Showcase */}
                    <div className="p-5">
                        <div className="w-full h-auto bg-white shadow-2xl rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>


                    {/* Title Product Showcase */}
                    <div className="text-center align-middle p-5">
                        <div className="flex justify-between items-center mx-auto">
                            {/* Motorbike Title */}
                            <h1 className="font-bold text-3xl text-[#FF5E22] rounded-lg transition-colors">
                                Phụ tùng
                            </h1>

                            {/* More motorbike button */}
                            <button className="text-blue-500 text-lg font-semibold rounded-lg">
                                Xem thêm
                            </button>
                        </div>
                    </div>
                    
                    {/* Product Showcase */}
                    <div className="p-4">
                        <div className="w-full h-404 bg-[#FFFFFF] shadow-2xl rounded-lg flex-row align-middle p-5 flex flex-wrap justify-center">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
