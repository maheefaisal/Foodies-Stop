import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { HeroSectionWrapper, SearchBox } from './hero.style';

const HeroSection = () => {
   return (
      <HeroSectionWrapper>
         <Container
            sx={{
               height: '100%',
            }}
         >
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
               }}
            >
               <Box
                  sx={{
                     width: '50%',
                  }}
               >
                  <Typography
                     variant='h3'
                     fontWeight={500}
                     textAlign='center'
                     color='#ffff'
                  >
                     Food That Satisfies the Taste Buds
                  </Typography>



                  <SearchBox>
                     <input
                        type='search'
                        alt='Search Food'
                        placeholder='Hungry? Solve is here'
                     />
                     <button>Search</button>
                  </SearchBox>
               </Box>
            </Box>
         </Container>
      </HeroSectionWrapper>
   );
};

export default HeroSection;
