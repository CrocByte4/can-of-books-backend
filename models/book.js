const mongooses = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: string;
  description: string;
  status: Boolean;
  
})