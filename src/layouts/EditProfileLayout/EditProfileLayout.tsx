import { TitleSection } from '../../components/TitleSection'
import { ProfileForm } from '../../components/ProfileForm'
import { InnerLayout } from '../../components/InnerLayout'

export function EditProfileLayout() {
  return (
    <InnerLayout>
      <TitleSection name="Configurações" />
      <ProfileForm />
    </InnerLayout>
  )
}
