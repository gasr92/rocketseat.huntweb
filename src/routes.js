import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        
        {/* Switch faz com que somente uma roda seja chamda por vez */}
        <Switch>
            {/* sem o exact assim que encontrar a raiz, o react ira exibi-lo */}
            <Route exact path='/' component={Main}/>
            <Route path='/products/:id' component={Product}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;