import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tab2 from './Components/Tab2';
import CustomDialogIndex from '../Custom-Dialog/CustomDialogIndex';
import NumberFormatIndex from '../Number-Format/NumberFormatIndex';
import Tab1 from './Components/Tab1';

function DynamicTabHorizontaRoute(props) {
    return (
        <div>
            <Switch >
                    <Route exact path='/dynamictab-horizontal' render={() => <Tab1></Tab1>}></Route>
                    <Route exact path='/dynamictab-horizontal/tab1' render={() => <Tab1></Tab1>}></Route>
                    <Route exact path='/dynamictab-horizontal/tab2' render={() => <Tab2></Tab2>}></Route>
                    <Route exact path='/dynamictab-horizontal/custom-dialogue' render={() => <CustomDialogIndex />}></Route>
                    <Route exact path='/dynamictab-horizontal/number-format' render={() => <NumberFormatIndex />}></Route>
            </Switch>
        </div>
    );
}

export default DynamicTabHorizontaRoute;