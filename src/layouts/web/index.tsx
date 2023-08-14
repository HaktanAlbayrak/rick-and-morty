import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/header';

export default function WebLayout() {
  return (
    <>
      <ScrollRestoration />
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  );
}
