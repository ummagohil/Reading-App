import React, { FC } from 'react'

type Props = {
    children?: React.ReactNode
}
const Page: FC = ({ children }) => {
    return <div className="h-screen bg-mineshaft-700">{children}</div>
}
export default Page
