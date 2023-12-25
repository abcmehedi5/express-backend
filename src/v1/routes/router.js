const {Router} = require('express');

const router = Router();
router.get("/app", (req, res)=>{
    res.status(200).json({})
})
module.exports = router;