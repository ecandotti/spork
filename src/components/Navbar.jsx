import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillChatFill } from 'react-icons/bs'
import { FaFootballBall } from 'react-icons/fa'
import { IoMdHelpCircle, IoMdAddCircleOutline } from 'react-icons/io'

const Navbar = () => {
    const itemStyle = {
        borderTop: 'solid 1px #b2bec3',
        color: '#000000'
    }

    const activeItemStyle = {
        borderTop: "solid 2px #218c74", 
        color: "#218c74"
    }

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-12 nav">
            <div className="flex flex-row flex-nowrap w-full h-full text-2xl">
                <NavLink exact to="/chat" style={itemStyle} className="w-full h-full focus:outline-none" activeStyle={activeItemStyle}><BsFillChatFill className="mx-auto my-3"/></NavLink>
                <NavLink exact to="/" style={itemStyle} className="w-full h-full focus:outline-none" activeStyle={activeItemStyle}><FaFootballBall className="mx-auto my-3"/></NavLink>
                <NavLink exact to="/help" style={itemStyle} className="w-full h-full focus:outline-none" activeStyle={activeItemStyle}><IoMdHelpCircle className="mx-auto my-3"/></NavLink>
            </div>
                <NavLink exact to="/admin/add" className="absolute top-2 right-2 border bg-pink-400 p-2 rounded-md focus:outline-none"><IoMdAddCircleOutline /></NavLink>
        </nav>
    )
}

export default Navbar


