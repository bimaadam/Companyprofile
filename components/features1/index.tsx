import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features1 = () => {
   return (
      <>
         <Flex
            css={{
               position: 'relative',
               justifyContent: 'center',
               alignItems: 'center',
               width: '100%',
               height: '100vh',
               overflow: 'hidden',
            }}
         >
            {/* Background Image */}
            

            {/* Content */}
            
               <Flex direction="column">
                  <Text h3>Pengalaman Service & Repair 🔑</Text>
                  <Flex css={{py: '$10', gap: '$5'}}>
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           PT. SUMIDEN SINTERED COMPONENTS INDONESIA
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex css={{py: '$10', gap: '$5'}}>
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>PT. MITRANOVA</Text>
                     </Flex>
                  </Flex>
                  <Flex css={{py: '$10', gap: '$5'}}>
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           PT. AISAN NASMOCO INDONESIA
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            

            {/* SVG Image */}
            <Flex
               align={'center'}
               css={{
                  zIndex: 2, // SVG juga di atas background
                  mt: '$20',
               }}
            >
               <img src="koneksi.svg" alt="" />
            </Flex>
         </Flex>

         <Divider
            css={{
               position: 'absolute',
               inset: '0',
               left: '0',
               mt: '$5',
            }}
         />
      </>
   );
};
