import React from 'react'

export default function Header() {
    return (
        <div className='h-[80px] bg-white shadow-xl'>
            <div className="flex justify-between px-10 pt-3 items-center">
                <div>
                    <picture>
                        <img src="/img/logoipsum-262 (4) 1.svg" alt="" />
                    </picture>
                </div>
                <div className='flex gap-2'>
                    <div className=' w-14 h-14 bg-[#F1F8FF] rounded-full flex justify-center items-center'>
                        <picture>
                            <img src="/img/ep_setting.svg" alt="" />
                        </picture>
                    </div>
                    <div className=' w-14 h-14 bg-[#F1F8FF] rounded-full flex justify-center items-center'>
                        <picture>
                            <img src="/img/Mask group.svg" alt="" />
                        </picture>
                    </div>
                    <div className=' w-32 h-14 bg-[#F1F8FF] rounded-full flex pl-2 items-center justify-between'>
                        <picture>
                            <img src="/img/Ellipse 2.svg" className=' w-10 h-10' alt="" />
                        </picture>
                        <h3 className='pr-5 font-semibold text-black text-lg'>
                            {`Rozee`}
                        </h3>
                    </div>


                </div>
            </div>
        </div>
    )
}
