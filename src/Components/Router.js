import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import RecipePage from './RecipePage';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} component={App} exact />
            <Route path={process.env.PUBLIC_URL + '/recipe/:id'} component={RecipePage} />
        </Switch>
    </BrowserRouter>
)

export default Router;