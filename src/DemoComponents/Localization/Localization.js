import React, { useState } from 'react'
import { findBriefTranslation } from '../../Locate/utils'
import i18n from '../../i18n'

const Localization = (props) => {
    const [langValue, setLangValue] = useState('en')

    const onLanguageHandle = (event) => {
        let newLang = event.target.value
        setLangValue(newLang)
        i18n.changeLanguage(newLang)
    }
    return (
        <div>
            <p>{findBriefTranslation('application.localized')} :</p>
            <input
                checked={langValue === 'en'}
                name="language"
                onChange={(e) => onLanguageHandle(e)}
                value="en"
                type="radio"
            /> English &nbsp;
            <input name="language"
                value="fr"
                checked={langValue === 'fr'}
                type="radio"
                onChange={(e) => onLanguageHandle(e)} /> French&nbsp;
            <input name="language"
                value="jp"
                checked={langValue === 'jp'}
                type="radio"
                onChange={(e) => onLanguageHandle(e)} /> Japanese&nbsp;
            <input name="language"
                value="ru"
                checked={langValue === 'ru'}
                type="radio"
                onChange={(e) => onLanguageHandle(e)} /> Russian&nbsp;
            <input name="language"
                value="hindi"
                checked={langValue === 'hindi'}
                type="radio"
                onChange={(e) => onLanguageHandle(e)} /> Hindi&nbsp;
            <input name="language"
                value="tamil"
                checked={langValue === 'tamil'}
                type="radio"
                onChange={(e) => onLanguageHandle(e)} /> Tamil&nbsp;
            <input name="language"
                value="kannada"
                checked={langValue === 'kannada'}
                type="radio"
                onChange={(e) => onLanguageHandle(e)} /> Kannada&nbsp;
        </div>
    )
}
export default Localization