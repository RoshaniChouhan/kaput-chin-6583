import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
 Box
  } from '@chakra-ui/react';
  
  export default function Box6() {
    return (
        <Box backgroundColor="#FAF2F4">
      <Container maxW={'5xl'} backgroundColor="#FAF2F4">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
      Bring all your data together
           
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          All your information. Always up to date. At your fingertips.
          <br/>
           Keep everything in sync across your organization.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'blue.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
           <Image src="https://static.airtable.com/images/homescreen/homepage-sync.jpg"/>
          </Flex>
        </Stack>
      </Container>
      </Box>
    );
  }
  
  