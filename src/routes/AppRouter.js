import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/404/NotFoundPage';
import Header from '../components/header/Header';
import Category from '../components/category/Category';
import CategoryDetails from '../components/category/category-details/CategoryDetails';
import Home from '../components/home/Home';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
`;

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <Wrapper>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/category/:id" exact component={Category}/>
                    <Route path="/category/:id/:name" exact component={CategoryDetails}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Wrapper>
        </Fragment>
    </BrowserRouter>
);

export default AppRouter;
