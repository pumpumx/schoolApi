import mongoose, { Document } from "mongoose";

// Interface for TypeScript
interface School extends Document {
  schoolName: string;
  address: string;
  location: {
    type: 'Point';
    coordinates: [number, number]; 
  };
}

// Mongoose schema definition
const schoolSchema = new mongoose.Schema<School>(
  {
    schoolName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number], 
        required: true,
      },
    },
  },
  { timestamps: true }
);

schoolSchema.index({ location: "2dsphere" });

const School = mongoose.model<School>("School", schoolSchema);
export default School;
