import mongoose, { Document } from "mongoose";

// Interface for TypeScript
interface School extends Document {
  schoolName: string;
  address: string;
  location: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
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
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
  },
  { timestamps: true }
);

// Create a 2dsphere index for geospatial queries
schoolSchema.index({ location: "2dsphere" });

// Export the model
const SchoolModel = mongoose.model<School>("School", schoolSchema);
export default SchoolModel;
