import { useState } from 'react'
import { Dialog } from '../Dialog'
import { LinkSensorForm } from '../LinkSensorForm'

type LinkSensorDialogProps = {
  trigger: React.ReactNode
}

export function LinkSensorDialog({ trigger }: LinkSensorDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      trigger={trigger}
      title="Vincular Sensor"
      subtitle="Vincular um novo sensor ao local."
    >
      <LinkSensorForm isEditForm={false} setOpen={setOpen} />
    </Dialog>
  )
}
