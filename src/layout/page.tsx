import React, { FC } from 'react'

type Props = {
    children?: React.ReactNode
}
const Page: FC = ({ children }) => {
    return <>Page {children}</>
}
export default Page
