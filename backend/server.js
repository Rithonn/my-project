const express = require("express");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();

const dotEnv = require("dotenv").config();
if(dotEnv.error){
    throw dotEnv.error;
}
//Establish server connection
main().then(() => console.log('Connected to Mongo Atlas')).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_DB);
}


//Models
//Controllers


/**Place all controller routes here
 * Ex.
 *  app.post('signup', userController.signupPost)'
 */




//Listen for startup port
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});