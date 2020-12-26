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
                        className="border bg-green-200 focus:outline-none p-4 rounded-lg">
                        <BiFootball />
                    </button>
                </div>
                <div className="mx-4 my-8 cursor-pointer select-none">
                    <button
                        onClick={() => setRoomId(2)}
                        className="border bg-green-200 focus:outline-none p-4 rounded-lg">
                        <BiTennisBall />
                    </button>
                </div>
                <div className="mx-4 my-8 cursor-pointer select-none">
                    <button
                        onClick={() => setRoomId(3)}
                        className="border bg-green-200 focus:outline-none p-4 rounded-lg">
                        <FaVolleyballBall />
                    </button>
                </div>
                <div className="mx-4 my-8 cursor-pointer select-none">
                    <button
                        onClick={() => setRoomId(null)}
                        className="border bg-red-400 focus:outline-none rounded-lg p-2">
                        <BiLogOut />
                    </button>
                </div>
            </div>
        </>
    )
}

export default WhichSport