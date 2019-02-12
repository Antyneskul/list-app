import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { fetchCategoryItem } from '../../../actions/category/category';

import getCategoryItem from '../../../selectors/categories';
import { formatData } from './helper';


const Head = styled.h1`
    font-size: 1.8rem;
    text-transform: capitalize;
    margin-bottom: 25px;
    
    line-height: 2rem;
    
    a {
        color: inherit;
    }
`;

Head.displayName = 'Head';

const ListItem = styled.li`
    margin-bottom: 10px;
    text-transform: capitalize
`;

ListItem.displayName = 'ListItem';


const CategoryDetails = ({match, categoriesData, fetchCategoryItem, fetching}) => {
    const {id: category, name: itemName} = match.params;
    const item = getCategoryItem(categoriesData, {category, itemName}) || {};
    const itemExists = Object.keys(item).length;


    useEffect(() => {
        if (!itemExists) {
            fetchCategoryItem({category, name: itemName});
        }
    }, []);

    const renderDetails = item => (
        <Fragment>
            <Head>
                <Link to={`/category/${category}`}>{category}</Link> : {item.name}
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
        (itemExists || fetching) ?
            renderDetails(formatData(item)) :
            <Head>Nothing to display</Head>
    );
};


CategoryDetails.propTypes = {
    match: PropTypes.object,
    categoriesData: PropTypes.object,
    fetchCategoryItem: PropTypes.func,
    fetching: PropTypes.bool
};

const mapStateToProps = state => ({
    categoriesData: state.categories,
    fetching: state.fetch.pending
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCategoryItem
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryDetails);

export { CategoryDetails };
