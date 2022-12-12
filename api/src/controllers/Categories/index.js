const { CategoryModel } = require('../../models/ModelsDB.js');

const listCategories = async (name) => {
    if (name) {
        const category = await CategoryModel.findOne({ name: name });
        if (!category) {
            throw new Error(`Could not find the category in the database`);
        }
        return category
    }
    let categories = await CategoryModel.find();
    categories = categories.map(e => e.name);
    return categories;
}

const postCategory = async (name) => {
    const result = await CategoryModel.findOne({name: name});
    if (result) {
        throw new Error(`The category ${ name } was already found in the database`);
    }
    const category = await CategoryModel.create({ name: name });
    return `The ${ category.name } was successfully created`;
}

const deleteCategory = async (name) => {
    const category = await CategoryModel.findOne({ name: name });
    if (!category) {
        return `The category ${ name } was not found in the database`;
    }
    await CategoryModel.deleteOne({name: name});
    return `The category ${ name } was successfully deleted`;
}

const findCategory = async (name) => {
    const category = await CategoryModel.findOne({ name: name });
    if (!category) {
        throw new Error(`Could not find the category in the database`);        
    }
    return category;
}

const postCategories = async (array) => {    
    array.map((e) => {
        CategoryModel.create({
            name: e.name            
        })
    });
    Promise.all(array);    
    return `Categories added successfully`;
}

module.exports = {
    listCategories,
    postCategory,
    deleteCategory,
    findCategory,
    postCategories
}