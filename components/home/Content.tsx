import React, { useState } from 'react'

export default function Content() {


    const [getText, setGetText] = useState("")

    const handleText = (e: any) => {
        const text = e.target.value;
        setGetText(text)
    }


    return (
        <div className=' bg-[#F0F6FD] w-full min-h-screen px-5 py-3'>
            <div className='flex gap-3 mt-2'>
                <div className=' w-14 h-14 bg-white rounded-full flex justify-center items-center cursor-pointer'>
                    <picture>
                        <img src="/img/solar_undo-left-outline.svg" alt="" />
                    </picture>
                </div>
                <div className=' w-14 h-14 bg-white rounded-full flex justify-center items-center cursor-pointer'>
                    <picture>
                        <img src="/img/solar_undo-left-outline (1).svg" alt="" />
                    </picture>
                </div>
                <div className=' w-32 h-14 bg-white rounded-full flex pl-2 items-center justify-evenly cursor-pointer'>
                    <h3 className='font-semibold text-black text-lg'>
                        {`100%`}
                    </h3>
                    <picture>
                        <img src="/img/material-symbols_arrow-forward-ios-rounded.svg" alt="" />
                    </picture>
                </div>
            </div>


            <div className="flex flex-col lg:flex-row gap-5">
                <div className='mt-5'>
                    <div className='bg-white rounded-xl p-5 h-[600px] lg:w-[350px] 2xl:w-[550px] pb-14'>
                        <h2 className='text-gray-800 text-sm text-center font-semibold'>
                            Typing Markdown
                        </h2>
                        <textarea
                            onChange={(e) => handleText(e)}
                            className='bg-[#F0F6FD] h-full w-full mt-3 text-gray-700 rounded-lg outline-none p-5 mb-5'
                            name="" id="" />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='bg-white rounded-xl p-5 h-[600px] lg:w-[350px] 2xl:w-[550px] pb-14 '>
                        <h2 className='text-gray-800 text-sm text-center font-semibold'>
                            Rendering Markdown
                        </h2>
                        <div
                            className='bg-[#F0F6FD] h-full w-full mt-3 text-gray-700 rounded-lg outline-none p-5 mb-5 overflow-scroll'
                        >
                            <h2 className=' break-words'>
                                {getText}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row lg:flex-col gap-3 bg-white p-3 rounded-full lg:h-[220px] mt-5 justify-center'>
                    <div className=' w-14 h-14 bg-[#0085FF] rounded-full flex justify-center items-center'>
                        <picture>
                            <img src="/img/ic_round-plus.svg" alt="" />
                        </picture>
                    </div>
                    <div className=' w-14 h-14 bg-[#0085FF] rounded-full flex justify-center items-center'>
                        <picture>
                            <img src="/img/material-symbols_content-copy-outline-rounded.svg" alt="" />
                        </picture>
                    </div>
                    <div className=' w-14 h-14 bg-[#0085FF] rounded-full flex justify-center items-center'>
                        <picture>
                            <img src="/img/material-symbols_delete-outline.svg" alt="" />
                        </picture>
                    </div>

                </div>
            </div>

        </div>
    )
}
