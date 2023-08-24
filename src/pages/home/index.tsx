import { Button, Grid } from '@mui/material';
import { GitHub, Storage } from '@mui/icons-material';
import Section from '~/components/section';
import { HomeTitle } from './components/title';

export default function Home() {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: 'flex', lg: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          <HomeTitle breakpoint='mobile' />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
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
            <Button variant='outlined' startIcon={<GitHub />} color='success'>
              Github
            </Button>
          </a>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { xs: 'none', lg: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          <HomeTitle breakpoint='desktop' />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
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
            <Button variant='outlined' startIcon={<Storage />} color='success'>
              API Service
            </Button>
          </a>
        </Grid>
      </Grid>
    </Section>
  );
}
