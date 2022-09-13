//import required functions from restController
import {
    addUser,
    getUsers,
    getUserByID,
    updateUserByID,
    deleteUserByID,

    addProfile,
    getProfiles,
    getProfileByID,
    updateProfileByID,
    deleteProfileByID,

    getLoggedInUser,
    addLoggedInUser
} from '../controller/restController.js';

//Specific routes for different endpoints
// such as get, post, delete and put
export const userRoutes = (app) => {

    // we use student to get a list of all students or post a new student
    app.route('/admins')

    // call the getUsers function
    .get(
        getUsers
    )

    //call the addUser function
    .post(
        addUser
    );

    // we pass studentID to get, delete and update a specific student
    app.route('/admins/:userID')

    .get(
        getUserByID
    )

    .delete(
        deleteUserByID
    )

    .put(
        updateUserByID
    );
}

export const profileRoutes = (app) => {

    // we use student to get a list of all students or post a new student
    app.route('/students')

    // call the getUsers function
    .get(
        getProfiles
    )

    //call the addUser function
    .post(
        addProfile
    );

    // we pass studentID to get, delete and update a specific student
    app.route('/students/:profileID')

    .get(
        getProfileByID
    )

    .delete(
        deleteProfileByID
    )

    .put(
        updateProfileByID
    );
}




export const loggedInUserRoutes = (app) => {

    // we use student to get a list of all students or post a new student
    app.route('/loggedInUser')

    // call the getUsers function
    .get(
        getLoggedInUser
    )

    //call the addUser function
    .post(
        addLoggedInUser
    );

    // we pass studentID to get, delete and update a specific student
    /* app.route('/loggedInUser/:loggedInUserID')

    .get(
        getProfileByID
    )

    .delete(
        deleteProfileByID
    )

    .put(
        updateProfileByID
    ); */
}

//export the allRoutes function so index.js can use it
// export default allRoutes;
