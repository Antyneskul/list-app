export default (categoriesData, {category, itemName}) => {
    const {data = []} = categoriesData[category] || {};

    return data && data.find(({name}) => name === itemName);
};

