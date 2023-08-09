import * as RadixDialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import * as S from './LinkSensorDialog.styles'

type FormControlButtonsProps = {
  isLoading?: boolean
}

export function FormControlButtons({ isLoading }: FormControlButtonsProps) {
  return (
    <S.ButtonsWrapper>
      <RadixDialog.DialogClose asChild>
        <Button type="button" variant="outlined">
          Cancelar
        </Button>
      </RadixDialog.DialogClose>
      <Button disabled={isLoading} variant="main" type="submit">
        Salvar
      </Button>
    </S.ButtonsWrapper>
  )
}
