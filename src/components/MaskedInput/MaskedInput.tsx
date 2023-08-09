import MaskedInputComponent, { Mask } from 'react-text-mask'
import { forwardRef } from 'react'
import type MaskedInputType from 'react-text-mask'
import { Input } from '../Input'

type MaskedInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  setValue?: React.Dispatch<React.SetStateAction<string>>
  value?: string
  mask: Mask | ((value: string) => Mask)
  hasError: boolean
}

export const MaskedInput = forwardRef<MaskedInputType, MaskedInputProps>(
  (
    { placeholder, id, value, setValue, mask, hasError, ...props },
    forwardedRef
  ) => {
    return (
      <MaskedInputComponent
        mask={mask}
        value={value}
        onChange={(e) => {
          if (setValue) setValue(e.target.value)
        }}
        placeholder={placeholder}
        id={id}
        ref={forwardedRef}
        {...props}
        render={(ref, renderProps) => (
          <Input inputRef={ref} hasError={hasError} {...renderProps} />
        )}
      />
    )
  }
)
