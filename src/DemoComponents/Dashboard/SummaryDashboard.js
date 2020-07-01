import React, { useState } from 'react'
import DtcPageHeader from '../../SharedComponents/Dtc-PageHeader/DtcPageHeader'
import './Styles/summary-dashboard-styles.css'
import clientIcon from './Assets/ClientIcon.png'
import projectIcon from './Assets/ProjectIcon.png'
import technologyIcon from './Assets/TechnologyIcon.webp'
import revenueIcon from './Assets/RevenueIcon.svg'
import pipeLineIcon from './Assets/ProjectPipeLineIcon.png'
import DtcCardComponent from '../../SharedComponents/Dtc-CardComponent/DtcCardComponent'
import DtcModal from '../../SharedComponents/Dtc-Modal/DtcModal'
import { barChart, doughnutChart, horizontalBarChart, polarChart, radarChart } from './ModalProps'
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton'
import Localization from '../Localization/Localization'
import { findWordTranslation } from '../../Locate/utils'
export default function SummaryDashboard() {
    let pageHeader = findWordTranslation('Welcome to DTC Bengaluru UI/UX')
    let clientCount = 179
    let propertiesCount = 1026
    let chargeRaise = '140'
    let chargeCollected = '120 M'
    let chargeOutstanding = '20'

    const [addBarModalShow, setAddBarModalShow] = useState(false)
    const [addDoughnutModalShow, setAddDoughnutModalShow] = useState(false)
    const [addRadarModalShow, setAddRadarModalShow] = useState(false)
    const [addPolarModalShow, setAddPolarModalShow] = useState(false)
    const [addHorizontalModalShow, setAddHorizontalModalShow] = useState(false)

    const onDisplayBarchart = () => {
        setAddBarModalShow(true)

    }
    const onDisplayDoughnutChart = () => {
        setAddDoughnutModalShow(true)

    }
    const onDisplayRadarChart = () => {
        setAddRadarModalShow(true)

    }
    const onDisplayPolarChart = () => {
        setAddPolarModalShow(true)

    }
    const onDisplayHorizontalChart = () => {
        setAddHorizontalModalShow(true)
    }
    const addModalClose = () => {
        setAddBarModalShow(false)
        setAddDoughnutModalShow(false)
        setAddRadarModalShow(false)
        setAddPolarModalShow(false)
        setAddHorizontalModalShow(false)
    }
    const footerModalElement = <DtcButton
        className='dtc-secondary-whiteBg'
        onClick={addModalClose}
        buttonLabel='Close'
    />
    return (
        <div className="summary-dashboard">
            <DtcPageHeader header={pageHeader} ></DtcPageHeader>
            <div className="card-component">
                <DtcCardComponent
                    className="card"
                    onClick={onDisplayBarchart}
                    cardImg={clientIcon}
                    cardTitle={clientCount}
                    cardText={findWordTranslation('Client')}
                />
                <DtcCardComponent
                    className="card"
                    onClick={onDisplayDoughnutChart}
                    cardImg={projectIcon}
                    cardTitle={propertiesCount}
                    cardText={findWordTranslation('Projects')}
                />
                <DtcCardComponent
                    className="card"
                    onClick={onDisplayRadarChart}
                    cardImg={technologyIcon}
                    cardTitle={chargeRaise}
                    cardText={findWordTranslation('Technologies')}
                />
                <DtcCardComponent
                    className="card"
                    onClick={onDisplayPolarChart}
                    cardImg={revenueIcon}
                    cardTitle={chargeCollected}
                    cardText={findWordTranslation('Revenue')}
                />
                <DtcCardComponent
                    className="card"
                    onClick={onDisplayHorizontalChart}
                    cardImg={pipeLineIcon}
                    cardTitle={chargeOutstanding}
                    cardText={findWordTranslation('Projects in Pipeline')}
                />
            </div>
            <div>
                <DtcModal
                    title=''
                    show={addBarModalShow}
                    footer={footerModalElement}
                    element={barChart}
                    onHide={addModalClose}
                />
                <DtcModal
                    title=''
                    show={addDoughnutModalShow}
                    footer={footerModalElement}
                    element={doughnutChart}
                    onHide={addModalClose}
                />
                <DtcModal
                    title=''
                    show={addRadarModalShow}
                    footer={footerModalElement}
                    element={radarChart}
                    onHide={addModalClose}
                />
                <DtcModal
                    title=''
                    show={addPolarModalShow}
                    footer={footerModalElement}
                    element={polarChart}
                    onHide={addModalClose}
                />
                <DtcModal
                    title=''
                    show={addHorizontalModalShow}
                    footer={footerModalElement}
                    element={horizontalBarChart}
                    onHide={addModalClose}
                />
                <Localization/>
            </div>
        </div>
    )
}
