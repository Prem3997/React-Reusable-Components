import React from 'react'
import Localization from './Localization'
import { findWordTranslation, findBriefTranslation } from '../../Locate/utils'

export const LocalizationDemo = () => {
    return (
        <div>
            <Localization/>
            <br></br>
            <h2>Example For Word</h2>
            <h3>{findWordTranslation('Ratings')}</h3>
            <h2>Example For Long Text</h2>
            <h3 style={{marginLeft:'15%'}}>{findBriefTranslation('application.internationalized')}</h3>
        </div>
    )
}
