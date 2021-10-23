const User = require('../models/User');
/**
 * POST /login
 * Sign in with email and password
 */
export function loginPost(req, res){
    User.findOne({email: req.body.email}, function (err, user) {
       if(!user){
           return res.status(401).send({message: 'The email address provided does not have an account'});
       }
       res.send({user: user.toJson()});
        // user.comparePassword(req.body.password, function(err, matched){
        //     if(!matched){
        //         return res.status(401).send({ message: 'Invalid email or password' });
        //     }
        //     res.send({user: user.toJson()});
        // });
    });
}
/**
 * POST /signup
 */

export function signupPost(req, res){
    //TODO: Add validation to request in future
    User.findOne({email: req.body.email}, function(err, user){
        if(user){
            return res.status(400).send({
                message: "User already exists with that email. Would you like to login instead?"
            });
        }
        let newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        newUser.save(function(err){
            res.send({user: user});
        })
    })
}
