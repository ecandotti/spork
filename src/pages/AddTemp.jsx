import React, { useState } from 'react'

const AddTemp = () => {
    const [name, setName] = useState('')
    const [sports, setSports] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <div className="px-12 py-16">
            <div className="flex flex-col flex-nowrap text-center">
                <div className="my-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e)} className="mx-2 p-2 rounded-md focus:outline-none w-2/3" required />
                </div>
                <div className="my-4">
                    <label htmlFor="sports">Sports</label>
                    <input type="text" id="sports" value={sports} onChange={(e) => setSports(e)} className="mx-2 p-2 rounded-md focus:outline-none w-2/3" required />
                </div>
                <div className="my-4">
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e)} className="mx-2 p-2 rounded-md focus:outline-none w-2/3" required />
                </div>
                <div>
                    <button className="bg-green-200 m-2 p-2 rounded-md" onClick={addTeam}>Ajouter</button>
                </div>
            </div>
        </div>
    )
}

export default AddTemp