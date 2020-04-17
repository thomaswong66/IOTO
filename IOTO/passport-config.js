const LocalStrategy = require("passport-local").Strategy
// const bcrypt = require("bcrypt");
const db = require("./backend/dbConnectors/usersDbConnector");


function initialize(passport, getUserById) {
    const authenticateUser = async (username, password, done) => {
        const user = db.getUserByUsername(username);
    
        if(user == null ) {
            return done(null, false, { message: "No user with that username" })
        }
    
        try {
            if (password == null) {
                return done(null, false, { message: "No password entered"})
            }
        } catch (err) {
            done(err)
    
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'username'}, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })

}

module.exports = initialize;