


import { 
    Flex, 
    Stack, 
    Heading, 
    Button, 
    Container,
    Avatar, 
    Text, 

} from '@chakra-ui/react'


import {
    ArrowForwardIcon
} from '@chakra-ui/icons'



type JobPostingType = {
    role: string;
    organization_name: string; 
    location:string;
    date_posted: string;
}



const JobPosting = (job_postings: JobPostingType) => {
    return (   
        <Flex
            w={["100%", "100%", "30%"]}
            bgColor="#F5F5F5" p="3%"
            flexDir="column"
            overflow="auto"
            minW={[null, null, "300px", "300px", "400px"]}
    >
        <Stack p="7" boxShadow="lg" borderRadius="sm">
            <Container>
            <Flex justifyContent="space-between" mt={8}>
                <Flex align="flex-end">
                    <Heading letterSpacing="tight">New Jobs</Heading>
                </Flex>
                <Button>View All</Button>              
            </Flex>
            <Flex flexDir="column" my={4}>
                <Flex justify="space-between" mb={2}>
                    {
                        Object.entries(job_postings?.props?.[0] || {}).map(([key, value]) => (
                            <>
                                <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                                <Text key={key.role}>{value}</Text>
                                {/* <Text color={"green.100"}>{value?.organization_name}</Text>
                                <Text color={"green.100"}>{value?.timings}</Text> */}
                                <Text fontWeight="bold"><ArrowForwardIcon /></Text>            
                            </>

                        ))
                    }

                </Flex>
                <Flex justify="space-between" mt={20}>
                    {
                        Object.entries(job_postings?.props?.[1] || {}).map(([key, value]) => (
                            <>
                                <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                                <Text key={key}>{value}</Text>
                                {/* <Text color={"green.100"}>{value?.organization_name}</Text>
                                <Text color={"green.100"}>{value?.timings}</Text> */}
                                <Text fontWeight="bold"><ArrowForwardIcon /></Text>            
                            </>

                        ))
                    }
                </Flex>
                <Flex justify="space-between" mt={20}>
                    {
                        Object.entries(job_postings?.props?.[2] || {}).map(([key, value]) => (
                            <>
                                <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                                <Text key={key}>{value}</Text>
                                {/* <Text color={"green.100"}>{value?.organization_name}</Text>
                                <Text color={"green.100"}>{value?.timings}</Text> */}
                                <Text fontWeight="bold"><ArrowForwardIcon /></Text>            
                            </>

                        ))
                    }
                </Flex>
                <Flex justify="space-between" mt={20}>
                    {
                        Object.entries(job_postings?.props?.[3] || {}).map(([key, value]) => (
                            <>
                                <Text><Avatar size="sm" mr={2} src="amazon.jpeg" /></Text>
                                <Text key={key}>{value}</Text>
                                {/* <Text color={"green.100"}>{value?.organization_name}</Text>
                                <Text color={"green.100"}>{value?.timings}</Text> */}
                                <Text fontWeight="bold"><ArrowForwardIcon /></Text>            
                            </>

                        ))
                    }
                </Flex>
            </Flex>
            </Container>
 
        </Stack>

    </Flex>
    )
}


export default JobPosting; 