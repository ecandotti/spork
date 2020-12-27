import React from 'react'
import { FaFootballBall, FaUserCircle } from 'react-icons/fa'

const Header = () => {
    const headerStyle ={
        borderBottom: "solid 1px #b2bec3"
    }

    return (
        <div style={headerStyle} className="flex flex-row flex-nowrap justify-between fixed top-0 left-0 w-full h-12 py-3 text-green-800 header px-8">
            <span className="flex flex-row flex-nowrap items-center justify-center font-semibold select-none"><FaFootballBall className="mr-2"/>  SPORK</span>
            <button className="text-2xl cursor-pointer" onClick={() => console.log('logged')}><FaUserCircle /></button>
        </div>
    )
}

export default Header