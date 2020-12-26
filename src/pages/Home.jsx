import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { HomeContext } from '../contexts/useHome'

import Search from '../components/home/Search'
import MatchItem from '../components/home/MatchItem'

const Home = () => {
    const [allMatch, setAllMatch] = useState([])

    const fetchMatch = async () => {
        const API_URL = `http://api`
        
        await axios.get(API_URL)
            .then(res => {
                console.log(res)
                console.log('Data updated')
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        console.log('Updating data')
        fetchMatch()
    }, [allMatch])

    return (
        <HomeContext.Provider value={{allMatch, setAllMatch}}>
            <div className="px-12 py-16">
                <Search />
                <div className="flex flex-col flex-nowrap w-full">
                    { allMatch.map((match) => <MatchItem match={match}/>) }
                </div>
            </div>
        </HomeContext.Provider>
    )
}

export default Home