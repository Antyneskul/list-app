import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundPage from '../components/404/NotFoundPage';
import Category from '../components/category/Category';
import CategoryDetails from '../components/category/category-details/CategoryDetails';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Loader from '../components/loader/Loader';

const Wrapper = styled.main`
    margin: 0 auto;
    width: 80%;
`;

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Loader/>
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
