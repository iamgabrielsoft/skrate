import React from "react";
import Head from 'next/head';
import Header from './Header'


type Props = {
    full_name: React.ReactChild;
    children?: React.ReactNode
}


const Layout = ({ full_name, children }: Props) => {
    return (
        <>
           <Head>    
               <title>sktrata</title>
            </Head>
            {/* <Header full_name={full_name}/> */}
            <main>{ children }</main>
        </>

        
    )
}


export default Layout; 