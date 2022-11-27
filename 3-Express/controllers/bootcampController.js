const Bootcamp = require("../models/BootcampModel");
const ErrorResponse = require("../utils/errorResponse");
const geocoder = require("../utils/geocoder");

// @desc    GET All Bootcamps
// @route   GET api/v1/bootcamps
// @access  PUBLIC
const getAllBootcamps = async (req, res, next) => {
  try {
    const allBootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      results: allBootcamps.length,
      data: allBootcamps,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    GET Single Bootcamp
// @route   GET api/v1/bootcamps/:id
// @access  PUBLIC
const getSingleBootcamp = async (req, res, next) => {
  try {
    const singleBootcamp = await Bootcamp.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: singleBootcamp,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    CREATE New Bootcamp
// @route   GET api/v1/bootcamps
// @access  PRIVATE
const createBootcamp = async (req, res, next) => {
  // const newBootcamp = new Bootcamp(req.body)
  // newBootcamp.save()
  try {
    const newBootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: newBootcamp });
  } catch (error) {
    next(error);
  }
};

// @desc    UPDATE Bootcamp
// @route   GET api/v1/bootcamps/:id
// @access  PRIVATE
const updateBootcamp = async (req, res, next) => {
  try {
    const singleBootcamp = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      data: singleBootcamp,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    DELETE Bootcamp
// @route   GET api/v1/bootcamps/:id
// @access  PRIVATE
const deleteBootcamp = async (req, res, next) => {
  try {
    const singleBootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

// @desc    GET BOOTCAMPS WITHIN A RADIUS
// @route   GET api/v1/bootcamps/radius/:zipcode/:distance
// @access  PRIVATE
const getBootcampsInRadius = async (req, res, next) => {
  try {
    const { zipcode, distance } = req.params;

    // Get Latitude and Longitude from Geocode
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lon = loc[0].longitude;

    // Calculate Radius usnig Radians
    // Radius = Divide distance by radius of Earth
    // Earth Radius = 3963 miles / 6378 kms
    const radius = distance / 3963;

    const bootCamps = await Bootcamp.find({
      location: {
        $geoWithin: { $centerSphere: [[lon, lat], radius] },
      },
    });

    res.status(200).json({
      success: true,
      count: bootCamps.length,
      data: bootCamps,
    });
  } catch (error) {
    res.status(404).json({
      success: error.message,
      data: [],
    });
  }
};

module.exports = {
  getAllBootcamps,
  getSingleBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
};
