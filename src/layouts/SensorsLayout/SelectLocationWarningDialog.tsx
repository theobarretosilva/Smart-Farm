import { Dialog } from '../../components/Dialog'
import * as S from './SensorsLayout.styles'

export function SelectLocationWarningDialog() {
  return (
    <Dialog
      title="Selecione um local"
      trigger={<S.Button variant="main">Novo Sensor</S.Button>}
    >
      É preciso selecionar um local para realizar a vinculação de sensores.
    </Dialog>
  )
}
