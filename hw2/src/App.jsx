import React from 'react'
import {Age} from './components/Age.jsx'
import {Address} from './components/Address.jsx'

export function App(){

  const first = { ime:"Stefan", prezime:"Stefanov", adresa:"Prilep", godini:49 }
  const second = { ime:"Stefanija", prezime:"Stefanovska", adresa:"Skopje", godini:29 }
  const third = { ime:"Mirko", prezime:"Mirkovski", adresa:"Skopje", godini:80 }
  const fourth = { ime:"Kosta", prezime:"Kostadinov", adresa:"Gevgelija", godini: 16 }

  const people = [first, second, third, fourth]

  return(
    <div>
    <h1>People by their age:</h1>
    <Age people={people} />
    <hr />
    <h1>People living in Skopje:</h1>
    <Address people={people} />
    </div>
  )

}