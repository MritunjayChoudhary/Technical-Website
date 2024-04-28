const { z } = require("zod");

const signupSchema = z.object({

    username : z
    .string({required_error :"name is required" })
    .trim()
    .min(3,{message:"must be atleast 3 characters"})
    .max(255,{message:"must not exceed 255 characters"}),

    email : z
    .string({required_error :"email is required" })
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"must be atleast 3 characters"})
    .max(255,{message:"must not exceed 255 characters"}),

    phone : z
    .string({required_error :"phone is required" })
    .trim()
    .min(10,{message:"must be atleast 10 numbers"})
    .max(20,{message:"must not exceed 20 numbers"}),
    
    password : z
    .string({required_error :"password is required" })
    .min(6,{message:"must be atleast 6 characters"})
    .max(1024,{message:"must not exceed 1024 characters"}),

});

module.exports = signupSchema;