
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



const MiddlePane = () => {
    return (
        <Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
    >

        <Overview />
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
            <Flex justifyContent="space-between" mt={8}>
                <Flex align="flex-end">
                    <Heading as="h2" size="lg" letterSpacing="tight">Upcoming Sessions</Heading>
                    {/* <Text fontSize="small" color="gray" ml={4}>Apr 2021</Text> */}
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
                                <Th isNumeric>Date</Th>
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
                                            <Heading size="sm" letterSpacing="tight">Rushi Roi</Heading>
                                            <Text fontSize="sm" color="gray">Flutter</Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                                <Td isNumeric>14.00 - 15.00</Td>
                                <Td><Button backgroundColor={"pink.100"}>Membership</Button></Td>
                                <Td> <ArrowForwardIcon /></Td>
                               
                            </Tr>
                            <Tr>
                                <Td>
                                    <Flex align="center">
                                        <Avatar size="sm" mr={2} src="starbucks.png" />
                                        <Flex flexDir="column">
                                            <Heading size="sm" letterSpacing="tight">Vardant</Heading>
                                            <Text fontSize="sm" color="gray">Django</Text>
                                        </Flex>
                                    </Flex>
                                </Td>
                            
                                <Td >14.00 - 15.00</Td>
                                <Td><Button backgroundColor={"purple.300"}>Review</Button></Td>
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