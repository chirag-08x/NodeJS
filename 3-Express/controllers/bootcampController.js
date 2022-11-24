const Bootcamp = require("../models/BootcampModel");
const ErrorResponse = require("../utils/errorResponse");

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
    // res.status(400).json({
    //   success: false,
    //   message: error.message,
    //   data: [],
    // });

    next(error);
  }
};

// @desc    GET Single Bootcamp
// @route   GET api/v1/bootcamps/:id
// @access  PUBLIC
const getSingleBootcamp = async (req, res, next) => {
  try {
    const singleBootcamp = await Bootcamp.findById(req.params.id);
    if (!singleBootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of - ${req.params.id}`,
          404
        )
      );
    }

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

    if (!singleBootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of - ${req.params.id}`,
          404
        )
      );
    }

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

    if (!singleBootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of - ${req.params.id}`,
          404
        )
      );
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBootcamps,
  getSingleBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
