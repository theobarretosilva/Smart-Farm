import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'leaflet/dist/leaflet.css'
import { mapConfig } from './mapConfig'

const { titleLayer, redIcon } = mapConfig
interface MapProps {
  latitude: number
  longitude: number
}
function FlyTo({ position }: { position: L.LatLngTuple }) {
  const map = useMap()
  map.flyTo(position)
  return null
}

export function Map({ latitude, longitude }: MapProps) {
  const postion: L.LatLngTuple = [latitude, longitude]

  return (
    <MapContainer
      center={postion}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '255px', width: '100%' }}
    >
      <FlyTo position={postion} />
      <TileLayer {...titleLayer} />
      <Marker position={postion} icon={redIcon}>
        <Popup>Localização</Popup>
      </Marker>
    </MapContainer>
  )
}
