import { nanoid } from '@reduxjs/toolkit';

type Props = {
  citiesList: string[],
  selectedCity: string,
  setSelectedCity: (city: string) => void,
}

function CitiesList({ citiesList, selectedCity, setSelectedCity }: Props): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {
        citiesList.map((city) => (
          <li className="locations__item" key={nanoid()}>
            <a onClick={() => { setSelectedCity(city); }} className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default CitiesList;
