import { NavLink } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import * as S from './NavBar.styles'
import { useCompanyMe } from '../../hooks/useCompanyMe'

type NavBarProps = {
  selectedLocation?: string
}

export function NavBar({ selectedLocation }: NavBarProps) {
  const locationParam = selectedLocation ? `/${selectedLocation}` : ''
  const { getCompanyQuery } = useCompanyMe()
  const { data, isSuccess, isLoading } = getCompanyQuery

  return (
    <S.NavBar>
      <S.Empresa>
        {isLoading && <Skeleton width={160} height={135} />}
        {isSuccess && data.company}
      </S.Empresa>
      <S.Titulo>MENU</S.Titulo>
      <S.UlLink>
        <li>
          <NavLink to={`/visao-geral${locationParam}`}>Overview</NavLink>
        </li>
        <li>
          <NavLink to={`/sensores${locationParam}`}>Sensores</NavLink>
        </li>
        <li>
          <NavLink to="/locais">Locais</NavLink>
        </li>
        <li>
          <NavLink to="/configuracoes">Configurações</NavLink>
        </li>
      </S.UlLink>
      <S.Link
        onClick={() => localStorage.removeItem('SmartFarmToken')}
        to="/login"
      >
        Logout
      </S.Link>
    </S.NavBar>
  )
}
