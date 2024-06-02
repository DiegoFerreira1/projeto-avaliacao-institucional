import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://usuarios:qIOU79Wkswm7NrSs@recomendacao-api.w8qabb7.mongodb.net/?retryWrites=true&w=majority&appName=recomendacao-api');
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
