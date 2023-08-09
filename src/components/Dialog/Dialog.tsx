import * as RadixDialog from '@radix-ui/react-dialog'
import { Dispatch, SetStateAction } from 'react'
import * as I from '../../assets/icons'
import * as S from './Dialog.styles'

type DialogProps = {
  trigger: React.ReactNode
  children: React.ReactNode
  open?: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
  title: string
  subtitle?: string
}

export function Dialog({
  trigger,
  children,
  open,
  setOpen,
  title,
  subtitle,
}: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen}>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.TitleWrapper>
            <RadixDialog.Title>{title}</RadixDialog.Title>
            <p>{subtitle}</p>
          </S.TitleWrapper>
          {children}
          <RadixDialog.Close asChild>
            <S.IconButton aria-label="Close">
              <I.Close />
            </S.IconButton>
          </RadixDialog.Close>
        </S.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
