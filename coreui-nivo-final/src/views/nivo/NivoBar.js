import React, { useState } from 'react'
import PropTypes from 'prop-types' // Para validação de propriedades
import { ResponsiveBar } from '@nivo/bar'
import { CButton, CButtonGroup, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import DataTableView from './DataTable' // Componente hipotético para tabela de dados


const MyResponsiveBar = ({ data, layout }) => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    layout={layout} // Layout dinâmico (horizontal/vertical)
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: { id: 'fries' },
        id: 'dots',
      },
      {
        match: { id: 'sandwich' },
        id: 'lines',
      },
    ]}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
  />
)

MyResponsiveBar.propTypes = {
  data: PropTypes.array.isRequired,
  layout: PropTypes.string.isRequired,
}

const NivoBar = () => {
  const [viewType, setViewType] = useState('Graph') // Alterna entre gráfico e tabela
  const [layout, setLayout] = useState('vertical') // Alterna layout horizontal/vertical

  return (
    <>
      <CCardHeader>
        <CRow>
          <CCol sm={9}>
            <h4>Nivo Bar Chart</h4>
          </CCol>
          <CCol sm={3}>
            <CButtonGroup>
              {['Graph', 'Data'].map((value) => (
                <CButton
                  color="outline-secondary"
                  active={value === viewType}
                  onClick={() => setViewType(value)}
                  key={value}
                >
                  {value}
                </CButton>
              ))}
            </CButtonGroup>
          </CCol>
          <CCol sm={3}>
            <CButtonGroup>
              {['horizontal', 'vertical'].map((value) => (
                <CButton
                  color="outline-secondary"
                  active={value === layout}
                  onClick={() => setLayout(value)}
                  key={value}
                >
                  {value}
                </CButton>
              ))}
            </CButtonGroup>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody style={{ height: '600px' }}>
        {viewType === 'Graph' ? (
          <MyResponsiveBar data={initialData} layout={layout} />
        ) : (
          <DataTableView tableData={initialData} />
        )}
      </CCardBody>
    </>
  )
}

export default NivoBar
