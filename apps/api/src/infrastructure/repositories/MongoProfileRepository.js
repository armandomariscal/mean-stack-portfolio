const Cv = require("../models/CvModel");

class MongoProfileRepository {
  async getProfile() {
    return Cv.findOne();
  }
}

module.exports = MongoProfileRepository;
