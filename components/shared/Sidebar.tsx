import React, { useState } from 'react'

export default function Sidebar() {


    const [color, setColor] = useState("#0085ff");

    const handleColorChange = (e: any) => {
        setColor(e.target.value);
    };

    return (
        <div className='w-full lg:w-[320px] bg-white lg:h-[800px] px-7 py-3'>
            <div>
                <div className='relative'>
                    <h2 className='text-gray-600 font-semibold'>
                        Text
                    </h2>
                    <select name="" id="" className='text-gray-800 outline-none appearance-none w-full border-[1px] rounded-lg p-[10px] border-gray-300 mt-3'>
                        <option value="">H1</option>
                        <option value="">H2</option>
                        <option value="">H3</option>
                        <option value="">H4</option>
                        <option value="">H5</option>
                    </select>
                    <div className='absolute right-3 bottom-4'>
                        <picture>
                            <img src="/img/Vector.svg" alt="" />
                        </picture>
                    </div>
                </div>

                <div className="relative flex items-center text-gray-800 border-[1px] rounded-lg p-2 border-gray-300 mt-3">
                    <div
                        className="w-7 h-7 rounded-md mr-2"
                        style={{ backgroundColor: color }}
                    ></div>
                    <input
                        type="color"
                        className="rounded-md absolute left-0 opacity-0 cursor-pointer"
                        value={color}
                        onChange={handleColorChange}
                    />
                    <input
                        type="text"
                        className="rounded-md ml-2 outline-none"
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>

                <div className='text-gray-800 mt-3 flex justify-items-stretch w-full'>
                    <div className='border-[1px] border-gray-300 w-full flex justify-center items-center p-[6px] rounded-tl-lg rounded-bl-lg cursor-pointer'>
                        <picture>
                            <img src="/img/align-left-2 1.svg" alt="" />
                        </picture>
                    </div>
                    <div className='border-[1px] border-gray-300 w-full flex justify-center items-center p-[6px] cursor-pointer'>
                        <picture>
                            <img src="/img/align-center 1.svg" alt="" />
                        </picture>
                    </div>
                    <div className='border-[1px] border-gray-300 w-full flex justify-center items-center p-[6px] cursor-pointer'>
                        <picture>
                            <img src="/img/align-right-2 1.svg" alt="" />
                        </picture>
                    </div>
                    <div className='border-[1px] border-gray-300 w-full flex justify-center items-center p-[6px] rounded-tr-lg rounded-br-lg cursor-pointer'>
                        <picture>
                            <img src="/img/align-justify 1.svg" alt="" />
                        </picture>
                    </div>
                </div>


                <div className='flex justify-between mt-3'>
                    <button className='bg-[#0085FF] text-white py-[10px] rounded-md font-[500] text-sm w-[48%]'>
                        Add Table
                    </button>
                    <button className='border-[#0085FF] border-[1px] text-[#0085FF] py-[10px] rounded-md font-[500] text-sm w-[48%]'>
                        Block Quote
                    </button>
                </div>


                <div className='mt-5 relative'>
                    <h2 className='text-gray-600 font-semibold'>
                        Hyperlink
                    </h2>
                    <input type="text" name="" id="" className='text-gray-800 outline-none w-full border-[1px] rounded-lg p-[10px] border-gray-300 mt-2' placeholder='Insert link' />
                    <div className='absolute right-3 bottom-3'>
                        <picture>
                            <img src="/img/material-symbols_link-rounded.svg" alt="" />
                        </picture>
                    </div>
                </div>

                <div className='mt-5 relative'>
                    <h2 className='text-gray-600 font-semibold'>
                        Create a list
                    </h2>
                    <select name="" id="" className='text-gray-400 appearance-none outline-none w-full border-[1px] rounded-lg p-[10px] border-gray-300 mt-2'>
                        <option value=""  >Select option</option>
                    </select>
                    <div className='absolute right-3 bottom-4'>
                        <picture>
                            <img src="/img/Vector.svg" alt="" />
                        </picture>
                    </div>
                </div>

                <div className='mt-5'>
                    <button className='bg-[#0085FF] text-white py-[10px] rounded-md font-[500] w-full text-sm'>
                        Add Image
                    </button>
                </div>

            </div>
        </div>
    )
}
