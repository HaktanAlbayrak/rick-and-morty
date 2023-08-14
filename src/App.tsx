import RickLogo from '/rick-and-morty.svg';
import RickTextLogo from './assets/images/rick-and-morty-text.svg';

function App() {
  return (
    <>
      <h1>Rick and Morty</h1>
      <img src={RickLogo} alt='logo' width='500px' height='500px' />
      <img src={RickTextLogo} alt='logo' width='500px' height='500px' />
    </>
  );
}

export default App;
