import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategory } from '../../actions/category';

const Category = ({match, fetchCategory, data}) => {
    const category = match.params.id;

    useEffect(() => {
        fetchCategory(category);
    }, [category]);

    return (
        <Fragment>
            <h1>
                {match.params.id.toUpperCase()}
            </h1>
            {
                data[category].map(item => (
                    <div key={item.name}>
                        <Link to={`${match.url}/${item.name}`}>{item.name}</Link>
                    </div>
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
