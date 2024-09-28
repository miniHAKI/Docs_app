import React from 'react'
import { useRef } from 'react';
import Card from "./Card"
const Fore = () => {

  const data = [
    {
    description:"the description of Card.",
    filesize: "0.3mb",
    close: true,
    tag:{ isOpen:true, tagTitle: "Title", tagColor: "green"},
  },
   {
    description:"the description of Card.",
    filesize: "0.3mb",
    close: true,
    tag:{ isOpen:false, tagTitle: "Title", tagColor: "green"},
  },
  {
   description:"the description of Card.",
   filesize: "0.3mb",
   close: true,
   tag:{ isOpen:true, tagTitle: "Title", tagColor: "blue"},
 }
];

const area  = useRef(null)

  return (
    <div ref={area} className='fixed w-full h-full top-0 left-0 z-[3] flex gap-5 flex-wrap p-5'>
     {data.map((item, index)=>(
      <Card data={item} reference={area}/>
     ))}
    </div>
  )
}

export default Fore
