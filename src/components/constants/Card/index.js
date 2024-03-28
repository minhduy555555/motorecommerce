import React from 'react';
import { FaShoppingCart, FaCartPlus } from "react-icons/fa";

const ProductCard = () => {
    return (
        <div className="flex justify-center m-10">
            <div className=" w-72 bg-[#f9f9f9] rounded-lg shadow-md">
                <a href="#">
                    <img className="p-5 rounded-t-lg mix-blend-multiply" src="/assets/images/BMW_S1000RR_2020.jpg" alt="product image" />
                </a>
                <div className="px-7 pb-5 text-center">
                    {/* Products Name */}
                    <a href="#">
                        <h5 className="text-xl font-bold tracking-tight text-black">KTM Duke 390</h5>
                    </a>
                    {/* Price */}
                    <div className="flex justify-between items-center my-3">
                        <span className="text-[20px] font-bold text-[#FF0000]">37.000.000</span>
                        <span className="text-[15px] font-bold text-[#777777] line-through">38.000.000</span>
                    </div>
                    <div className="flex justify-center">
                        {/* Add to Cart Button */}
                        <button className="flex items-center justify-center bg-[#FF9700] text-white text-2xl rounded-l-lg px-3 py-1.5 text-center w-1/3 hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            <FaCartPlus className="text-white mr-2" />
                        </button>
                        {/* Buy now Button */}
                        <button className="bg-[#FF5E22] text-white font-bold rounded-r-lg text-[15px] px-5 py-1.5 text-center w-2/3 hover:shadow-lg transition-shadow duration-200 ease-in-out">
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
