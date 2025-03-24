


export const signup = async (req, res) =>{
    const {name, email, password} = req.body;
    console.log(name,
        email,
        password);

        res.json({message: req.body});
}          