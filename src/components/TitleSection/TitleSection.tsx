import { Title } from './TitleSection.styled'

type TitleSectionProps = {
  name: string
}
export function TitleSection({ name }: TitleSectionProps) {
  return <Title>{name}</Title>
}
