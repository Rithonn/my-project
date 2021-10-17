const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const dotEnv = require("dotenv").config();
if(dotEnv.error){
    throw dotEnv.error;
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