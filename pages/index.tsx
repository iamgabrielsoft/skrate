
import React, { useState } from 'react'; 
import ErrorPage from 'next/error'; 
import { GetServerSideProps, GetStaticProps} from 'next';
import axios from 'axios'
import SidebarNav from '../src/components/SideNav';
import MiddlePane from '../src/components/MiddlePane'; 
import UpComingSession from '../src/components/Session';
import { UpComingSession } from '../src/components/Session'

import {
    Flex,

} from '@chakra-ui/react';


type Props = {
    result: any
}

export default function Dashboard({ result }: Props) {
    // console.log('data', result)
    // if(!result){
    //     <ErrorPage statusCode={404}/>
    // }


    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <SidebarNav />

            {/* Column 2 */}
            <MiddlePane />

            {/* Column 3 */}
            <UpComingSession context={result}/>
        </Flex>
    )
}



type DashboardStat = {
    profile_views: number; 
    mentorship_sessions: number; 
    jobs_applied: number; 
    skills_verified:number; 
}



type JobPosting = {
    role: string;
    organization_name: string; 
    location:string;
    date_posted: string;
}


type Data = {
    full_name: string; 
    dashboard_stats:DashboardStat[];
    upcoming_sessions: UpcomingSession[]; 
    job_postings: JobPosting[]; 

}

export const getStaticProps = async () => {
    try{

        const res = await fetch('https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818')
        const context: Data = await res.json()


        return {
            props: {
                context
              
            }
        }

    }catch(error) {
        console.log(error)
    }

}