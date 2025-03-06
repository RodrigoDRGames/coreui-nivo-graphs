import PropTypes, { object } from 'prop-types'
const { CTableBody, CTableHead, CTableRow } = require('@coreui/react')

function DataTableView({ tableData }) {
  const conlumns = Object.keys(tableData[0])

  const tableHeaderData = () => {
    return columns.map((data) => {
      return (
        <CTableHeadCell scope="col" key={data}>
          {data.toUpperCase()}
        </CTableHeadCell>
      )
    })
  }

  const tableBodyData = () => {
    return tableData.map((rowData) => {
      return (
        <CTableRow key={rowData}>
          {columns.map((colId) => {
            return (
              <CTableDataCell scope="col" key={colId}>
                {rowData[colId]}
              </CTableDataCell>
            )
          })}
        </CTableRow>
      )
    })
  }
  DataTableView.propTypes = {
    tableData: PropTypes.object.isRequired,
  }

  return (
    <CTable bordered striped>
      <CTableHead>
        <CTableRow>{tableHeaderData()}</CTableRow>
      </CTableHead>
      <CTableBody>{tableBodyData(0)}</CTableBody>
    </CTable>
  )
}
export default DataTableView
