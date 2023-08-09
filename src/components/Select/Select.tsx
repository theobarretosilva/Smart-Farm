import React, { forwardRef } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDown } from '../../assets/icons'
import * as S from './Select.styles'
import { SelectVariant } from '../../types/selectVariant'

type SelectItemProps = {
  children: string
  value: string
  disabled?: boolean
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <S.StyledItem ref={forwardedRef} {...props}>
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </S.StyledItem>
    )
  }
)

type Option = {
  value: string
  label: string
}

type SelectProps = {
  id?: string
  placeholder: string
  optionsData?: Option[]
  variant?: SelectVariant
  hasError?: boolean
} & RadixSelect.SelectProps

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    { id, optionsData, placeholder, variant = 'form', hasError, ...props },
    forwardedRef
  ) => {
    return (
      <RadixSelect.Root {...props}>
        <S.SelectTrigger
          ref={forwardedRef}
          id={id}
          aria-label="Dispositivo"
          variant={variant}
          $hasError={hasError}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <S.SelectIcon>
            <ChevronDown />
          </S.SelectIcon>
        </S.SelectTrigger>
        <RadixSelect.Portal>
          <S.SelectContent sideOffset={5} position="popper">
            <S.SelectViewport>
              {optionsData &&
                optionsData.map(({ label, value }, index) => {
                  const isLastItem = optionsData.length - 1 === index

                  return isLastItem ? (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ) : (
                    <React.Fragment key={value}>
                      <SelectItem value={value}>{label}</SelectItem>
                      <S.SelectSeparator />
                    </React.Fragment>
                  )
                })}
            </S.SelectViewport>
          </S.SelectContent>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)

// export function Select({
//   id,
//   optionsData,
//   placeholder,
//   variant = 'form',
//   ...props
// }: SelectProps) {
//   return (
//     <RadixSelect.Root {...props}>
//       <S.SelectTrigger id={id} aria-label="Dispositivo" variant={variant}>
//         <RadixSelect.Value placeholder={placeholder} />
//         <S.SelectIcon>
//           <ChevronDown />
//         </S.SelectIcon>
//       </S.SelectTrigger>
//       <RadixSelect.Portal>
//         <S.SelectContent sideOffset={5} position="popper">
//           <S.SelectViewport>
//             {optionsData &&
//               optionsData.map(({ label, value }, index) => {
//                 const isLastItem = optionsData.length - 1 === index

//                 return isLastItem ? (
//                   <SelectItem key={value} value={value}>
//                     {label}
//                   </SelectItem>
//                 ) : (
//                   <React.Fragment key={value}>
//                     <SelectItem value={value}>{label}</SelectItem>
//                     <S.SelectSeparator />
//                   </React.Fragment>
//                 )
//               })}
//           </S.SelectViewport>
//         </S.SelectContent>
//       </RadixSelect.Portal>
//     </RadixSelect.Root>
//   )
// }
