import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { fetchCategoryItem } from '../../../actions/category/category';

import getCategoryItem from '../../../selectors/categories';
import { formatData } from './helper';


const Head = styled.h1`
    text-transform: capitalize;
    margin-bottom: 25px;
`;

const ListItem = styled.li`
    margin-bottom: 10px;
    text-transform: capitalize
`;

ListItem.displayName = 'ListItem';


const CategoryDetails = ({match, categoriesData, fetchCategoryItem}) => {
    const {id: category, name: itemName} = match.params;
    const item = getCategoryItem(categoriesData, {category, itemName}) || {};


    useEffect(() => {
        if (!Object.keys(item).length) {
            fetchCategoryItem({category, name: itemName});
        }
    });

    const renderDeatils = item => (
        <Fragment>
            <Head>
                {item.name}
            </Head>
            <ul>
                {
                    Object.keys(item).map(key => (
                        <ListItem key={key}>
                            <b>{key}</b>: {item[key]}
                        </ListItem>
                    ))
                }
            </ul>
        </Fragment>
    );

    return (
        (item) ?
            renderDeatils(formatData(item)) :
            <Head>Nothing to display</Head>
    );
};


CategoryDetails.propTypes = {
    match: PropTypes.object,
    categoriesData: PropTypes.object,
    fetchCategoryItem: PropTypes.func
};

const mapStateToProps = state => ({
    categoriesData: state.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCategoryItem
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryDetails);

export { CategoryDetails };
