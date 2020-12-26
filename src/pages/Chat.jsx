import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import useChat from '../components/chat/useChat'

import WhichSport from '../components/chat/WhichSport'


const Chat = () => {
    const [roomId, setRoomId] = useState(null)
    const { messages, sendMessage } = useChat(roomId) // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = useState("")

    const handleSendMessage = () => {
        sendMessage(newMessage)
        setNewMessage("")
    }

    const isEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('search by EnterKey')
            handleSendMessage()
        }
   }

    const showCurrentChat = () => {
        switch (roomId) {
            case 1:
                return ("Football")
                break
            case 2:
                return ("Tennis")
                break
            case 3:
                return ("Volleyball")
                break
            default:
                return ("")
                break
        }
    }

    return (
        <div className="px-10 py-16 h-full w-full">
            <div className="text-center">
                <span className="font-bold sm:text-4xl text-2xl">Choose room ID</span>
            </div>

            <WhichSport setRoomId={setRoomId}/>
            
            
            { 
                roomId 
                ?
                <>
                    <Redirect to={`/chat/${roomId}`}/>
                    {showCurrentChat()}
                    <div className="border rounded-md border-gray-200 bg-gray-50 p-2 h-1/2">
                        <div className="">
                            <ol className="">
                                {messages.map((message, i) => (
                                    <li key={i} className="">
                                        {message.body}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="flex flex-row flex-nowrap items-center w-full my-4">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Write your message..."
                            className="rounded-xl p-2 focus:outline-none w-2/3"
                            onKeyPress={isEnter}/>
                        <button onClick={handleSendMessage} className="border bg-blue-400 text-white rounded-xl ml-4 p-2 w-1/3">Send</button>
                    </div>
                </> 
                : <Redirect to={`/chat`}/>
            }
        </div>
    )
}

export default Chat