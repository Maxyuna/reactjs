import React from 'react'

export function Age({people}) {
    return (
        <div>
            {people.map((person, index) => 
            person.godini > 18 ? (
                <p key={index}>
                    {person.ime} {person.prezime} is {person.godini} years old.
                </p>
            ) : (
                <p key={index}>
                    {person.ime} {person.prezime} is younger than 18.
                </p>
            ))}
        </div>
    )
}