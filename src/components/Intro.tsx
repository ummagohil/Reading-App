import React, { FC } from 'react'

const Intro: FC = () => {
    return (
        <div className="px-2">
            <div className="flex -mx-2">
                <div className="w-1/3 px-2">
                    <div className="bg-corn-500 flex rounded p-1 h-12">
                        <div className="w-1/10 bg-black text-white bg-opacity-75 rounded-full h-10 w-10 flex items-center justify-center">
                            1
                        </div>
                        <div className="w-9/10 p-1 flex items-center justify-center text-white">
                            Use the search bar to find a book
                        </div>
                    </div>
                </div>
                <div className="w-1/3 px-2">
                    <div className="flex bg-corn-500 rounded p-1 h-12">
                        <div className="w-1/10 bg-black text-white bg-opacity-75 rounded-full h-10 w-10 flex items-center justify-center">
                            2
                        </div>
                        <div className="w-9/10 p-1 flex items-center justify-center text-white">
                            Click on the calendar to schedule book
                        </div>
                    </div>
                </div>
                <div className="w-1/3 px-2">
                    <div className="bg-corn-500 flex rounded p-1 h-12">
                        <div className="w-1/10 bg-black text-white bg-opacity-75 rounded-full h-10 w-10 flex items-center justify-center">
                            3
                        </div>
                        <div className="w-9/10 p-1 flex items-center justify-center text-white">
                            View book and schedule information, and then add
                            book
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro
