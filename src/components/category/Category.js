import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { fetchCategory } from '../../actions/category/category';


const Head = styled.h1`
    font-size: 1.8rem;
    text-transform: capitalize;
    margin-bottom: 25px;
`;

const ErrorMessage = styled.h2`
    color: red;
`;

Head.displayName = 'Head';

const SubCategory = styled.div`
    margin-bottom: 15px;
    
    & a {
        color: #545454;
        &:hover {
            color: #c8c8c8;
            outline: none;
        }
    }
`;

const Category = ({match, fetchCategory, categories, error}) => {
    const category = match.params.id;
    const categoryData = categories[category];
    const {data, loaded} = categoryData;


    useEffect(() => {
        if (!loaded) {
            fetchCategory(category);
        }
    }, [category]);


    const renderError = () => (
        <Fragment>
            <ErrorMessage>
                {error.message}
            </ErrorMessage>
        </Fragment>
    );

    const renderDetails = () => (
        <Fragment>
            <Head>
                {category}
            </Head>
            {
                data.map(item => (
                    <SubCategory key={item.name}>
                        <Link to={`${match.url}/${item.name}`}>{item.name}</Link>
                    </SubCategory>
                ))
            }
        </Fragment>
    );

    return (
        error ? renderError() : renderDetails()
    );
};


Category.propTypes = {
    match: PropTypes.object,
    fetchCategory: PropTypes.func,
    categories: PropTypes.object,
    error: PropTypes.object
};


const mapStateToProps = state => ({
    categories: state.categories,
    error: state.fetch.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCategory
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

export { Category };
