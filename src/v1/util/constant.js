const authEnpoints = require("./enpoints/auth.enpoints");

module.exports = {
    enpoints:{ 
        API_CONTEXT: "v1/api",
        ...authEnpoints
    }
}