import React, { useState } from 'react'
import Fuse from 'fuse.js'

import { useHome } from '../../contexts/useHome'

const Search = () => {
    const { updateSearch } = useHome()
    const { allTeams, setAllTeams } = useHome()
    const [query, updateQuery] = useState('')

    const fuse = new Fuse(allTeams, { includeScore: true, keys: ['name'] })

    const fetchTeam = (e) => {
        updateQuery(e.target.value)
        updateSearch(fuse.search(e.target.value))
    }


    return (
        <div>
            <input className="rounded-xl focus:outline-none text-center w-full p-1 shadow-sm" placeholder="Search team" value={query} onChange={fetchTeam}/>
        </div>
    )
}

export default Search