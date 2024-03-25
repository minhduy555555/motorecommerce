import React from "react";
import { FaFacebookF, FaGoogle, FaUser } from "react-icons/fa";
import { MdLockOutline, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { useForm } from "react-hook-form";

const RegisterModal = ({ setShowModal, setShowLoginModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dataSubmit = (data) => {
    console.log(data);
  };

  function handleClick(event) {
    event.stopPropagation();
    // console.log('hihihi ')
  }

  // if (!isvisible) return null
  return (
    <div
      style={{ zIndex: "99" }}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <div className="flex flex-col w-[600px] items-center flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* Register Section */}
          <div className="w-2/4 py-36 px-12 dark:bg-gray-600 text-white rounded-tl-2xl rounded-bl-2xl flex flex-col justify-center items-center align-middle">
            <h2 className="font-bold text-3xl mb-2">Đăng nhập</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Bạn đã có tài khoản ?</p>
            <button
              onClick={() => {
                setShowModal(false);
                setShowLoginModal(true);
              }}
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-600"
            >
              Đăng nhập
            </button>
          </div>

          {/* Login Section */}
          <div className="w-3/4 p-5 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 mt-1 mr-4 text-red text-xl"
            >
              {" "}
              x{" "}
            </button>
            <div className="text-left font-bold">
              <span className="text-gray-600">Motobike</span> Ecommerce
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-gray-600 mb-2">Đăng ký</h2>
              <div className="border-2 w-10 border-gray-600 inline-block mb-2"></div>
              {/* <div className="flex justify-center my-2">
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaFacebookF className="text-sm"/>
                                </a>

                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaGoogle className="text-sm"/>
                                </a>
                            </div> */}
              <p className="text-gray-400 my-3">Tạo tài khoản</p>

              <form
                onSubmit={handleSubmit(dataSubmit)}
                onClick={(event) => handleClick(event)}
                className="flex flex-col items-center"
              >
                {/* Username Field */}
                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    {...register("fullName", { required: true })}
                    type="text"
                    placeholder="Họ và tên"
                    className="bg-gray-100 outline-none text-sm ml-2 flex-1"
                  />
                  {errors.fullName && <p>vui lòng nhập tên của bạn</p>}
                </div>

                {/* Phone number Field */}
                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-3">
                  <MdEmail className="text-gray-400 m-2" />
                  <input
                    {...register("email", {
                      required: "Vui lòng nhập địa chỉ email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Địa chỉ email không hợp lệ",
                      },
                    })}
                    type="email"
                    placeholder="Email"
                    // inputMode="numeric"
                    className="bg-gray-100 outline-none text-sm ml-2 flex-1"
                  />
                 {errors.email && <p>{errors.email.message}</p>}
                </div>

                {/* Username Field */}
                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-3">
                  <BsFillTelephoneFill className="text-gray-400 m-2" />
                  <input
                    {...register("Telephone", { required: true })}
                    type="tel"
                    placeholder="Số điện thoại(*)"
                    className="bg-gray-100 outline-none text-sm ml-2 flex-1"
                  />
                  {errors.Telephone && <p>vui lòng nhập số điện thoại </p>}
                </div>

                {/* Username Field */}
                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-3">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    {...register("username", { required: true })}
                    type="text"
                    placeholder="Tên đăng nhập"
                    className="bg-gray-100 outline-none text-sm ml-2 flex-1"
                  />
                  {errors.username && <p>vui lòng nhập username </p>}
                </div>

                {/* Password Field */}
                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-4">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Mật khẩu"
                    className="bg-gray-100 outline-none text-sm ml-2 flex-1"
                  />
                  {errors.username && <p>vui lòng nhập Password </p>}
                </div>

                {/* Confirm password Field */}
                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-4">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    className="bg-gray-100 outline-none text-sm ml-2 flex-1"
                  />
                </div>

                {/* Address Field */}
                <div className="bg-gray-100 w-[80%] p-2 flex items-center mb-3">
                  <ImLocation className="text-gray-400 m-2" />
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="Địa chỉ"
                    className="bg-gray-100 outline-none text-sm ml-2 flex-1"
                  />
                  {errors.username && <p>vui lòng nhập address </p>}
                </div>
                <button
                  type="submit"
                  className="border-2 border-gray-600 text-gray-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-600 hover:text-white"
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
