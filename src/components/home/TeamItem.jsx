import React from 'react'

const TeamItem = (props) => {
    return (
        <div className="flex flex-row flex-nowrap items-center border border-gray-100 bg-white rounded-lg p-4 my-2 cursor-pointer shadow-sm">
            <img src={props.team.url_img} width="20%" height="auto" className="rounded-xl"/>
            <span className="font-bold mx-auto">{props.team.name}</span>
        </div>
    )
}

export default TeamItem