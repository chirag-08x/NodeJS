const express = require("express");
const router = express.Router();
const {
  getAllBootcamps,
  getSingleBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  deleteAllBootcamps,
} = require("../controllers/bootcampController");

router.route("/").get(getAllBootcamps).post(createBootcamp);
router.route("/removeall").delete(deleteAllBootcamps);
router
  .route("/:id")
  .get(getSingleBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

module.exports = router;
