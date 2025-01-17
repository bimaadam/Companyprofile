import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head'; // Import Head untuk SEO
import { Faq } from '../components/faq';
import { Features1 } from '../components/features1';
import { Features2 } from '../components/features2';
import { Features3 } from '../components/features3';
import { Footer } from '../components/footer';
import { Hero } from '../components/hero';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Plans } from '../components/plans';
import { Statistics } from '../components/statistics';
import { Box } from '../components/styles/box';
import { Testimonials } from '../components/tesminonials';
import { Trial } from '../components/trial';

const Home: NextPage = () => {
   const [showButton, setShowButton] = useState(false);

   // Pantau scroll untuk munculin tombol
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 300) {
            setShowButton(true);
         } else {
            setShowButton(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   // Scroll ke atas saat tombol diklik
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <>
         <Head>
            <title>CV. Abyzain Jaya Teknika</title>
            <meta name="description" content="CV. Abyzain Jaya Teknika menyediakan layanan fabrikasi dan modifikasi mesin lengkap serta produk permesinan dengan kualitas terbaik." />
            <meta name="keywords" content="fabrikasi, mesin, modifikasi mesin, permesinan, penyedia barang, modifikasi, CV Abyzain Jaya Teknika" />
            <meta name="author" content="CV Abyzain Jaya Teknika" />
            <meta property="og:title" content="CV. Abyzain Jaya Teknika - Fabrikasi, Penyedia Barang dan Permesinan" />
            <meta property="og:description" content="CV. Abyzain Jaya Teknika menyediakan layanan fabrikasi dan modifikasi mesin lengkap serta produk permesinan dengan kualitas terbaik." />
            <meta property="og:image" content="https://abyzainjayateknika.my.id/AJT.png" />
            <meta property="og:url" content="https://abyzainjayateknika.my.id/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="CV. Abyzain Jaya Teknika - Fabrikasi, Penyedia Barang dan Permesinan" />
            <meta name="twitter:description" content="CV. Abyzain Jaya Teknika menyediakan layanan fabrikasi dan modifikasi mesin lengkap serta produk permesinan dengan kualitas terbaik." />
            <meta name="twitter:image" content="https://abyzainjayateknika.my.id/AJT.png" />
            <link rel="icon" href="/AJT.png" />
            {/* <meta name="google-adsense-account" content="ca-pub-9183186667394973"></meta> */}
         </Head>

         <Layout>
            <Nav />
            <Box as="main">
               <Hero />
               {/* <Trusted /> */}
               <Features1 />
               <Features2 />
               <Features3 />
               {/* <Testimonials />
               <Statistics /> */}
               {/* <Plans /> */}
               {/* <Faq />
               <Trial /> */}
               <Footer />
            </Box>

            {/* Tombol Scroll ke Atas */}
            {showButton && (
               <button
                  onClick={scrollToTop}
                  className={`back-to-top-button ${showButton ? 'show' : ''}`}
               >
                  ⬆️
               </button>
            )}
         </Layout>
      </>
   );
};

export default Home;
