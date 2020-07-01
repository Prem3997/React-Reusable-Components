import React from 'react';
import { Trans } from "react-i18next"
import { Translation } from 'react-i18next';
export const findWordTranslation=(word)=>{
    return <Trans>{word}</Trans>
}
export const findBriefTranslation=(text)=>{
    return (
        <Translation>
           {t => <span>{t(text)}</span>}
        </Translation>
     )
}