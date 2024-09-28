import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true,
        unique:true,
        lowercase: true,
    },
    email:{
        type: String,
        trim:true,
        required:[true , "Uppercase letters (A-Z),Lowercase letters (a-z),Numbers (0-9),Special characters: dot (.), hyphen (-), underscore (_), percent (%), plus sign (+),This part matches the local part of the email address (before the @ symbol)"],
        match:'[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}'
    },
    fullName:{
        type: String,
        required: [true,"fullname is required"],
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Minimum length of 8 characters, At least one digit,At least one lowercase letter ,At least one uppercase letter,At least one letter (either uppercase or lowercase)"],
        match:'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
    },
    phoneNumber:{
        type:String,
        required: true,
        match:"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
    },
    categories:{
        type:String,
        enum:["Buyer","Seller"],
        required:true,
        default: "Buyer"
    },
    refreshToken: {
        type: String,
    }
},{timestamps:true}) 


userSchema.pre("save",async function (next) {
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,10)
        next()
    }
})

userSchema.methods.isPasswordCorrect(async function(password){
    return await bcrypt.compare(this.password,password)
})

export const User = mongoose.model("User",userSchema);