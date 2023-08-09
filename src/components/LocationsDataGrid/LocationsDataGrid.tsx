import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from '@mui/x-data-grid'
import TrashIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import { EditLocationDialog } from '../EditLocationDialog'
import { useExcludeLocation } from '../../hooks/useExcludeLocation'

type RowData = {
  id: number
  location_id: number
  fieldName: string
  latitude: number
  longitude: number
  linked_sensor: number
}

type DataGridProps = {
  locations: RowData[]
}

export function LocationsDataGrid({ locations }: DataGridProps) {
  const { excludeLocationMutation } = useExcludeLocation()

  const columns: GridColDef[] = [
    { field: 'location_id', headerName: 'ID', width: 80 },
    { field: 'fieldName', headerName: 'Local', width: 280 },
    {
      field: 'latitude',
      headerName: 'Latitude',
      width: 200,
    },
    {
      field: 'longitude',
      headerName: 'Longitude',
      width: 210,
    },
    {
      field: 'linked_sensor',
      headerName: 'Sensores',
      width: 100,
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
            <EditLocationDialog
              locationData={{
                fieldName: params.row.fieldName,
                latitude: params.row.latitude,
                longitude: params.row.longitude,
                location_id: params.row.location_id,
              }}
              trigger={<EditIcon titleAccess="Editar" color="primary" />}
            />
          }
          label="Edit"
        />,
      ],
    },
    {
      field: 'exclude',
      type: 'actions',
      align: 'left',
      headerName: 'Excluir',
      getActions: ({ row: { location_id } }: GridRowParams) => [
        <GridActionsCellItem
          key={0}
          icon={<TrashIcon titleAccess="Excluir" color="error" />}
          label="Edit"
          onClick={() => excludeLocationMutation.mutate(location_id)}
        />,
      ],
    },
  ]

  return (
    <DataGrid
      columns={columns}
      rows={locations.map((location) => ({
        id: location.location_id,
        location_id: location.location_id,
        fieldName: location.fieldName,
        latitude: location.latitude,
        longitude: location.longitude,
        linked_sensor: location.linked_sensor,
      }))}
      // checkboxSelection
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
