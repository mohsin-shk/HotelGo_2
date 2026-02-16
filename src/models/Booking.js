import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        // Link to the user who made the booking
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        // Link to the hotel
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required: true,
        },
        // Link to the specific room type (e.g., Double Room)
        roomType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
            required: true,
        },
        // The specific room number that was booked
        roomNumber: {
            type: Number,
            required: true,
        },
        // The dates booked
        checkIn: {
            type: Date,
            required: true,
        },
        checkOut: {
            type: Date,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        bookingStatus: {
            type: String,
            enum: ["confirmed", "cancelled"],
            default: "confirmed",
        }

        // paymentStatus: {
        //     type: String,
        //     enum: ["Pending", "Completed", "Canceled"],
        //     default: "Pending", // This will be updated after payment integration
        // },
        // You can add stripe-related IDs here later
        // paymentIntentId: { type: String },
        // transactionId: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);