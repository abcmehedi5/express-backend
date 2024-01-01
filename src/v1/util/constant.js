const authEnpoints = require("./enpoints/auth.enpoints");

module.exports = {
    enpoints:{ 
        API_CONTEXT: "/v1/api",
        ...authEnpoints
    },

    response: {
        SERVER_ERROR: {
            CONTENT: "Internal Server Error",
            STATUS: 500
        },
        SUCCESS: {
            CONTENT: "Successfully getting data from server",
            STATUS: 200
        }
    }
}