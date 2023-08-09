import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/Login/Login.page'
import { LoggedInLayout } from '../components/LoggedInLayout'
import { SensorsLayout } from '../layouts/SensorsLayout'
import { EditProfileLayout } from '../layouts/EditProfileLayout'
import { LocationsLayout } from '../layouts/LocationsLayout'
import { OverviewLayout } from '../layouts/OverviewLayout'
import { ResetPasswordPage } from '../pages/ResetPassword/ResetPassword.page'
import { SignUpPage } from '../pages/SignUp/SignUp.page'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/resetar-senha" element={<ResetPasswordPage />} />
      <Route path="/cadastro" element={<SignUpPage />} />
      {/* <Route path="/teste" element={<CardMap />} /> */}
      {/** ^ Rota para testarmos componentes */}
      <Route path="/" element={<Navigate to="/visao-geral" />} />
      <Route path="/" element={<LoggedInLayout />}>
        <Route path="visao-geral/:location_id?" element={<OverviewLayout />} />
        <Route path="sensores/:location_id?" element={<SensorsLayout />} />
        <Route path="locais" element={<LocationsLayout />} />
        <Route path="configuracoes" element={<EditProfileLayout />} />
      </Route>
      <Route path="*" element={<Navigate to="/visao-geral" />} />
    </Routes>
  )
}
