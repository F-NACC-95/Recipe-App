import React from 'react';
import { HashRouter , Switch, Route } from 'react-router-dom';

import App from '../App';
import RecipePage from './RecipePage';

const Router  = () => (
    <HashRouter  basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path={'/'} component={App} exact />
            <Route path={'/recipe/:id'} component={RecipePage} />
        </Switch>
    </HashRouter >
)

export default Router;