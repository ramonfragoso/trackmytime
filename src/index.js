import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/Popup/App'

chrome.storage.local.get(null, function (data) {
  ReactDOM.render(
    <React.StrictMode>
      <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
});

