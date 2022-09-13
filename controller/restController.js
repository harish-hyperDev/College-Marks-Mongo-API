//import mongoose
import mongoose from 'mongoose';

//import the user schema from restMode.js file
import { UserSchema, ProfileSchema, LoggedInUserSchema } from '../model/restModel.js';

//pass user object to create a new user in the database
//using the model from our schema
const User = mongoose.model('admins', UserSchema);
const Profile = mongoose.model('students', ProfileSchema);
const LoggedInuser = mongoose.model('loggedInUser', LoggedInUserSchema);


//export a function called addUser
export const addUser = (req, res) => {

    //create new user with the data coming from the request body
    let newUser = new User(req.body);

    newUser.save((err, user) => {

        //send error message if a required field is missing
        if (err) {
            res.send(err);return;
        }

        //else pass the user information as a json object
        res.json(user)
    });

}

//export a function called getUsers
export const getUsers = (req, res) => {

    //find users in the databse
    User.find({}, (err, user) => {

        //send error message if not found
        if (err) {
            res.send(err);return;
        }

        //else pass the users
        res.json(user);
    });

}


//export a function called getUserByID
export const getUserByID = (req, res) => {

    //find a specific user by ID
    User.findById(req.params.userID, (err, user) => {

        //send error message if not found
        if (err) {
            res.send(err);return;
        }

        //else pass the user
        res.json(user);
    });

}


//export a function called updateUserByID
export const updateUserByID = (req, res) => {

    //find a specific user by ID and update
    User.findOneAndUpdate({ _id: req.params.userID },

        req.body,

        //tell mongoDB to return the new updated object
        { new: true },

        (err, user) => {

            //send error message if user can not be updated
            if (err) {
                res.send(err);return;
            }

            //else pass the user
            res.json(user);
        });

}


//export a function called deleteUserByID
export const deleteUserByID = (req, res) => {

    //find a specific user by ID and remove it
    User.remove({ _id: req.params.userID },

        (err, user) => {

            //send error message if user can't be deleted
            if (err) {
                res.send(err);return;
            }

            //if user was deleted, pass a message
            res.json({ message: "The user was deleted." });
        });

}










//export a function called addUser
export const addProfile = (req, res) => {

    //create new user with the data coming from the request body
    let newProfile = new Profile(req.body);

    newProfile.save((err, user) => {

        //send error message if a required field is missing
        if (err) {
            res.send(err);return;
        }

        //else pass the user information as a json object
        res.json(user)
    });

}

//export a function called getProfiles
export const getProfiles = (req, res) => {

    //find Profiles in the databse
    Profile.find({}, (err, user) => {

        //send error message if not found
        if (err) {
            res.send(err);return;
        }

        //else pass the Profiles
        res.json(user);
    });

}


//export a function called getProfileByID
export const getProfileByID = (req, res) => {

    //find a specific user by ID
    Profile.findById(req.params.profileID, (err, user) => {

        //send error message if not found
        if (err) {
            res.send(err);return;
        }

        //else pass the user
        res.json(user);
    });

}


//export a function called updateProfileByID
export const updateProfileByID = (req, res) => {

    //find a specific user by ID and update
    Profile.updateOne({ _id: req.params.profileID },

        req.body,

        //tell mongoDB to return the new updated object
        { new: true },

        (err, user) => {

            //send error message if user can not be updated
            if (err) {
                res.send(err);return;
            }

            //else pass the user
            res.json(user);
        });

}


//export a function called deleteProfileByID
export const deleteProfileByID = (req, res) => {

    //find a specific user by ID and remove it
    Profile.deleteOne({ _id: req.params.profileID },

        (err, user) => {

            //send error message if user can't be deleted
            if (err) {
                res.send(err);return;
            }

            //if user was deleted, pass a message
            res.json({ message: "The user was deleted." });
        });

}






//export a function called addUser
export const addLoggedInUser = (req, res) => {

    //create new user with the data coming from the request body
    let newProfile = new LoggedInuser(req.body);

    newProfile.save((err, user) => {

        //send error message if a required field is missing
        if (err) {
            res.send(err);return;
        }

        //else pass the user information as a json object
        res.json(user)
    });

}

//export a function called getProfiles
export const getLoggedInUser = (req, res) => {

    //find Profiles in the databse
    LoggedInuser.find({}, (err, user) => {

        //send error message if not found
        if (err) {
            res.send(err);return;
        }

        //else pass the Profiles
        res.json(user);
    });

}
