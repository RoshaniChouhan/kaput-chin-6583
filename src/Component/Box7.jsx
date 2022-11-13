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
  export default function Box7() {
    return (
        <Box minH={800}  backgroundColor={"#FFF"}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} width={"160vh"}  margin={"auto"}>
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
           Get started
              </Text>
              <br />{' '}
              <Text color={'black.400'} as={'span'}>
              quickly
              </Text>{' '}
            </Heading>
            <Text  fontSize={{ base: 'md', lg: 'lg'}} color={'gray.800'} >
            Begin building on day one. Airtable’s pre-made templates and intuitive design help you tackle even your most complex needs, right away.
            </Text>
          
          </Stack>
        </Flex>
        <Flex flex={1} marginRight={40}>
        {/* <ReactPlayer controls url='https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4' /> */}
             <video   src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4" muted="" autoplay="auto" preload="" playsinline="" loop="" controls ></video> 
        {/* <div class="col-12 lg-col-7 css-1uw7zbi"><picture class="mx-auto col-12"><video src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4" class="aspect-scale" muted="" autoplay="auto" preload="" playsinline="" loop="" controls></video></picture></div>   */}
       
   
        </Flex>
      

      
       
      </Stack>
      </Box>
    );
  }