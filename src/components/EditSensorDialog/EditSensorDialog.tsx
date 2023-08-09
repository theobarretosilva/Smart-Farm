import { useState } from 'react'
import { Dialog } from '../Dialog'
import { LinkSensorForm } from '../LinkSensorForm'
import { EditSensorDto } from '../../types/editSensorDto'

type VSensorDialogProps = {
  trigger: React.ReactNode
  sensorData: EditSensorDto
}

export function EditSensorDialog({ trigger, sensorData }: VSensorDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      trigger={trigger}
      title="Editar Sensor"
      subtitle="Editar as informações do sensor."
    >
      <LinkSensorForm isEditForm sensorData={sensorData} setOpen={setOpen} />
    </Dialog>
  )
}
