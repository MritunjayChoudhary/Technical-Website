const bcrypt = require("bcryptjs");
const User = require("../model/user-model");
const home = async(req,res) =>{
    try{
        
        res.status(200).send("welcome to home page")
    }
    catch(error){
        res.status(500).send("404 page not found")
    }
}
const register = async(req,res) =>{
    try{
        console.log(req.body)

        const { username,email,phone,password } = req.body;

        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(400).json({message : "Email already exists"})
        }
            const saltRound = 10;
            const hash_password = await bcrypt.hash(password,saltRound);
        
        

        const userCreated = await User.create({username,email,phone,password:hash_password});

        res.status(200).json({message: "REGISTRATION SUCESSFUL",token:await userCreated.generateToken(),userId:userCreated._id.toString()});
    }   
    catch(error){
        res.status(500).send("404 page not found")
    }
}
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (!userExist) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // const user = await bcrypt.compare(password, userExist.password);
      const isPasswordValid = await userExist.comparePassword(password);
  
      if (isPasswordValid) {
        res.status(200).json({
          message: "Login Successful",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Invalid email or passord " });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const user = async (req,res) => {
    try {
      const userData = req.user;
      console.log(userData);
      res.status(200).json({userData});
    } catch (error) {
      console.log(`error from the user route ${error}`);
      
    }
  }



module.exports = {home,register,login, user};
