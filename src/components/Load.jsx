import React from 'react'

import logo from '../../public/images/ball.png'

const Load = () => {
    return (
        <div className="fixed w-screen h-screen z-10 bg-red-400 opacity-90">
            <div className="flex flex-col flex-nowrap items-center my-52">
                <img className="w-1/6 my-8" src={logo} alt="logo" />
                <img className="w-1/12" src="https://i.pinimg.com/originals/fa/93/b4/fa93b4ffee72b457f38998277337001d.gif" alt="loading" />
            </div>
        </div>
    )
}

export default Load