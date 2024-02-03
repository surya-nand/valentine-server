const {createUser, fetchUser} = require("../controllers/userController")

const userRoutes = (app) => {
    app.route("/api/users/register").post(createUser)
    app.route('/api/user/:userId').get(fetchUser)
}

module.exports = {userRoutes};