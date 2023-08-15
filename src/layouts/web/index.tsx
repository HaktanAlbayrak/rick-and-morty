import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/header';

export default function WebLayout() {
  return (
    <>
      <ScrollRestoration />
      <main className='flex flex-col gap-10'>
        <Header />
        <Outlet />
      </main>
    </>
  );
}
