import { useState } from 'react'
import { Dialog } from '../Dialog'
import { LocationForm } from '../LocationForm'

type LocationDialogProps = {
  trigger: React.ReactNode
}

export function LocationDialog({ trigger }: LocationDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      trigger={trigger}
      title="Criar Local"
      subtitle="Adicionar um novo local à empresa."
    >
      <LocationForm isEditForm={false} setOpen={setOpen} />
    </Dialog>
  )
}
