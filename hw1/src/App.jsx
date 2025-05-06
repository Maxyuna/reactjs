import React from 'react'
import {Greeting} from './componenets/Greeting.jsx'
import {InfoList} from './componenets/InfoList.jsx'
import {Farewell} from './componenets/Farewell.jsx'

export function App() {
  return(
    <div>
      <Greeting />
      <hr />
      <InfoList />
      <hr />
      <Farewell />
      <hr />
    </div>
  )
}