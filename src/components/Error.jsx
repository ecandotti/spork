import React from 'react'

const Error = (props) => {
    return (
        <div>
            Erreur {props.code}.<br/>
            Cette page n'existe pas.
        </div>
    )
}

export default Error