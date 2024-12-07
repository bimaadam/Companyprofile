import { NextPage } from 'next';
import { useState, useEffect } from 'react';
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
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            {/* <Trusted /> */}
            <Features1 />
            <Features2 />
            <Features3 />
            <Testimonials />
            <Statistics />
            {/* <Plans /> */}
            <Faq />
            <Trial />
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
   );
};

export default Home;
