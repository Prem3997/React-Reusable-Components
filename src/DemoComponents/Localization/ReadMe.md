## Library/PackageName
react-i18next

## Library/PackageVersion
"react-i18next": "^11.7.0",

## Library/PackageLicense

## Installation guidelines/steps

Copy the i18n.js file  to the Project.<br>
Create Separate folder for each translation and add the translation to your file_translation.json<br>
Now in index page of the react app, we have to import the i18n file and pass it as a prop to I18nextProvider<br> component, which wraps the entire application<br>


## How to use Localization
use the t function, just put the content inside the t function, which serves as key for other languages<br>
{t("Introduction")}

eg:<br>
import XHR from "i18next-xhr-backend";

import translationEng from "../locales/en/translation.json";<br>
import translationGer from "../locales/ger/translation.json";<br>
import translationFre from "../locales/fre/translation.json";<br>
import translationHin from "../locales/hin/translation.json";<br>
import translationJap from "../locales/jap/translation.json";<br>