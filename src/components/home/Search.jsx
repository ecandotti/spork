import React, { useState } from 'react'
import Fuse from 'fuse.js'

import { useHome } from '../../contexts/useHome'

const Search = () => {
    // const { allMatch, setAllMatch } = useHome()
    // const [query, setQuery] = useState('')
    // const [result, setResult] = useState(null)
    // const options =  {
    //     includeScore: true,

    //     // keys: [['team', 'sport']]
    //     keys: ['team.sport']
    // }
    // const fuse = new Fuse(allMatch, options)

    // const fetchOnAllMatch = (e) => {
    //     setQuery(e.target.value)
    //     setResult(fuse.search(e.target.value))
    //     console.log(e.target.value, query, result)
    // }


    // return (
    //     <div>
    //         <input className="rounded-xl focus:outline-none text-center w-full p-1" placeholder="Search match" value={query} onChange={fetchOnAllMatch}/>
    //         {
    //             result.console > 0 && "qqch"
    //         }
    //     </div>
    // )
    return ( "ok" )
}

export default Search