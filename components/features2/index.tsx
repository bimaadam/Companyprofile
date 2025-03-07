import { Button, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { Flex } from '../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               gap: '1rem',
               pt: '$20',
               justifyContent: 'center',
               alignItems: 'center',
               px: '$6',
               overflow: 'auto',
               position: 'relative', //  elemen posisinya benar
               '@sm': {
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            {/* Background Image */}
            <img
               src="fiturbg1.jpg"
               alt=""
               style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.3,
                  zIndex: 1,
               }}
            />

            {/* Content Section */}
            <Flex
               direction={'column'}
               css={{
                  zIndex: 2, // Supaya teks di atas background
                  gap: '1rem',
                  pt: '$20',
                  justifyContent: 'center',
                  alignItems: 'center',
                  px: '$6',
                  '@sm': {
                     justifyContent: 'space-around',
                     px: '$32',
                     flexDirection: 'row',
                  },
                  '@md': {
                     px: '$64',
                  },
               }}
            >
               <Flex direction="column" align={'center'} css={{ px: '$8' }}> {/* Tambahkan padding horizontal */}
                  <Text span css={{ color: '$blue600' }}></Text>
                  <Text id="profile" h3>Tentang Perusahaan</Text>
                  <Text
                     span
                     css={{
                        maxWidth: '400px',
                        color: '$fff',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        textAlign: 'center', // Agar teks rata tengah
                        padding: '$4', // Tambahkan padding yang sama di semua sisi
                     }}
                  >
                     CV. Abyzain Jaya Teknika merupakan perusahaan yang bergerak di bidang penyedia barang, fabrikasi, dan menangani perawatan, perbaikan, modifikasi permesinan industri. Terutama mesin-mesin industri manufacturing Mesin CNC, Press, Welding, Custom.
                  </Text>

                  {/* VISI */}
                  <Flex
                     justify={'center'}
                     wrap={'wrap'}
                     css={{
                        py: '$5',
                     }}
                  >
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        {/* <BoxIcon /> */}
                        <Flex direction={'column'} css={{ alignItems: 'center' }}> {/* Rata tengah */}
                           <Text h4 weight={'medium'}>VISI</Text>
                           <Text
                              span
                              css={{
                                 maxWidth: '325px',
                                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                 color: '$fff',
                                 textAlign: 'center', // Tambahkan rata tengah
                                 padding: '$4', // Konsisten padding
                              }}
                           >
                              Menjadi perusahaan dagang dan jasa yang terbaik dan terpercaya di seluruh Indonesia.
                           </Text>
                        </Flex>
                     </Flex>

                  </Flex>

                  {/* MISI */}
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     {/* <BoxIcon /> */}
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}
                           css={{
                              textAlign: 'center',
                           }}>MISI</Text>
                        <Flex direction={'column'}>
                           <ul
                              className="misi-list"
                              style={{
                                 paddingLeft: '3.5rem',
                                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                 margin: 0,
                                 lineHeight: '1.6',
                              }}
                           >
                              <li>Meningkatkan dan mensupport perkembangan Industri.</li>
                              <li>Menjalin kerjasama dengan banyak relasi.</li>
                              <li>Memberikan lapangan pekerjaan bagi masyarakat.</li>
                              <li>Menjalin hubungan kerja sama yang baik dengan para distributor dan konsumen.</li>
                           </ul>
                        </Flex>


                     </Flex>
                  </Flex>
               </Flex>
            </Flex>

            {/* Feature Icon */}
            <Flex align={'center'} css={{ zIndex: 2 }}>
               <FeatureIcon />
            </Flex>
         </Flex>

         {/* Divider */}
         <Divider
            css={{
               position: 'absolute',
               inset: 0,
               left: 0,
               mt: '$5',
               zIndex: 3,
            }}
         />
      </>
   );
};
