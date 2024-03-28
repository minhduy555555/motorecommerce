import React, { useState } from 'react';
import { auth_login } from '@/pages/api/auth';
import { MdLockOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const LoginModal = ({ setShowModal, setShowRegisterModal}) => {
    // Close Modal Event
    const handleClose = (e) => {
        if (e.target.id === "modal-wrapper") {
            setShowModal(false);
        }
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle Submit Login
    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await auth_login(username, password);    
        if (result.success) {
            alert('Đăng nhập thành công!');
            setShowModal(false);
        } else {
            // Login failed
            alert(result.message || 'Đăng nhập thất bại!');
        }
    };

    return (
        <div id="modal-wrapper" onClick={handleClose} style={{zIndex:'99'}} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div id="modal-content" className="flex flex-col rounded-2xl items-center text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-[850px]">
                    {/* Login Section */}
                    <div className="w-3/4 p-5">
                        <div className="text-left font-bold">
                            <span className="text-[#2B92E4]">Motorbike</span> Ecommerce
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-[#2B92E4] mb-2">Đăng nhập</h2>
                            <div className="border-2 w-10 border-[#2B92E4] inline-block mb-2"></div>
                            <p className="text-gray-400 my-3">Đăng nhập vào tài khoản của bạn</p>

                            {/* Username Field */}
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-3">
                                    <FaUser className="text-gray-400 m-2" />
                                    <input type="text" name="Tên đăng nhập" placeholder="Tên đăng nhập" className="bg-gray-100 outline-none text-sm ml-2 flex-1" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                
                                {/* Password Field */}
                                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-4">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input type="password" name="Mật khẩu" placeholder="Mật khẩu" className="bg-gray-100 outline-none text-sm ml-2 flex-1" onChange={(e) => setPassword(e.target.value)} />
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
                                <button type="submit" onClick={handleLogin} className="border-2 border-[#2B92E4] text-[#2B92E4] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#2B92E4] hover:text-white">Đăng nhập</button>
                            </div>
                        </div>
                    </div>

                    {/* Register Section */}
                    <div className="w-2/4 py-36 px-12 bg-[#2B92E4] text-white rounded-tr-2xl rounded-br-2xl relative">
                        {/* Close Button */}
                    <button onClick={() => setShowModal(false)} className="absolute top-0 right-0 mt-1 mr-4 text-black text-xl"> x </button>
                        <h2 className="font-bold text-3xl mb-2">Đăng ký</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Bạn chưa có tài khoản ?</p>
                        <button onClick={() => {
                            setShowModal(false);
                            setShowRegisterModal(true);
                        }} className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#2B92E4]">Đăng ký</button>
                    </div>
                </div>

            </div>
        </div>
    
    )
}

export default LoginModal;