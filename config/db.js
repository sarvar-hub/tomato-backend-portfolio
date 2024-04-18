import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://tomato:mongodb@atlascluster.4exuhvk.mongodb.net/food-del').then(() => console.log("DB Connected"))
}
