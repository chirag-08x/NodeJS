const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the Bootcamp"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please provide a description for the Bootcamp"],
    trim: true,
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Website must start with HTTP/HTTPS",
    ],
  },
  phone: {
    type: String,
    maxlength: [20, "Phone Number cannot be more than 20 characters"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Plese enter a valid email address",
    ],
  },
  address: {
    type: String,
    required: [true, "Please provide an address for the bootcamp"],
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
      index: "2dsphere", // Create a special 2dsphere index on `City.location`
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    type: [String],
    required: true,
    // Can't have values other than enum for this field
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other",
    ],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be atleast 1"],
    max: [10, "Rating must cannot be more than 10"],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGurantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create slug from name flield.
// We have access to this keyword which refers to the document itself.
// Schema.pre = Means before(pre) saving Schema to DB, do these checks.

Schema.pre("save", function (next) {
  console.log("Slugify ran", this.name);
  next();
});

module.exports = mongoose.model("Bootcamp", Schema);
