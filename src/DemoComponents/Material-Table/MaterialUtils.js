import data from './TableData.json'
import { columns } from './TableProps'

let average = 0
let sum = 0
let count = 0
let sumToAverage = 0
let sumLabel = ""
let averageLabel = ''

export const sumSummary = (cNum) => {
    count = data.data.length
    data.data.map(a => {
        var b = Object.keys(a)
        var count = -1

        b.map(c => {

            count++
            sumLabel = columns[cNum - 1].title
            if (c === columns[cNum - 1].field) {

                sum += (Object.values(a)[count])
            }
            return c;
        })
        return a;
    })

    return [sumLabel, sum]
}

export const averageSummary = (cNum) => {
    count = data.data.length
    data.data.map(a => {
        var b = Object.keys(a)
        var count = -1

        b.map(c => {

            count++
            averageLabel = columns[cNum - 1].title
            if (c === columns[cNum - 1].field) {

                sumToAverage += (Object.values(a)[count])
            }
            return c
        })
        return a
    })
    average = sumToAverage / count
    return [averageLabel, average]
}

