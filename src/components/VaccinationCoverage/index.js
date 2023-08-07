// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {vaccinationCoverageDetails} = props

  return (
    <div className="coverage-card-container">
      <h1 className="coverage-card-heading">Vaccination Coverage</h1>
      <BarChart
        width={900}
        height={400}
        dataKey={vaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineData"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar dataKey="does1" name="Dose 1" barSize="20%" fill="#5a8dee" radius={{10, 10, 0, 0}} />
        <Bar dataKey="does2" name="Dose 2" barSize="20%" fill=" #f54394" radius={{5, 5, 0, 0}} />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
