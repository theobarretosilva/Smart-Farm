import { useState } from 'react'
import { Dialog } from '../Dialog'
import { LocationForm } from '../LocationForm'
import { EditLocationDto } from '../../types/editLocationDto'

type EditLocationDialogProps = {
  trigger: React.ReactNode
  locationData: EditLocationDto
}

export function EditLocationDialog({
  trigger,
  locationData,
}: EditLocationDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      trigger={trigger}
      title="Editar Local"
      subtitle="Editar as informações do local."
    >
      <LocationForm isEditForm locationData={locationData} setOpen={setOpen} />
    </Dialog>
  )
}
