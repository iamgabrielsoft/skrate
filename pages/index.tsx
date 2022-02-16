
import React, { useState } from 'react'; 
import ErrorPage from 'next/error'; 
import SidebarNav from '../src/components/SideNav';
import MiddlePane from '../src/components/MiddlePane'; 
import JobPosting from '../src/components/JobPosting';
import { fetchApi, baseUrl } from '../src/utils/fetchAPI'
import { InferGetStaticPropsType, GetStaticProps } from "next";
import Header from '../src/components/Header'
import { UpcomingSessionType} from '../src/components/MiddlePane'


import {
    Flex,

} from '@chakra-ui/react';




 const Dashboard = (props:Data) => {
     const { 
         dashboard_stats, 
         full_name, 
          job_postings, 
          upcoming_sessions
     } = props
    if(!props){
        <ErrorPage statusCode={404}/>
    }

    //InferGetStaticPropsType

    return (
        <>
            <Header />
            <Flex
                h={[null, null, "100vh"]}
                maxW="2000px"
                flexDir={["column", "column", "row"]}
                overflow="hidden"
            >
                {/* Column 1 */}
                <SidebarNav />

                {/* Column 2 */}
                <MiddlePane props={upcoming_sessions}/>

                {/* Column 3 */}
                <JobPosting props={job_postings} key={1}/>
            </Flex>
        </>

    )
}


export default Dashboard


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
    upcoming_sessions: UpcomingSessionType; 
    job_postings: JobPosting[]; 

}

export const getStaticProps = async () => {
    try{

        const res = await fetchApi(baseUrl)
        console.log(res?.upcoming_sessions)


        return {
            props: {
                full_name: res?.full_name,
                dashboard_stats: res?.dashboard_stats,
                upcoming_sessions:res?.upcoming_sessions,    
                job_postings: res?.job_postings,

            }
        }

    }catch(error) {
        console.log(error)
    }

}