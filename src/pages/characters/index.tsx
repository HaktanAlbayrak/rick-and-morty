import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { CharacterCard } from '~/components/cards/character';
import Section from '~/components/section';
import { API_URL } from '~/utils/constants';
import noCharImg from '../../assets/images/no_char_img.jpeg';
import { SearchBar } from '~/components/search';

export type CharacterStatus = 'Alive' | 'unknown' | 'Dead';

type TItemProps = {
  id: number;
  name: string;
  species: string;
  status: CharacterStatus;
  image: string;
};

export default function Characters() {
  const { isLoading, data } = useQuery({
    queryKey: ['characters'],
    queryFn: () => fetch(API_URL + 'character').then((res) => res.json()),
  });

  if (isLoading) return <h2 className='text-active text-xl'>Loading...</h2>;

  if (data.error) return <h2 className='text-active text-xl'>{data.error}</h2>;

  return (
    <Section>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Grid item xs={6}>
              <SearchBar labelText='Search Character' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {!data.error
              ? data.results.map((item: TItemProps) => (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                    <Link to='/'>
                      <CharacterCard
                        name={item.name}
                        species={item.species}
                        status={item.status}
                        image={item.image !== '' ? item.image : noCharImg}
                      />
                    </Link>
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
