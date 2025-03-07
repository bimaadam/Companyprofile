import { Button, Divider, Input, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     CV. Abyzain Jaya Teknika{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     {' '}
                  </Text>
                  <Text
                     h2
                     css={{
                        display: 'inline',
                     }}
                     color="red"
                  >
                     General Trading & Mechanical, Electrical Service
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  Usaha Kami bergerak dibidang permesinan industri serta bergerak dibidang perdagangan umum untuk kebutuhan industri.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  {/* <Input placeholder="Enter your email address" size="lg" />
                  <a href="mailto:bimavyanisy12@gmail.com">
                     <Button>Segera Hubungi Kami</Button>
                  </a> */}

               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     {/* <CheckIcon /> Cepat */}
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     {/* <CheckIcon /> Tepat */}
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     {/* <CheckIcon /> Tangguh */}
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                     boxShadow: '$xs',
                  },
               }}
            >
               <img src="cvabyzain.jpg" />
            </Box>
         </Flex>
         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}
         />
      </>
   );
};
