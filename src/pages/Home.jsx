import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import { HomeContext } from '../contexts/useHome'

import Search from '../components/home/Search'
import TeamItem from '../components/home/TeamItem'

const Home = () => {
    const [allTeams, setAllTeams] = useState([])
    const [search, updateSearch] = useState([])

    const fetchTeams = async () => {
        const API_URL = `http://localhost:3000/teams/list`
        
        await axios.get(API_URL)
            .then(res => {
                setAllTeams(res.data)
                console.log('Data updated')
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        console.log('Updating data')
        fetchTeams()
    }, [])

    console.log(search[0])

    return (
        <HomeContext.Provider value={{allTeams, setAllTeams, updateSearch}}>
            <div className="px-12 py-16">
                <Search />
                <div className="flex flex-col flex-nowrap w-full my-4">
                    { search[0] === undefined && allTeams.map((team, i) => <TeamItem key={i} team={team}/>) }
                    { search[0] !== undefined && search.map((team, i) => <TeamItem key={i} team={team.item}/>) }
                </div>
            </div>
            <NavLink exact to="/admin/add" className="absolute bottom-14 right-2 border bg-blue-600 p-2 rounded-full focus:outline-none text-white hover:bg-blue-500 transition duration-300 shadow-md"><FiPlus /></NavLink>
        </HomeContext.Provider>
    )
}

export default Home