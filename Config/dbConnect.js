import mongoose from "mongoose";

const DbConnected = async() => {
  try {
  await  mongoose.connect(process.env.SERVER_URL, {
      
    });
    console.log(`Data base is Connected`);
  } catch (error) {
    console.log(error);
  }
};

export default DbConnected;
