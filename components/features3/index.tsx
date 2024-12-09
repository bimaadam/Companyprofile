import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { FeatureIcon } from '../icons/FeatureIcon';

export const Features3 = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               {/* <Text span css={{color: '$blue600'}}>
                  Awesome Feature
               </Text> */}
               <Text id='jasa' h3>Produk & Pelayanan</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Instalasi, perawatan/maintenance, modifikasi, programing PLC, HMI, dan perbaikan mesin CNC, press, welding, dll
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Jasa Repair Controller Mesin</Text>
                           <Text span>
                              Power supply module, Servo module, Spindle module, Mitshubishi, fanuc, Takisawa dll.
                           </Text>
                        </Flex>
                     </Flex>
                     <Flex align={'center'}>
                        <img src="ps.svg" alt="Power Supply" />
                        </Flex>
                  </Card.Body>
               </Card>
               {/* <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
                  </Card> */}
            </Flex>
         </Box>


         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
