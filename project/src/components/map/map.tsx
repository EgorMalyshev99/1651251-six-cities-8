import { useEffect, useRef, useState } from 'react';
import { Icon, Marker } from 'leaflet';
import { City, Offer, Offers } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type Props = {
  offers: Offers;
  selectedOffer?: Offer;
  setAdditionalClass: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function Map({ offers, selectedOffer, setAdditionalClass }: Props): JSX.Element {
  const mapRef = useRef(null);
  let currentCity: City | undefined;

  if (offers.length === 0) {
    currentCity = {
      name: 'Paris',
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10,
      },
    };
  } else {
    currentCity = offers[0].city;
  }

  const map = useMap(mapRef, currentCity);
  const [markers, setMarkers] = useState<any[]>([]);
  const center = {
    lat: currentCity.location.latitude,
    lng: currentCity.location.longitude,
  };

  useEffect(() => {
    if (map) {
      markers.forEach((marker: any) => {
        marker.remove();
      });
      setMarkers([]);
      const currentMarkers: any = [];

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        currentMarkers.push(marker);
        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
      setMarkers(currentMarkers);
    }
  }, [map, offers, selectedOffer]);

  useEffect(() => {
    map?.setView(center);
  }, [center, map]);

  return (
    <section className={`${setAdditionalClass} map`} ref={mapRef}></section>
  );
}

export default Map;
