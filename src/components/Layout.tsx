import React from "react";

import Header from './Header'


type Props = {
    children?: React.ReactNode
}


const Layout = ({ children }: Props) => {
    return (
        <>

            {/* <Header full_name={full_name}/> */}
            <main>{ children }</main>
        </>

        
    )
}


export default Layout; 