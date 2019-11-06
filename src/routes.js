import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Index from './pages/index';
import Layout from './hoc/layout';
import About from './pages/about';
import Services from './pages/services';
import Team from './pages/team';
import Contact from './pages/contact';
import Test from './test';


const Routes = (props) => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path="/about"  component={About} />
                    <Route path="/services"  component={Services} />
                    <Route path="/team"  component={Team} />
                    <Route path="/contact"  component={Contact} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/" exact component={Index} />
                    
                    {/* <PrivateRoute path="/protected" component={Protected} /> */}
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}

export default Routes;