import { Schema } from "mongoose";
import { type } from "os";
const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    
    password: {type: String, required: true, validatie: (pass) => {
        if(!pass?.lenght || pass.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        
    }}},
})

export default User = models?.user || model("user", userSchema);