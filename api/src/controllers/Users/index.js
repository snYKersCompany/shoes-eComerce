const { UsersModel, Roles, ProductsModel } = require('../../models/ModelsDB.js');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const listUsers = async () => {
    const users = await UsersModel.find();
    return users;
}

const addUser = async (uid, email, roles) => {
    const result = await UsersModel.findById({ _id: uid });
    if (result) {
        return result;
    }
    const user = new UsersModel({ _id: uid, email: email });
    if (roles) {
        const rolesFound = await Roles.find({ name: { $in: roles } })
        user.roles = rolesFound.map(e => e.name);
    }
    else {
        const role = await Roles.findOne({ name: 'user' });
        user.roles = role.name;
    }
    await user.save();
    return user;
}

const findUser = async (id) => {
    if (!id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(id);
    if (!user) {
        return `The user with an id ${id} was not found in the database`
    }
    return user;
}

const getUserFavouritesProducts = async (id) => {
    if (!id) throw new Error(`It needs an id property`);
    const user = await UsersModel.aggregate([
        { $match:{_id:id} },
        {
        $lookup:{
            from: "products",
            localField: "favourites",
            foreignField: "_id",
            as: "productsFavourites"
            }
        }
    ])
    if (!user) {
        return `The user with an id ${id} was not found in the database`
    }
    return user
}

const deleteUser = async (id) => {
    if (!id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(id);
    if (!user) {
        return `The user with an id ${id} was not found in the database`;
    }
    await UsersModel.deleteOne({ _id: id });
    return `The user with an id ${id} was successfully deleted`;
}

const modifyUser = async (id, name, email, password, phone, address, city, image, admin) => {
    let user = await UsersModel.findById(id);
    if (!user) {
        throw new Error(`The user with an id ${id} was not found in the database`);
    }
    await UsersModel.updateOne({ _id: id }, { $set: { name, email, password, phone, address, city, image, admin } });
    return `The user with an id ${id} was successfully modified`;
}

const postFavourites = async (id, favourite) => {
    const user = await UsersModel.findById({ _id: id });
    if (!user) {
        throw new Error(`User was not found in the database`);
    }
    const product = await ProductsModel.findOne({ _id: favourite });
    user.favourites = [product.id];
    await user.save();
    console.log(user);
}

const postUsers = async (array) => {
    array.map((e) => {
        UsersModel.create({
            name: e.name,
            username: e.username,
            email: e.email,
            password: e.password,
            phone: e.phone,
            address: e.address,
            city: e.city,
            image: e.image,
            admin: e.admin
        });
        jwt.sign({ id: e._id }, SECRET, {
            expiresIn: 86400
        });
    });
    Promise.all(array);
    return `Users added successfully`;
}


module.exports = {
    listUsers,
    addUser,
    findUser,
    deleteUser,
    modifyUser,
    postUsers,
    postFavourites,
    getUserFavouritesProducts
}