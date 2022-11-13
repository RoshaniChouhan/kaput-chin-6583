import {
    Button,
    Flex,
    Heading,
  
    Stack,
    Text,
    Box,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import ReactPlayer from 'react-player'
  export default function Box5() {
    return (
        <Box minH={800} backgroundColor={"#FAF2F4"}>
 

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} width={"160vh"}  margin={"auto"}>
      <Flex flex={1} width={90}>
        {/* <ReactPlayer controls url='https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4' /> */}
             <video  src="https://static.airtable.com/images/homescreen/Homepage_Anim_03_TurnInformation_FINAL.mp4" muted="" autoplay="auto" preload="" playsinline="" loop="" controls ></video> 
        {/* <div class="col-12 lg-col-7 css-1uw7zbi"><picture class="mx-auto col-12"><video src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4" class="aspect-scale" muted="" autoplay="auto" preload="" playsinline="" loop="" controls></video></picture></div>   */}
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
           Interface with
              </Text>
              <br />{' '}
              <Text color={'black.400'} as={'span'}>
              work in a new
              </Text>{' '}
              <Text color={'black.400'} >
              way
              </Text>{' '}
            </Heading>
            <Text  fontSize={{ base: 'md', lg: 'lg'}} color={'gray.800'} >
            Create custom interfaces that give each and every teammate the relevant information they need, and a simple way to take action.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
        Learn More About Disegn Interfrance
              </Button>
              <Button rounded={'full'}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
      
      </Stack>
      </Box>
    );
  }