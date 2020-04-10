module.exports.login = function (req, res) {
    let {username, password} = req.body;
    // console.log(`Username: ${username} \n Password: ${password}`);

    if(username === "trung" && password === "trung")
    {
        res.send("1");
    }
    else
    {
        res.send("2");
    }
}