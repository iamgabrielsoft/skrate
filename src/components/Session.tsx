


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


import {
    ArrowForwardIcon
} from '@chakra-ui/icons'


export type UpcomingSession = {
    mentor_name: string; 
    timings: string; 
    date: string; 
    session_type: string;
}


type Props = {
    context: any 
}

const UpComingSession = (props) => {
    // console.log('context', context)
    
    return (
        <Flex
        w={["100%", "100%", "30%"]}
        bgColor="#F5F5F5" p="3%"
        flexDir="column"
        overflow="auto"
        minW={[null, null, "300px", "300px", "400px"]}
    >
        <Stack p="7" boxShadow="lg" borderRadius="sm">
            <Flex justifyContent="space-between" mt={8}>
                <Flex align="flex-end">
                    <Heading letterSpacing="tight">New Jobs</Heading>
                </Flex>
                <Button>View All</Button>              
            </Flex>
            <Flex flexDir="column" my={4}>
                <Flex justify="space-between" mb={2}>
                    <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                    <Text>gg</Text>
                    <Text color={"green.100"}>2 Hrs Ago</Text>
                    <Text fontWeight="bold"><ArrowForwardIcon /></Text>
                </Flex>
                <Flex justify="space-between" mt={20}>
                    <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                    <Text >Django Developer</Text>
                    <Text >1 Day Ago</Text>
                    <Text fontWeight="bold"><ArrowForwardIcon /></Text>
                </Flex>
                <Flex justify="space-between" mt={20}>
                    <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                    <Text>Quantitative Analysis</Text>
                    <Text >2 Days Ago</Text>
                    <Text fontWeight="bold"><ArrowForwardIcon /></Text>
                </Flex>
                <Flex justify="space-between" mt={20}>
                    <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                    <Text >C++ Developer</Text>
                    <Text >3 Days Ago</Text>
                    <Text fontWeight="bold"><ArrowForwardIcon /></Text>
                </Flex>
            </Flex> 
        </Stack>

    </Flex>
    )
}


export default UpComingSession; 