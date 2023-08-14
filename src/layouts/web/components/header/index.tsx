import { NavLink } from 'react-router-dom';
import { Stack, Divider } from '@mui/material';
import RickAndMortyTextLogo from '~/assets/images/rick-and-morty-text.svg';
import classNames from 'classnames';

export default function Header() {
  return (
    <header className='w-full flex flex-col justify-center items-center p-5 gap-2'>
      <img
        src={RickAndMortyTextLogo}
        alt='Rick and Morty text logo'
        className='w-64 h-28 drop-shadow-lg logo'
      />
      <Stack
        direction='row'
        divider={
          <Divider
            orientation='vertical'
            flexItem
            sx={{ border: '1px solid #2c3e50' }}
          />
        }
        spacing={2}
      >
        <NavLink
          to='/'
          className={({ isActive }) =>
            classNames('text-xl', {
              'text-active': isActive,
              'text-linkDefault': !isActive,
            })
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/characters'
          className={({ isActive }) =>
            classNames('text-xl', {
              'text-active': isActive,
              'text-linkDefault': !isActive,
            })
          }
        >
          Characters
        </NavLink>
        <NavLink
          to='/locations'
          className={({ isActive }) =>
            classNames('text-xl', {
              'text-active': isActive,
              'text-linkDefault': !isActive,
            })
          }
        >
          Locations
        </NavLink>
        <NavLink
          to='/episodes'
          className={({ isActive }) =>
            classNames('text-xl', {
              'text-active': isActive,
              'text-linkDefault': !isActive,
            })
          }
        >
          Episodes
        </NavLink>
      </Stack>
    </header>
  );
}
