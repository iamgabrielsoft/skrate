
import { 
    Stack,
    Flex,
    Heading, 
    Box, 
    Avatar
} from '@chakra-ui/react'


// type headerType = {
//     full_name: string
// }


const Header = () => {
    return (
        // <Flex p='2' borderBottom='10px' borderColor='gray.100' align="flex-end">
        //     <Box borderRadius='lg'>
        //         <Avatar name='Average Joe' size="sm" mr={2} src="amazon.jpeg" />Average Joe
        //     </Box>
        // </Flex>
        <Stack p="4" boxShadow="lg">
            <Flex align="flex-end">
                <Avatar name='Average Joe' size="sm" mr={2} src="amazon.jpeg" />Average Joe
            </Flex>
            ccc
        </Stack>
    )
}

export default Header; 