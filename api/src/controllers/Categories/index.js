const { CategoryModel } = require('../../models/ModelsDB.js');

const listCategories = async (name) => {
    if (name) {
        const category = await CategoryModel.find({where: {name: name}});
        if (!category) {
            throw new Error(`Could not find the category in the database`);
        }
        return category
    }
    const categories = await CategoryModel.find();
    return categories;
}

module.exports = {
    listCategories
}