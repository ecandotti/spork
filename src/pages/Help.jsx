import React, { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoMdSend } from 'react-icons/io'
import { AiFillRobot } from 'react-icons/ai'

const Help = () => {
    const [mail, setMail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const isEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('search by EnterKey')
            submit()
        }
   }

    const submit = () => {
        console.log('form sumbit')
    }

    return (
        <div className="w-full px-10 py-16">
            <div className="mb-4 text-center">
                <span className="font-bold sm:text-4xl text-2xl">About Us</span>
            </div>
            <div className="my-8">
                <div className="flex flex-col flex-nowrap my-2 px-8 text-gray-900 text-sm">
                    <a className="border rounded-xl bg-green-200 hover:bg-green-300 p-3 text-center my-2" href="tel:+33123456789"><FaPhoneAlt className="inline-block"/> + 33 123456789</a>
                    <a className="border rounded-xl bg-green-300 hover:bg-green-400 p-3 text-center my-2" href="mailto:contact@spork.com"><HiMail className="inline-block"/> contact@spork.com</a>
                    <a className="border rounded-xl bg-green-400 hover:bg-green-500 p-3 text-center my-2" href="#"><AiFillRobot className="inline-block"/> Click On Me</a>
                </div>
            </div>
            <div className="my-8">
                <span className="font-semibold text-xl overflow-y-auto">Contact Us</span>
                <div className="flex flex-col flex-nowrap my-2">
                    <form onSubmit={submit}>
                        <div className="text-center my-4">
                            <label htmlFor="mail" className="font-semibold">Mail</label><br/>
                            <input type="text" id="mail" className="w-full rounded-lg focus:outline-none p-1" value={mail} onChange={(e) => setMail(e.target.value)}/>
                        </div>
                        <div className="text-center my-4">
                            <label htmlFor="subject" className="font-semibold">Subject</label><br/>
                            <input type="text" id="subject" className="w-full rounded-lg focus:outline-none p-1" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                        </div>
                        <div className="text-center my-4">
                            <label htmlFor="message" className="font-semibold">Message</label><br/>
                            <textarea type="text" id="message" className="w-full rounded-lg focus:outline-none p-2" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                        <div className="text-center">
                            <button className="flex flex-row flex-nowrap items-center border rounded-xl bg-green-400 hover:bg-green-500 px-4 py-2 text-center my-2" onClick={() => submit} onKeyPress={isEnter}><IoMdSend className="mx-2"/>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Help