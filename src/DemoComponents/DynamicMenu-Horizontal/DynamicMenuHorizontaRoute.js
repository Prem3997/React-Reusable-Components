import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu2 from './Components/Menu2';
import CustomDialogIndex from '../Custom-Dialog/CustomDialogIndex';
import NumberFormatIndex from '../Number-Format/NumberFormatIndex';
import Menu1 from './Components/Menu1';
import Menu3 from './Components/Menu3';

function DynamicMenuHorizontaRoute(props) {
    return (
        <div>
            <Switch >
                    <Route exact path='/dynamicMenu-horizontal/menu1' render={() => <Menu1></Menu1>}></Route>
                    <Route exact path='/dynamicMenu-horizontal/menu2' render={() => <Menu2></Menu2>}></Route>
                    <Route exact path='/dynamicMenu-horizontal/menu3' render={() => <Menu3></Menu3>}></Route>
                    <Route exact path='/dynamicMenu-horizontal/custom-dialogue' render={() => <CustomDialogIndex />}></Route>
                    <Route exact path='/dynamicMenu-horizontal/number-format' render={() => <NumberFormatIndex />}></Route>
            </Switch>
        </div>
    );
}

export default DynamicMenuHorizontaRoute;