import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { CharacterCard } from '~/components/cards/character';
import Section from '~/components/section';

export type CharacterStatus = 'Alive' | 'unknown' | 'Dead';

const data = [
  {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    species: 'Human',
    status: 'Alive' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
  {
    id: 4,
    name: 'Beth Smith',
    species: 'Human',
    status: 'Alive' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  },
  {
    id: 5,
    name: 'Jerry Smith',
    species: 'Dead',
    status: 'Alive' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  },
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    species: 'Alien',
    status: 'Alive' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
  },
  {
    id: 7,
    name: 'Abradolf Lincler',
    species: 'Human',
    status: 'unknown' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
  },
  {
    id: 8,
    name: 'Adjudicator Rick',
    species: 'Human',
    status: 'Dead' as CharacterStatus,
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
  },
];

export default function Characters() {
  return (
    <Section>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
            <Link to='/'>
              <CharacterCard
                name={item.name}
                species={item.species}
                status={item.status}
                image={item.image}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
