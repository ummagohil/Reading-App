import React, { useState } from 'react'

const apiKey = process.env.REACT_APP_API_KEY;

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchText, setSearchText] = useState('')
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
        //make the API call here
        let result = [] as any
        
        const requestURL = `https://cors-anywhere.herokuapp.com/` +
        `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`
        
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
