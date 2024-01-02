// Without SRP
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    // Save user to the database
  }

  sendEmail(message) {
    // Send an email
  }
}

// With SRP
// A class should have only one reason to change, meaning that it should have only one responsibility or job.
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    // Save user to the database
  }
}

class EmailService {
  sendEmail(user, message) {
    // Send an email
  }
}
