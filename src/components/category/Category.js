import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { fetchCategory } from '../../actions/category/category';


const Head = styled.h1`
    text-transform: capitalize;
    margin-bottom: 25px;
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

const Category = ({match, fetchCategory, data}) => {
    const category = match.params.id;
    const categoryData = data[category];

    useEffect(() => {
        if (!categoryData.length) {
            fetchCategory(category);
        }
    }, [category]);

    return (
        <Fragment>
            <Head>
                {category}
            </Head>
            {
                categoryData.map(item => (
                    <SubCategory key={item.name}>
                        <Link to={`${match.url}/${item.name}`} >{item.name}</Link>
                    </SubCategory>
                ))
            }
        </Fragment>

    );
};


Category.propTypes = {
    match: PropTypes.object,
    fetchCategory: PropTypes.func,
    data: PropTypes.object
};


const mapStateToProps = state => ({
    data: state.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCategory
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

export { Category };
