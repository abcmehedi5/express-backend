


const loginControler = async(req, res, next)=>{
    try{
        console.log("controller in ", Date.now());
        res.send("login page")
    }catch(error){
        next(error);
    }
}

module.exports = loginControler;