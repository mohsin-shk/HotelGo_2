import mongoose from "mongoose";

const reviewSchema  = new mongoose.Schema(
    {
      content:{
        type:String,
      },
      ratings:{
        type:Number,
        min:1,
        max:5
      },
      reviewdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
    },
    {timestamps:true}
);

export const Review = mongoose.model("Review",reviewSchema)