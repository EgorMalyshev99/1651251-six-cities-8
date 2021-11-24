import { renderHook } from '@testing-library/react-hooks';
import { CITIES_LIST } from '../const';
import useMap from './use-map';

describe('Hook: useMap', () => {
  it('should return map', () => {
    const mapRef = { current: document.createElement('div') };
    const { result } = renderHook(() =>
      useMap(mapRef, CITIES_LIST[0]),
    );

    const map = result.current;
    expect(map).not.toBe(null);
    expect(map.getCenter().lat).toBe(CITIES_LIST[0].location.latitude);
  });
});
