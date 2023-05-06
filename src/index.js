import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import 'antd/dist/reset.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<App />}>
            </Route>
          </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
