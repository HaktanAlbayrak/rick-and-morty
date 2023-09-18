import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { CharacterCard } from '~/components/cards/character';
import { SearchBar } from '~/components/search';
import Section from '~/components/section';
import { API_URL } from '~/utils/constants';
import noCharImg from '../../assets/images/no_char_img.jpeg';

export type CharacterStatus = 'Alive' | 'unknown' | 'Dead';

type TItemProps = {
  id: number;
  name: string;
  species: string;
  status: CharacterStatus;
  image: string;
};

export default function Characters() {
  const [search, setSearch] = useState<string>('');
  const [errorText, setErrorText] = useState<string | null>(null);

  const fetchCharacterData = useCallback(async () => {
    let apiUrl = API_URL + 'character';

    if (search !== '') {
      apiUrl = API_URL + `character?name=${search}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!response.ok) {
        throw new Error();
      }

      if (data !== undefined) {
        return data;
      }
    } catch (error) {
      setErrorText('There is nothing here.');
    }
  }, [search]);

  const { data } = useQuery({
    queryKey: ['characters', search],
    queryFn: () => fetchCharacterData(),
  });

  return (
    <Section>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Grid item xs={6}>
              <SearchBar
                labelText='Search Character'
                onChange={(event) => setSearch(event.target.value)}
                setValue={setSearch}
                value={search}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {data ? (
              data.results.map((item: TItemProps) => (
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
            ) : (
              <Grid item xs={12}>
                <h2 className='text-active text-xl flex justify-center text-center w-full'>
                  {errorText}
                </h2>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
