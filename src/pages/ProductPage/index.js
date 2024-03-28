import React, { useState } from 'react'

const ProductPage = () => {
    const [images, setImages] = useState({
        img1 : "/assets/images/NinjaZX_10R_2022.png",
        img2 : "assets/images/Kawasaki_Z1000.png",
        img3 : "/assets/images/BWM_s1000r.png",
        img4 : "/assets/images/BMW_S1000RR_2020.jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    return (
        <div className='shadow-xl rounded-lg overflow-hidden'>
            <div className="max-w-7xl mx-auto p-8">
                <div className='flex flex-col justify-between lg:flex-row gap-24 lg:items-center'>
                    <div className='flex flex-col gap-6 lg:w-2/4'>
                        <div className='w-full h-[500px] flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden'>
                            <img src={activeImg} alt="" className='max-w-full max-h-full object-contain rounded-xl mix-blend-multiply'/>
                        </div>
                        <div className='flex flex-row justify-between h-24'>
                            <img src={images.img1} alt="NinjaZX_10R_2022" className='w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply' onClick={() => setActiveImage(images.img1)}/>
                            <img src={images.img2} alt="Kawasaki_Z1000" className='w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply' onClick={() => setActiveImage(images.img2)}/>
                            <img src={images.img3} alt="BWM_s1000r" className='w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply' onClick={() => setActiveImage(images.img3)}/>
                            <img src={images.img4} alt="BMW_S1000RR_2020" className='w-24 h-24 object-contain rounded-md cursor-pointer mix-blend-multiply' onClick={() => setActiveImage(images.img4)}/>
                        </div>
                    </div>
                    {/* Product Description */}
                    <div className='flex flex-col gap-4 lg:w-2/4'>
                        {/* Product Name */}
                        <div>
                            <h1 className='text-[#005AA2] text-3xl font-bold'>NinjaZX 10R 2022</h1>
                        </div>
                        <div className='flex items-center'>
                            {/* New Price */}
                            <h6 className='text-2xl font-semibold'>Giá từ: 58.500.000 VNĐ</h6>
                            {/* Old Price */}
                            <span className='text-xl font-medium text-gray-500 line-through ml-4'>65.000.000 VNĐ</span>
                            {/* Discount */}
                            <div className="bg-[#0079f2]">
                                <span className="text-xl font-medium text-gray-500 ml-4">-13% </span>
                            </div>
                        </div>
                        {/* Product Description */}
                        <p className='text-gray-700'>
                            Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                        </p>
                        {/* Add to Cart Button */}
                        <div className='flex flex-row items-center gap-12 justify-center'>
                            <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage