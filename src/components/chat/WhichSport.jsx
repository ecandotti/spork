import React from 'react'
import { BiTennisBall, BiFootball, BiLogOut } from 'react-icons/bi'
import { FaVolleyballBall } from 'react-icons/fa'

const WhichSport = ({ setRoomId }) => {
    return (
        <>
            <div className="flex flex-row flex-nowrap justify-center">
                <div className="mx-4 my-8 cursor-pointer select-none">
                    <button
                        onClick={() => setRoomId(1)}
                        className="border-none bg-green-500 focus:outline-none hover:bg-green-400 p-2 rounded-lg transition duration-300 shadow-md">
                        <BiFootball />
                    </button>
                </div>
                <div className="mx-4 my-8 cursor-pointer select-none">
                    <button
                        onClick={() => setRoomId(2)}
                        className="border-none bg-green-500 focus:outline-none hover:bg-green-400 p-2 rounded-lg transition duration-300 shadow-md">
                        <BiTennisBall />
                    </button>
                </div>
                <div className="mx-4 my-8 cursor-pointer select-none">
                    <button
                        onClick={() => setRoomId(3)}
                        className="border-none bg-green-500 focus:outline-none hover:bg-green-400 p-2 rounded-lg transition duration-300 shadow-md">
                        <FaVolleyballBall />
                    </button>
                </div>
                <div className="mx-4 my-8 cursor-pointer select-none">
                    <button
                        onClick={() => setRoomId(null)}
                        className="border-none bg-red-500 focus:outline-none hover:bg-red-400 rounded-lg p-2 transition duration-300 shadow-md">
                        <BiLogOut />
                    </button>
                </div>
            </div>
        </>
    )
}

export default WhichSport