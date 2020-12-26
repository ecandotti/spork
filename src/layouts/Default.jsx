import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Chat from '../pages/Chat'
import Help from '../pages/Help'

import Error from '../components/Error'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Load from '../components/Load'


const Default = () => {
    const [isLoad, setLoad] = useState(false)

    return (
        <div className="w-full h-full">
            { isLoad && <Load /> }
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/help" component={Help} />
                    <Route path="*" component={() => <Error code="404"/>} />
                </Switch>
                <Navbar />
            </BrowserRouter>
        </div>
    )
}

export default Default
