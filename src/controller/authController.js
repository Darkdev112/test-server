const  authController = async(req, res) => {
    const {username} = req.body;
    return res.json({username : username, secret  : "devbro"})
}

module.exports ={
    authController
}