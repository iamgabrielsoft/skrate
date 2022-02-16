
import { 
    Flex, 
    Stack, 
    Heading, 
    Button, 
    Table, 
    Thead, 
    Tr, 
    Th, 
    Tbody, 
    Td, 
    Avatar, 
    Text, 

} from '@chakra-ui/react'


import Overview from '../components/Overview'

import {
    ArrowForwardIcon
} from '@chakra-ui/icons'

export type UpcomingSessionType = {
    mentor_name: number; 
    timings: number; 
    date: number; 
    session_type:number; 
}


const MiddlePane = (upcoming_sessions: UpcomingSessionType) => {
    return (
        <Flex
            w={["100%", "100%", "60%", "60%", "55%"]}
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
    >

        <Overview profile_views={89} mentorship_sessions={5} jobs_applied={3} skills_verified={3} />
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
            <Flex justifyContent="space-between" mt={8}>
                <Flex align="flex-end">
                    <Heading as="h2" size="lg" letterSpacing="tight">Upcoming Sessions</Heading>
                   
                </Flex>
                <Button>
                    View All
                </Button>
            </Flex>
            <Flex flexDir="column">
                <Flex overflow="auto">
                    <Table variant="unstyled" mt={4}>
                        <Thead>
                            <Tr color="gray">
                                <Th>Name </Th>
                                <Th isNumeric>Time</Th>
                                <Th>Date </Th>
                                <Th isNumeric>Type</Th>
                                <Th isNumeric>icons</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Flex align="center">

                                        <Avatar size="sm" mr={2} src="amazon.jpeg" />
                                        <Flex flexDir="column">
                                            <Heading size="sm" letterSpacing="tight">{upcoming_sessions?.props?.[0].mentor_name}</Heading>
                                            <Text fontSize="sm" color="gray">Flutter</Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td isNumeric>{upcoming_sessions?.props?.[0].timings}</Td>
                                <Td isNumeric>{upcoming_sessions?.props?.[0].date}</Td>
                                <Td><Button backgroundColor={"pink.100"}>{upcoming_sessions?.props?.[0].session_type}</Button></Td>
                                <Td> <ArrowForwardIcon /></Td>
                               
                            </Tr>
                            <Tr>
                                <Td>
                                    <Flex align="center">
                                        <Avatar size="sm" mr={2} src="starbucks.png" />
                                        <Flex flexDir="column">
                                            <Heading size="sm" letterSpacing="tight">{upcoming_sessions?.props?.[1].mentor_name}</Heading>
                                            <Text fontSize="sm" color="gray">Django</Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                            
                                <Td isNumeric>{upcoming_sessions?.props?.[0].timings}</Td>
                                <Td >{upcoming_sessions?.props?.[1].date}</Td>
                                <Td><Button backgroundColor={"purple.300"}>{upcoming_sessions?.props?.[1].session_type}</Button></Td>
                                <Td> <ArrowForwardIcon /></Td>
                                
                            </Tr>
                        </Tbody>
                    </Table>
                </Flex>
            </Flex>
        </Stack>
    </Flex>
    )
}


export default MiddlePane