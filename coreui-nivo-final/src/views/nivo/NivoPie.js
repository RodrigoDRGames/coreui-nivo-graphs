import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Responsive } from '@nivo/pie'
import { CButton, CButtonGroup, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import DataTableView from './DataTable'

const NivoPie = () => {
  const [viewType, setViewType] = useState('Graph') // Alterna entre gráfico e tabela
  const [pieOrDonut, setPieOrDonut] = useState('Pie')
  
  const pieData = [
    ({
      id: 'java',
      label: 'java',
      value: 335,
      color: 'hsl(352, 70%, 50%)',
    },
    {
      id: 'hack',
      label: 'hack',
      value: 215,
      color: 'hsl(131, 70%, 50%)',
    },
    {
      id: 'css',
      label: 'css',
      value: 493,
      color: 'hsl(285, 70%, 50%)',
    },
    {
      id: 'python',
      label: 'python',
      value: 407,
      color: 'hsl(212, 70%, 50%)',
    },
    {
      id: 'go',
      label: 'go',
      value: 70,
      color: 'hsl(29, 70%, 50%)',
    }),
  ]

  const MyResponsivePie = ({ data }) => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  )

  MyResponsivePie.propTypes = {
    data: PropTypes.array.isRequired,
    pieType: PropTypes.sbooltring.isRequired,
  }

  return (
    <>
      <CCardHeader>
        <CRow>
          <CCol sm={9}>
            <h4>Nivo Pie Chart</h4>
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
                  active={value === pieOrDonut}
                  onClick={() => setPieOrDonut(value)}
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
        {viewType === 'Graph'  
          ?<MyResponsivePie data={pieData} pieType={pieOrDonut.toLowerCase()} />
          :<DataTableView tableData={pieData} />
          
         
        }
      </CCardBody>
    </>
  )
}

export default NivoPie
