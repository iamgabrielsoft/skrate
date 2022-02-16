import React from 'react';
import { Stack, Text, Button, Flex, Heading, Grid, GridItem } from '@chakra-ui/react';



type Props = {
    
}

const OverView = () => {
    return (
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
            <Flex justifyContent="space-between" mt={3}>
                <Flex align="flex-end">
                    <Heading as="h2" size="lg" letterSpacing="tight">Overview</Heading>
                    
                </Flex>
                <Button>
                    Dashboard
                </Button>
            </Flex>
            <Grid templateColumns='repeat(5, 1fr)'  gap={4} > 
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                        <Flex display={"flex"} >
                            <Heading as="h4" size="md" letterSpacing="tight">Profile Views</Heading>
                             <Heading as="h2" size="lg" letterSpacing="tight">89</Heading>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                        <Flex display={"flex"}>
                            <Heading as="h4" size="md" letterSpacing="tight">Mentorship Session</Heading>
                            <Heading as="h2" size="lg" letterSpacing="tight">5</Heading>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                        <Flex display={"flex"}>
                            <Heading as="h4" size="md" letterSpacing="tight">Jobs Applied</Heading>
                            <Heading as="h2" size="lg" letterSpacing="tight">3</Heading>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={2} h='100px' bg='gray'>
                    <Flex justifyContent="space-between" mt={8}>
                        <Flex display={"flex"}>
                            <Heading as="h4" size="md" letterSpacing="tight">Skills Verified</Heading>
                            <Heading as="h2" size="lg" letterSpacing="tight">3</Heading>
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </Stack>
    )
}


const Index = () => (
    <OverView />
)


export default Index;