import React from 'react';
import { Switch, Route } from 'react-router';
import SubMenu1 from './Components/SubMenu1';
import SubMenu2 from './Components/SubMenu2';
import Menu2 from './Components/Menu2';
import Menu3 from './Components/Menu3';
import Menu1 from './Components/Menu1';

function BreadCrumbRoute(props) {
    return (
        <div>
        <Switch>
            <Route exact path='/bread-crumb/menu1' render={() => <Menu1></Menu1>}></Route>
            <Route exact path='/bread-crumb/menu1/subMenu1' render={() => <SubMenu1></SubMenu1>}></Route>
            <Route exact path='/bread-crumb/menu1/subMenu2' render={() => <SubMenu2></SubMenu2>}></Route>
            <Route exact path='/bread-crumb/menu2' render={() => <Menu2></Menu2>}></Route>
            <Route exact path='/bread-crumb/menu3' render={() => <Menu3></Menu3>}></Route>
        </Switch>
        </div>
    );
}

export default BreadCrumbRoute;
