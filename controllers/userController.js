const User = require('../models/User');

exports.createUser = async (req, res) => {

    try {
        const {name, email, photo, role, password, passwordConfirm} = req.body;

        const users = await User.create({
            name,
            email,
            // photo,
            role,
            password,
            passwordConfirm
        });

        res.status(200).json({
            status: 'success',
            users
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

exports.getUsers = async (req, res) => {

    try {
        const users = await User.find();

        res.status(200).json({
            status: 'success',
            users
        });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }

}

exports.getUser = (req, res) => {

    const user = User.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        user
    });

}

exports.updateUser = async (req, res) => {

    try {
        const {name, email, role, password} = req.body;

        const user = await User.findById(req.params.id).select('+password');
        user.name = name;
        user.email = email;
        user.password = password;
        await user.save({validateBeforeSave: false});

        res.status(200).json({
            status: 'success',
            user
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

exports.deleteUser = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            user: null
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}