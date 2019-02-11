import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;
    
    background: rgba(0, 0, 0, 0.5);
`;


const Loader = ({fetching}) => (
    fetching && <Fragment>
        <Backdrop/>
    </Fragment>
);

Loader.propTypes = {
    fetching: PropTypes.bool
};

const mapStateToProps = state => ({
    fetching: state.fetch.pending
});

export default connect(mapStateToProps)(Loader);
