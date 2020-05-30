import React, { FC, useState } from 'react'

const Search: FC = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearchInputChanges = (e?: any) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue('')
    }

    const callSearchFunction = (e?: any, props?: any) => {
        e.preventDefault()
        props(searchValue)
        resetInputField()
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
        </div>
    )
}
export default Search
