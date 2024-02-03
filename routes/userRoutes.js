const {createUser} = require("../controllers/userController")

const userRoutes = (app) => {
    app.route("/api/users/register").post(createUser)
}

module.exports = {userRoutes};