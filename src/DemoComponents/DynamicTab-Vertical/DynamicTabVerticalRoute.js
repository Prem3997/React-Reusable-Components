import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import DynamicForm from '../Dynamic-Form/DynamicForm';
import CarouselIndex from '../Carousel/CarouselIndex';

function DynamicTabVerticalRoute(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/dynamictab-vertical/tab1' render={() => <Tab1></Tab1>}></Route>
                <Route exact path='/dynamictab-vertical/tab2' render={() => <Tab2></Tab2>}></Route>
                <Route exact path='/dynamictab-vertical/dynamic-form' render={() => <DynamicForm></DynamicForm>}></Route>
                <Route exact path='/dynamictab-vertical/carousel' render={() => <CarouselIndex></CarouselIndex>}></Route>
            </Switch>
        </div>
    );
}

export default DynamicTabVerticalRoute;