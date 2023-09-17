import React from 'react';
import { Container, Box, IconButton, Button, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FlexBox } from '../../styled/FlexBox';

const Header = () => {
   return (
      <div>
         <Container>
            <FlexBox
               justifyContent='space-between'
               sx={{
                  padding: '2rem 0',
               }}
            >
               <img
                  alt='Logo'
                  src='https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/12/2021/08/Singapore-Food-Festival-lead.jpg'
                  style={{
                     width: '200px',
                     height: '100px'
                  }}
               />

               <Stack
                  direction='row'
                  spacing={4}
                  sx={{
                     alignItems: 'center',
                  }}
               >
                  <IconButton>
                     <ShoppingCartOutlinedIcon />
                  </IconButton>

                  <Button variant='text' sx={{ color: '#191919' }}>Sign In</Button>
                  <Button>Sign Up</Button>
               </Stack>
            </FlexBox>
         </Container>
      </div>
   );
};

export default Header;
