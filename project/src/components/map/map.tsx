import { useRef, useEffect, useState } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map.js';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offers, Offer, City } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  setAdditionalClass: string;
  offers: Offers;
  selectedOffer?: Offer;
  mapCenter: City | undefined;
}

function Map({ setAdditionalClass, mapCenter, offers, selectedOffer }: MapProps): JSX.Element {
  const [markers, setMarkers] = useState<any[]>([]);
  const mapRef = useRef(null);
  const map = useMap(mapRef, mapCenter);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    if (map) {
      markers.forEach((marker: any) => {
        marker.remove();
      });
      setMarkers([]);

      const arrMarkers: any = [];
      offers.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: (selectedOffer !== undefined && point.id === selectedOffer.id)
            ? activeCustomIcon
            : defaultCustomIcon,
        });
        arrMarkers.push(marker);
        marker.addTo(map);
      });
      setMarkers(arrMarkers);
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={`${setAdditionalClass} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
