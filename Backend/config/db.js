import mongoose from 'mongoose'


const db =  async () => {
 try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
    
 } catch (error) {
    console.error("Database Error:",error);
    process.exit(1);
    
 }
};

export default db;