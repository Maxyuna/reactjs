import React from 'react'

export function Address({people}) {
    return(
        <div>
            {people.filter(person => person.adresa === "Skopje")
            .map((person, index) => (
                <p key={index}>
                    {person.ime} {person.prezime} lives in {person.adresa}.
                </p>
            ))}
        </div>
    )
}