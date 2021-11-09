import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import { CenterPoint } from '../../types/map';
import { Offer, Offers } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type Props = {
  centerPoint: CenterPoint;
  offers: Offers;
  selectedOffer: Offer | undefined;
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

function Map({ centerPoint, offers, selectedOffer }: Props): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, centerPoint);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.lat,
          lng: offer.location.lng,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.name === selectedOffer.name
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
