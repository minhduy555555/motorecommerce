import { Fragment, useState } from "react";
import Link from "next/link";
// import Cart from "../Cart";
// import { useStateContext } from "../../../lib/context";
// import Login from "@/pages/login";

// React icons
// import { TiHome } from "react-icons/ti";
// import { FaMotorcycle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import { FaScrewdriverWrench, FaGears } from "react-icons/fa6";
// import { BsFillTelephoneFill } from "react-icons/bs";

// const { AnimatePresence, motion } = require("framer-motion");

export default function Nav({ setShowLoginModal, setShowRegisterModal }) {
    // const [showModal, setShowModal] = useState(false);
    //   const { showCart, setShowCart, totalQuantites } = useStateContext();
    return (
        <>
            <div  className="grid w-full place-items-center rounded-lg p-6 pb-7 lg:overflow-visible">
                <div className="-m-7 max-h-[768px] w-[calc(100%+48px)]">
                    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-3 text-white bg-[#0F3187] rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                        <div className="flex items-center justify-between text-blue-gray-900">
                            <Link
                                href={"/"}
                                className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
                            >
                                Motorcycle Ecommerce
                            </Link>

                            {/* Search bar */}
                            <div className="relative flex w-full gap-2 md:w-max">
                                <div className="relative h-10 w-full min-w-[30rem]">
                                    <input
                                        type="search"
                                        className="peer h-full w-full rounded-[7px] border bg-[#D9D9D9] px-3 py-3.5 pr-20 font-sans text-sm font-normal !text-white transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                    />
                                    <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-transparent before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-transparent after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-transparent peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-transparent peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Tìm kiếm...
                                    </label>
                                </div>
                                <button
                                    className="!absolute right-1 top-1 select-none rounded bg-gray py-2 px-4 text-center align-middle font-sans text-xs font-bold bg-[#656565] uppercase text-blue-gray-900 shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Tìm kiếm
                                </button>
                            </div>


                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-x-5">
                                    {/* Motorcycle */}
                                    <Link href={"/ProductPage"}>
                                        <button
                                            className="hidden px-4 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                            type="button"
                                        >
                                            <span>Xe máy</span>
                                        </button>
                                    </Link>

                                    {/* Accessary */}
                                    <Link href={"#"}>
                                        <button
                                            className="hidden px-4 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                            type="button"
                                        >
                                            <span>Phụ tùng</span>
                                        </button>
                                    </Link>

                                    {/* Login */}
                                    <button
                                        className="hidden px-4 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                        type="button"
                                        onClick={() => {
                                            setShowLoginModal(true);
                                            setShowRegisterModal(false);
                                        }}
                                    >
                                        <span>Đăng nhập</span>
                                    </button>

                                    {/* Register */}
                                    <button
                                        className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                        type="button"
                                        onClick={() => {
                                            setShowLoginModal(false);
                                            setShowRegisterModal(true);
                                        }}
                                    >
                                        <span>Đăng ký</span>
                                    </button>

                                    {/* Cart */}
                                    <div
                                        className="hidden px-5 py-3 cursor-pointer font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                                        // onClick={() => setShowCart(true)}
                                    >
                                        {/* {totalQuantites > 0 && (
                                        <motion.span
                                            animate={{ scale: 1 }}
                                            initial={{ scale: 0 }}
                                        >
                                            {totalQuantites}
                                        </motion.span>
                                        )} */}
                                        <FaShoppingCart className="text-2xl" />
                                    </div>
                                    {/* <AnimatePresence>{showCart && <Cart />}</AnimatePresence> */}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
