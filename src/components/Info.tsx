import React, { FC } from 'react'

const Info: FC = () => {
    return (
        <div className="px-2 p-4">
            <div className=" text-corn-500 rounded bg-black flex">
                <div className="w-1/2 p-4">Book info</div>
                <div className="border-r border-corn-500 p-4 opacity-50"></div>
                <div className="w-1/2 p-4">Stats info</div>
            </div>
        </div>
    )
}
export default Info
