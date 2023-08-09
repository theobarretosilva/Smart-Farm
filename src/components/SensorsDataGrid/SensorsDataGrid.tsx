import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from '@mui/x-data-grid'
import TrashIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { useUnlinkSensor } from '../../hooks/useUnlinkSensor'
import { EditSensorDialog } from '../EditSensorDialog'

export type RowData = {
  id: number
  sensor_id: number
  name: string
  createdAt: string
  macAddress: string
  active: boolean
  available_sensor_id: number
}

type DataGridProps = {
  sensors: RowData[]
}

export function SensorsDataGrid({ sensors }: DataGridProps) {
  const { unlinkSensorMutation } = useUnlinkSensor()

  const columns: GridColDef[] = [
    {
      field: 'available_sensor_id',
      headerName: 'device',
      width: 75,
    },
    {
      field: 'sensor_id',
      headerName: 'ID',
      width: 75,
    },
    {
      field: 'name',
      headerName: 'Nome',
      width: 270,
    },
    {
      field: 'createdAt',
      headerName: 'Data da vinculação',
      width: 200,
    },
    {
      field: 'macAddress',
      headerName: 'Endereço MAC',
      width: 210,
    },
    {
      field: 'active',
      headerName: 'Status',
      width: 100,

      // eslint-disable-next-line consistent-return
      renderCell: (params) => {
        const isActive = params.value
        const statusText = isActive ? 'Ativo' : 'Inativo'
        const statusColor = isActive ? 'green' : 'red'
        return <span style={{ color: statusColor }}>{statusText}</span>
      },
    },
    {
      field: 'edit',
      type: 'actions',
      align: 'left',
      headerName: 'Editar',
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={0}
          icon={
            <EditSensorDialog
              sensorData={{
                active: params.row.active,
                macAddress: params.row.macAddress,
                name: params.row.name,
                sensorId: params.row.id,
                availableSensorId: params.row.available_sensor_id,
              }}
              trigger={<EditIcon titleAccess="Editar" color="primary" />}
            />
          }
          label="Edit"
        />,
      ],
    },
    {
      field: 'unlink',
      type: 'actions',
      align: 'left',
      headerName: 'Desvincular',
      getActions: ({ row: { sensor_id } }: GridRowParams) => [
        <GridActionsCellItem
          key={0}
          icon={<TrashIcon titleAccess="Desvincular" color="error" />}
          label="Edit"
          onClick={() => unlinkSensorMutation.mutate(sensor_id)}
        />,
      ],
    },
  ]

  return (
    <DataGrid
      columns={columns}
      rows={sensors.map((sensor) => ({
        id: sensor.sensor_id,
        sensor_id: sensor.sensor_id,
        name: sensor.name,
        createdAt: sensor.createdAt,
        macAddress: sensor.macAddress,
        active: sensor.active,
        available_sensor_id: sensor.available_sensor_id,
      }))}
      columnVisibilityModel={{
        available_sensor_id: false,
      }}
      sx={{
        fontFamily: 'Inter',
        fontSize: '0.9rem',
        color: '#2D2D34',
        border: 'none',
      }}
      getRowId={(row) => row.id}
      hideFooter
    />
  )
}
