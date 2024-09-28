import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/50 text-white px-5 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm font-semibold mt-5 leading-tight'>{data.description}</p>
            <div className='footer absolute bottom-0  w-full left-0'>
                <div className='flex justify-between items-center py-3 px-8 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='h-6 w-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}
                    </span>
                </div>
                {data.tag.isOpen && 
                <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-600"} py-3 flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>}
            </div>
        </motion.div>

    )
}

export default Card
