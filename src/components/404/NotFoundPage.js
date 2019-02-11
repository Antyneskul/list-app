import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Text = styled.h1`
        text-align: center;
        font-size: 2rem;
        
        a {
            color: #3a3f44;
        }
`;

const NotFound = styled(Text)`
        font-size: 4rem;
        margin-bottom: 50px;
`;

const NotFoundPage = () => (
    <Fragment>
        <NotFound>
            404
        </NotFound>
        <Text>
            <Link to="/">May Force Help You Find What Are You Looking For</Link>
        </Text>
    </Fragment>
);


export default NotFoundPage;
