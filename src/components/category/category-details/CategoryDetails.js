import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategoryItem } from '../../../actions/category/category';

import getCategoryItem from '../../../selectors/categories';

const CategoryDetails = ({match, categoriesData, fetchCategoryItem}) => {
    const {id: category, name: itemName} = match.params;
    const item = getCategoryItem(categoriesData, {category, itemName}) || {};

    useEffect(() => {
        if (!Object.keys(item).length) {
            fetchCategoryItem({category, name: itemName});
        }
    });

    return (
        <Fragment>
            <ul>
                {
                    item && Object.keys(item).map(key => (
                        <li key={key}><b>{key}</b>: {item[key]}</li>
                    ))
                }
            </ul>
        </Fragment>

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
