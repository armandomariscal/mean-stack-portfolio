const express = require("express");

const GetProfile = require("../../application/GetProfile");

const MongoProfileRepository = require("../repositories/MongoProfileRepository");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const repository = new MongoProfileRepository();

    const getProfile = new GetProfile(repository);

    const profile = await getProfile.execute();

    res.json(profile);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch CV",
    });
  }
});

module.exports = router;
