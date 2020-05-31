import React, { useState } from 'react'

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const people = [
        'Siri',
        'Alexa',
        'Google',
        'Facebook',
        'Twitter',
        'Linkedin',
        'Sinkedin',
    ]
    const handleSearchInputChanges = (e?: any) => {
        setSearchValue(e.target.value)
    }
    /*const search = (query?: any) => {
        const url = `https://swapi.co/api/people?search=${query}`

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setInfo(res.results)
            })
    }*/

    React.useEffect(() => {
        let result = [] as any

        result = people.filter((person) =>
            person.toLowerCase().includes(searchValue)
        )
        setSearchResult(result)
    }, [searchValue])

    return (
        <div className="px-2 p-4">
            <input
                className="text-corn-500 bg-black w-full h-16 rounded  p-2 focus:outline-none focus:outline-none text-xl"
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchInputChanges}
            ></input>
            {searchValue}
            <ul>
                {searchResult.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default Search
