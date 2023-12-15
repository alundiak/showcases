// Without SRP
class User {
  constructor(public name: string, public email: string) { }

  save() {
    // Save user to the database
  }

  sendEmail(message: string) {
    // Send an email
  }
}

// With SRP
class User {
  constructor(public name: string, public email: string) { }
}

class UserRepository {
  save(user: User) {
    // Save user to the database
  }
}

class EmailService {
  sendEmail(user: User, message: string) {
    // Send an email
  }
}
