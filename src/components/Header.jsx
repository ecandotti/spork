import React from 'react'
import { FaFootballBall } from 'react-icons/fa'

const Header = () => {
    const headerStyle ={
        borderBottom: "solid 1px #b2bec3"
    }

    return (
        <div style={headerStyle} className="fixed top-0 left-0 w-full h-12 p-3 text-green-800 header">
            <span className="flex flex-row flex-nowrap items-center justify-center font-semibold"><FaFootballBall className="mr-2"/>  SPORK</span>
        </div>
    )
}

export default Header