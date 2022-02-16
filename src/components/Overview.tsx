import React from 'react';
import { Stack, Text, Button, Flex, Heading, Grid, GridItem, Container} from '@chakra-ui/react';


type DashboardStat = {
    profile_views: number; 
    mentorship_sessions: number; 
    jobs_applied: number; 
    skills_verified:number; 
}


const OverView = (dashboard_stats: DashboardStat) => {

    return (
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
            <Flex justifyContent="space-between" mt={3}>
                <Flex align="flex-end">
                    <Heading as="h2" size="lg" letterSpacing="tight">Overview</Heading>
                    
                </Flex>
                <Button>Dashboard</Button>
            </Flex>
            <Grid templateColumns='repeat(5, 1fr)'  gap={10} width={500} > 
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                        <Flex display={"flex"} >
                            <Heading as="h4" size="md" letterSpacing="tight">Profile Views</Heading>
                             <Heading as="h2" justifyContent="space-between" size="lg" color={"blue.100"}>{dashboard_stats.profile_views}</Heading>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                        <Flex display={"flex"}>
                            <Heading as="h4" size="md" letterSpacing="tight">Mentorship Session</Heading>
                            <Heading as="h2" size="lg" color={"blue.100"}>{dashboard_stats.mentorship_sessions}</Heading>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                        <Flex display={"flex"}>
                            <Heading as="h4" size="md" letterSpacing="tight">Jobs Applied</Heading>
                            <Heading as="h2" size="lg" color={"blue.100"}>{dashboard_stats.jobs_applied}</Heading>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                            <Flex display={"flex"}>
                                <Heading as="h4" size="md" letterSpacing="tight">Skills Verified</Heading>
                                <Heading as="h2" size="lg" color={"blue.100"}>{dashboard_stats.skills_verified}</Heading>
                            </Flex>
                        </Flex>
                </GridItem>
            </Grid>
        </Stack>
    )
}




export default OverView;