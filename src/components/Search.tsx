import React, { FC } from 'react'

const Search: FC = () => {
    return (
        <div className="px-2 p-4">
            <input
                className="text-corn-500 bg-black w-full h-16 rounded  p-2 focus:outline-none focus:outline-none text-xl"
                type="search"
                placeholder="Search..."
            ></input>
        </div>
    )
}
export default Search
