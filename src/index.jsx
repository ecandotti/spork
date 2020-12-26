import React from 'react'
import ReactDOM from 'react-dom'

import Default from './layouts/Default'

ReactDOM.render(
    <React.StrictMode>
        <Default />
    </React.StrictMode>,
    document.getElementById('root')
)

// HMR
if (import.meta.hot) {
  import.meta.hot.accept()
}