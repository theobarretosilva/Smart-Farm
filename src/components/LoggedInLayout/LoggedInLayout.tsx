import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import { Select } from '../Select'
import { useCheckIfLoggedIn } from '../../hooks/useCheckIfLoggedIn'
import * as S from './LoggedInLayout.styles'
import { NavBar } from '../NavBar'
import { useGetLocations } from '../../hooks/useGetLocations'
import { useStore } from '../../lib/zustand/store'

export function LoggedInLayout() {
  useCheckIfLoggedIn()
  const store = useStore()
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const isInOverviewOrSensors =
    location.pathname.includes('visao-geral') ||
    location.pathname.includes('sensores')

  const [selectedLocation, setSelectedLocation] = useState(params?.location_id)

  const { getLocationsQuery: locationsQuery } = useGetLocations()

  const hasSelectedLocation = selectedLocation !== 'undefined'

  const locationParam = selectedLocation ? `/${selectedLocation}` : ''

  const optionsData = locationsQuery.data
    ? locationsQuery.data.map(({ location_id, fieldName }) => ({
        label: fieldName,
        value: String(location_id),
      }))
    : undefined

  useEffect(() => {
    const selectedLocationOption = optionsData?.find(
      ({ value }) => value === selectedLocation
    )

    store.setSelectedLocation(selectedLocationOption?.label || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation, locationsQuery.isSuccess])

  useEffect(() => {
    const isLocationRegistered = optionsData?.some(
      ({ value }) => value === params?.location_id
    )

    const hasLocationParam = !!params?.location_id
    const { isLoading } = locationsQuery

    const shouldRemoveLocationParam =
      !isLocationRegistered && hasLocationParam && !isLoading

    if (shouldRemoveLocationParam) {
      const currentLocationArray = location.pathname.split('/')
      const currentLocationArrayNoParam = currentLocationArray.slice(0, -1)
      const newLocation = currentLocationArrayNoParam.join('/')
      navigate(newLocation)
      setSelectedLocation(undefined)
    }
  }, [
    location.pathname,
    locationsQuery,
    locationsQuery.isLoading,
    navigate,
    optionsData,
    params?.location_id,
  ])

  const select = locationsQuery.isLoading ? (
    <Skeleton variant="rectangular" width={150} height={40} />
  ) : (
    <Select
      variant="header"
      placeholder="Selecione um local"
      value={!hasSelectedLocation ? undefined : selectedLocation}
      optionsData={optionsData}
      onValueChange={(value) => {
        setSelectedLocation(value)

        if (params?.location_id) {
          const currentLocationArray = location.pathname.split('/')
          const currentLocationArrayNoParam = currentLocationArray.slice(0, -1)
          const newLocationArray = [...currentLocationArrayNoParam, value]
          const newLocation = newLocationArray.join('/')
          navigate(newLocation)
          return
        }

        const newLocation = `${location.pathname}/${value}`
        navigate(newLocation)
      }}
    />
  )

  return (
    <S.Container>
      <S.Header>
        <NavLink
          style={{ all: 'unset', cursor: 'pointer' }}
          to={`/visao-geral${locationParam}`}
        >
          <h1>CONNECT LAB</h1>
        </NavLink>

        {isInOverviewOrSensors && select}
      </S.Header>
      <NavBar selectedLocation={selectedLocation} />
      <S.Main>
        <Outlet />
      </S.Main>
      <Toaster position="bottom-center" />
    </S.Container>
  )
}
