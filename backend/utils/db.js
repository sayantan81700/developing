import mongoose from "mongoose";

const dbCon = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("mongodb is cnnnected");
  } catch (error) {
    console.log(error);
  }
};

export default dbCon;
