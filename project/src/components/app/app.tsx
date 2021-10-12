import Main from '../main/main';

type Props = {
  offersCount: number;
}

function App({ offersCount }: Props): JSX.Element {
  return (
    <Main offersCount={offersCount} />
  );
}

export default App;
