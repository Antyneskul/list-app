export default (categoriesData, {category, itemName}) => categoriesData[category] && categoriesData[category].find(({name}) => name === itemName);

