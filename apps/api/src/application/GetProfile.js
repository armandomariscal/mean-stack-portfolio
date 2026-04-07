class GetProfile {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return this.repository.getProfile();
  }
}

module.exports = GetProfile;
