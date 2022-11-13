import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"  width="109" height="43" shape-rendering="geometricPrecision" viewBox="0 0 180 170"><path fill="#FCB400" d="M90.039 12.367L24.079 39.66c-3.667 1.519-3.63 6.729.062 8.192l66.235 26.266a24.575 24.575 0 0018.12 0l66.236-26.266c3.69-1.463 3.729-6.673.06-8.191l-65.958-27.294a24.578 24.578 0 00-18.795 0"></path><path fill="#18BFFF" d="M105.312 88.46v65.617c0 3.12 3.147 5.258 6.048 4.108l73.806-28.648a4.418 4.418 0 002.79-4.108V59.813c0-3.121-3.147-5.258-6.048-4.108l-73.806 28.648a4.42 4.42 0 00-2.79 4.108"></path><path fill="#F82B60" d="M88.078 91.846l-21.904 10.576-2.224 1.075-46.238 22.155c-2.93 1.414-6.672-.722-6.672-3.978V60.088c0-1.178.604-2.195 1.414-2.96a5.024 5.024 0 011.12-.84c1.104-.663 2.68-.84 4.02-.31L87.71 83.76c3.564 1.414 3.844 6.408.368 8.087"></path><path fill="rgba(0, 0, 0, 0.25)" d="M88.078 91.846l-21.904 10.576-53.72-45.295a5.024 5.024 0 011.12-.839c1.104-.663 2.68-.84 4.02-.31L87.71 83.76c3.564 1.414 3.844 6.408.368 8.087"></path>
          
              </svg> 
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (

      <Box bg={useColorModeValue()}
        color={useColorModeValue('gray.700', 'gray.200')}>
                <Box py={10}>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 8,
        }}>
        <Logo />
      </Flex>
      <Text pt={6} fontSize={'sm'} textAlign={'center'}>
        © 2022 Chakra Templates. All rights reserved
      </Text>
    </Box>
        <Container as={Stack} maxW={'7xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Papular Templates</ListHeader>
              <Link href={'#'}>Content Calendar</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Product Roadmap</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'} spacing={2}>Inventory Tracking</Link>
              <Link href={'#'} spacing={2}>Marketing Campaign Tracking</Link>
              <Link href={'#'} spacing={2}>Event Planning</Link>
            
              <Link href={'#'}>Show more</Link> 
            </Stack>






            <Stack align={'flex-start'}>
              <ListHeader>Popular Extensions</ListHeader>
              <Link href={'#'}>Miro</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Jira</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'} spacing={2}>Clearbit</Link>
              <Link href={'#'} spacing={2}>Loom</Link>
              <Link href={'#'} spacing={2}>Formstack</Link>
            
              <Link href={'#'}>Show more</Link> 
            </Stack>
           






















           
            <Stack align={'flex-start'}>
              <ListHeader>Learn More</ListHeader>
              <Link href={'#'}>Marketing</Link>
              <Link href={'#'}>Product Operations</Link>
              <Link href={'#'}>Human Resources</Link>
              <Link href={'#'}>Sales</Link>
              <Link href={'#'}>Operations</Link>
              <Link href={'#'}>Show more</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Popular Extensions</ListHeader>
              <Link href={'#'}>Miro</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Jira</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'} spacing={2}>Clearbit</Link>
              <Link href={'#'} spacing={2}>Loom</Link>
              <Link href={'#'} spacing={2}>Formstack</Link>
            
              <Link href={'#'}>Show more</Link> 
            </Stack>
           





            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
          </SimpleGrid>
        </Container>
    
      </Box>
    );
  }