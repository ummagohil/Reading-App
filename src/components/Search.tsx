import React, { useState } from 'react'

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const [info, setInfo] = useState([])

    const handleSearchInputChanges = (e?: any) => {
        const { value } = e.target
        setSearchValue(value)
        search(value)
    }
    const search = (query?: any) => {
        const url = `https://swapi.co/api/people?search=${query}`

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setInfo(res.results)
            })
    }

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
            {info}
        </div>
    )
}
export default Search
