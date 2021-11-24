import React from 'react';
import { City } from '../../types/offer';

type Props = {
  citiesList: City[],
  selectedCity: string,
  setSelectedCity: (city: string) => void,
}

function CitiesList({ citiesList, selectedCity, setSelectedCity }: Props): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {
        citiesList.map((city) => (
          <li className="locations__item" key={city.name}>
            <a onClick={() => { setSelectedCity(city.name); }} className={`locations__item-link tabs__item ${selectedCity === city.name ? 'tabs__item--active' : ''}`} href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default React.memo(CitiesList);
