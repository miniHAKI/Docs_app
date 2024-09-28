import React from 'react'
import Nav from "./NavBar";

const BackGround = () => {
    return (
        <div className='fixed w-full h-screen'>
            <Nav />
            <h1 className='text-[10vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 leading-none tracking-tighter'>Docs</h1>

        </div>
    )
}

export default BackGround
