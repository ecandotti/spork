import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddTemp = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [sports, setSports] = useState('')
    const [desc, setDesc] = useState('')
    const [logo, setLogo] = useState('')

    const addTeam = async (e) => {
        e.preventDefault()

        const allsports = [sports]

        const team = {
            'name': name, 
            'sports': allsports, 
            'desc': desc, 
            'url_img': logo
        }

        await fetch('http://localhost:3000/teams/add', {
            method: 'POST',
            body: JSON.stringify(team),
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(() => {
                console.log("done")
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="px-12 py-16">
            <div className="mb-4 text-center">
                <span className="font-bold sm:text-4xl text-2xl">Add Team</span>
            </div>
            <div className="flex flex-col flex-nowrap text-center">
                <div className="flex flex-col my-4">
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mx-2 p-2 rounded-md focus:outline-none w-full" placeholder="Adevia" required />
                </div>
                <div className="flex flex-col my-4">
                    <label htmlFor="sports">Sports</label>
                    <input type="text" id="sports" value={sports} onChange={(e) => setSports(e.target.value)} className="mx-2 p-2 rounded-md focus:outline-none w-full" placeholder="Soccer" required />
                </div>
                <div className="flex flex-col my-4">
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} className="mx-2 p-2 rounded-md focus:outline-none w-full" placeholder="A french soccer team based in Massilia" required />
                </div>
                <div className="flex flex-col my-4">
                    <label htmlFor="logo">Logo</label>
                    <input type="text" id="logo" value={logo} onChange={(e) => setLogo(e.target.value)} className="mx-2 p-2 rounded-md focus:outline-none w-full" placeholder="Image's url" required />
                </div>
                <div>
                    <button className="bg-green-200 m-2 px-4 py-2 rounded-lg" onClick={addTeam}>Ajouter</button>
                </div>
            </div>
        </div>
    )
}

export default AddTemp