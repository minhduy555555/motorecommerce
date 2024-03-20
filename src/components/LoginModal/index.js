import React from 'react';
// import { FaFacebookF, FaGoogle, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const LoginModal = ({ setShowModal, setShowRegisterModal}) => {
    return (
        <div id="wrapper" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" onClick={() => setShowModal(false)}>
            <div className="flex flex-col w-[600px] items-center flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    {/* Login Section */}
                    <div className="w-3/4 p-5">
                        <div className="text-left font-bold">
                            <span className="text-gray-600">Motobike</span> Ecommerce
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-gray-600 mb-2">Đăng nhập</h2>
                            <div className="border-2 w-10 border-gray-600 inline-block mb-2"></div>
                            {/* <div className="flex justify-center my-2">
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaFacebookF className="text-sm"/>
                                </a>

                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaGoogle className="text-sm"/>
                                </a>
                            </div> */}
                            <p className="text-gray-400 my-3">Đăng nhập vào tài khoản của bạn</p>

                            {/* Username Field */}
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-3">
                                    <FaUser className="text-gray-400 m-2" />
                                    <input type="text" name="Tên đăng nhập" placeholder="Tên đăng nhập" className="bg-gray-100 outline-none text-sm ml-2 flex-1" />
                                </div>
                                
                                {/* Password Field */}
                                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-4">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input type="password" name="Mật khẩu" placeholder="Mật khẩu" className="bg-gray-100 outline-none text-sm ml-2 flex-1" />
                                </div>

                                {/* Remember Me */}
                                <div className="flex justify-between w-[80%] mb-5">
                                    <label className="flex items-center text-xs">
                                        <input type="checkbox" name="Nhớ mật khẩu" className="mr-1" />
                                        Nhớ mật khẩu
                                    </label>
                                    
                                    {/* Forgot Password */}
                                    <a href="#" className="text-xs">
                                        <span className="italic text-gray-600">Quên mật khẩu ?</span>
                                    </a>
                                </div>
                                <a href="#" className="border-2 border-gray-600 text-gray-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-600 hover:text-white">Đăng nhập</a>
                            </div>
                        </div>
                    </div>

                    {/* Register Section */}
                    <div className="w-2/4 py-36 px-12 dark:bg-gray-600 text-white rounded-tr-2xl rounded-br-2xl relative">
                    <button onClick={() => setShowModal(false)} className="absolute top-0 right-0 mt-1 mr-4 text-white text-xl"> x </button>
                        <h2 className="font-bold text-3xl mb-2">Đăng ký</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Bạn chưa có tài khoản ?</p>
                        <button onClick={() => {
                            setShowModal(false);
                            setShowRegisterModal(true);
                        }} className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-600">Đăng ký</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginModal;