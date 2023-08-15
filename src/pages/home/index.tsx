import { Button, Container, Grid, Typography } from '@mui/material';
import { GitHub, Storage } from '@mui/icons-material';

export default function Home() {
  return (
    <Container maxWidth='xl' sx={{ marginTop: '8rem' }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src='https://www.nicepng.com/png/full/145-1455248_rick-and-morty-clipart-rick-head-rick-and.png'
            alt='rick face'
            className='w-52 h-52 mb-3'
          />
          <a
            href='https://github.com/HaktanAlbayrak/rick-and-morty'
            target='_blank'
          >
            <Button
              variant='outlined'
              sx={{
                width: '10rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              startIcon={<GitHub />}
              color='success'
            >
              Github
            </Button>
          </a>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          <Typography variant='h3' className='text-active'>
            Rick and Morty
          </Typography>
          <Typography variant='h4' className='text-active'>
            Guide
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src='https://www.nicepng.com/png/full/312-3121864_rick-and-morty-morty-face-rick-and-morty.png'
            alt='morty face'
            className='w-52 h-52 mb-3'
          />
          <a href='https://rickandmortyapi.com/' target='_blank'>
            <Button
              variant='outlined'
              sx={{
                width: '10rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              startIcon={<Storage />}
              color='success'
            >
              API Service
            </Button>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
