const { UsersModel, Roles, ProductsModel } = require('../../models/ModelsDB.js');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const listUsers = async ({ search, orderBy }) => {
    let parameters = {}
    if (search) {
        parameters.$or = [
            { username: { $regex: `(?i)${search}(?-i)` } },
            { phone: { $regex: `(?i)${search}(?-i)` } },
            { address: { $regex: `(?i)${search}(?-i)` } },
            { email: { $regex: `(?i)${search}(?-i)` } },
            { city: { $regex: `(?i)${search}(?-i)` } },
            { country: { $regex: `(?i)${search}(?-i)` } }
        ]
    }

    let sort = {}
    if (orderBy) sort = orderBy
    // console.log({search, orderBy})
    // console.log({sort, parameters})
    const users = await UsersModel.find(parameters).sort(sort);
    // console.log({users})
    return users;
}

const addUser = async (uid, email, username, password, name, phone, address, city, cp, state, country, image, roles) => {
    const result = await UsersModel.findById({ _id: uid });
    if (result) {
        return result;
    }
    const user = new UsersModel({
        _id: uid,
        email: email,
        username: username,
        password: await UsersModel.encryptPassword(password),
        name: name,
        phone: phone,
        address: address,
        city: city,
        cp: cp,
        state: state,
        country: country,
        image: image
    });
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

const findUser = async (_id) => {
    if (!_id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(_id);
    if (!user) {
        return `The user with an id ${_id} was not found in the database`
    }
    return user;
}

const getUserDashboard = async (id) => {
    if (!id) throw new Error(`It needs an id property`);
    console.log(id)
    let user = await UsersModel.findById(id);

    user = await UsersModel.aggregate([
        { $match: { _id: id } },
        {
            $lookup: {
                from: "products",
                localField: "favourites",
                foreignField: "_id",
                as: "productsFavourites"
            }
        },
        // {
        //     $lookup: {
        //         from: "roles",
        //         localField: "roles",
        //         foreignField: "_id",
        //         as: "roles"
        //     }
        // },
        {
            $lookup: {
                from: "reviews",
                localField: "reviews",
                foreignField: "_id",
                as: "reviews"
            }
        },
        { $unwind: "$roles" }
    ])

    if (!user) {
        return `The user with an id ${id} was not found in the database`
    }
    return user;
}


const deleteUser = async (id) => {
    if (!id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(id);
    if (!user) {
        return `The user with an id ${id} was not found in the database`;
    }
    const deleteUser = await UsersModel.deleteOne({ _id: id });
    console.log(deleteUser)
    return deleteUser;
}

const modifyUser = async ({ id, name, username, password, status, roles, email, country, phone, address, city, state, image }) => {
    let user = await UsersModel.findById(id);
    if (!user) throw new Error(`The user with an id ${id} was not found in the database`);

    // const expression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (expression.test(password)) {
    //     throw new Error(`Password invalid, It must have 8 letters, 1 number and 1 character`);
    // }

    let parameters = {}
    if (name && name.length) parameters.name = name;
    if (username && username.length) parameters.username = username;
    if (password && password.length) parameters.password = password = await UsersModel.encryptPassword(password);
    if (email && email.length) parameters.email = email;
    if (typeof status === 'boolean') parameters.status = status;
    if (phone && phone.length) parameters.phone = phone;
    if (address && address.length) parameters.address = address;
    if (city && city.length) parameters.city = city;
    if (country && country.length) parameters.country = country;
    if (state && state.length) parameters.state = state;
    if (roles && roles.length) parameters.roles = roles;
    if (image && image.length) parameters.image = image;
    // if(image.length) parameters.image = image;
    await UsersModel.updateOne({ _id: id }, { $set: parameters });
    // return `The user with an id ${id} was successfully modified`;
    const updateUser = await getUserDashboard(id)
    return updateUser
}

const addFavoriteProducts = async (_id, favorite) => {
    if (!favorite) throw new Error('Falta el dato favorite')
    if (!_id) throw new Error('Falta el dato _id')
    await UsersModel.updateOne({ _id }, { $addToSet: { favourites: favorite } })
    const user = await getUserDashboard(_id);
    return user
}

const deleteFavoriteProducts = async (_id, favorite) => {
    if (!favorite) throw new Error('Falta el dato favorite')
    if (!_id) throw new Error('Falta el dato _id')
    await UsersModel.updateOne({ _id }, { $pull: { favourites: favorite } })
    const user = await getUserDashboard(_id);
    return user
}

const postFavourites = async (id, favourite) => {
    const user = await UsersModel.findById({ _id: id });
    if (!user) {
        throw new Error(`User was not found in the database`);
    }
    const product = await ProductsModel.findOne({ _id: favourite });
    user.favourites = [product.id];
    await user.save();
    // console.log(user);
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
    getUserDashboard,
    addFavoriteProducts,
    deleteFavoriteProducts
}