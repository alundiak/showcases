// Without SRP
class User {
  public age = 40;
  protected birthDate: Date;

  constructor(public name: string, public email: string, birthday: string) {
    this.birthDate = new Date(birthday);
    this.calculateAge();
    console.log('User initialized');
  }

  save() {
    console.log('User saved to database');
  }

  sendEmail(message: string) {
    console.log('Email send to User: ' + message);
  }

  isBirthdayToday() {
    const today = new Date();
    return (
      today.getMonth() === this.birthDate.getMonth() &&
      today.getDate() === this.birthDate.getDate()
    );
  }

  calculateAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();

    if (
      today.getMonth() < this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() < this.birthDate.getDate())
    ) {
      age--;
    }

    this.age = age;
  }
}

function test1() {
  const u = new User('Andrii', 'andrii@lundiak.com', '12-10-1982');
  u.save();
  u.sendEmail('Hello');

  if (u.isBirthdayToday()) {
    console.log("Happy Birthday!", u);
    u.calculateAge();
    console.log(`Your age now: ${u.age} years`);
  } else {
    console.log("Today is not your birthday.", u);
  }
}
// test1();

class UserWithSRP {
  public age = 40;
  public birthDate: Date;

  constructor(
    public readonly name: string,
    public email: string,
    public readonly birthday: string,
    public timeZone: string
    // public timeZone: Intl.DateTimeFormatOptions.timeZone
    // public timeZone: typeof Intl.DateTimeFormatOptions.timeZone
  ) {
    this.birthDate = new Date(birthday);
    this.calculateAge();
  }

  calculateAge() {
    const today = new Date();
    const userTimeZoneDate = new Date(this.birthDate.toLocaleString('en-US', { timeZone: this.timeZone }));

    let age = today.getFullYear() - userTimeZoneDate.getFullYear();

    if (
      today.getMonth() < userTimeZoneDate.getMonth() ||
      (today.getMonth() === userTimeZoneDate.getMonth() &&
        today.getDate() < userTimeZoneDate.getDate())
    ) {
      age--;
    }

    this.age = age;
  }
}

/*
 if age brings in additional responsibilities or behaviors that are not directly related to the core concept of a user
 (e.g., complex logic related to age calculations, validations, etc.), 
 then it might be worth considering extracting that logic into a separate class. 
 This would align with the SRP, ensuring that each class has a single reason to change.
*/

// class AgeCalculator {
//   updateUserAge(user: UserWithSRP) {

//   }
// }

class BirthdayService {
  static isBirthday(user: UserWithSRP) {
    const today = new Date();
    return (
      today.getMonth() === user.birthDate.getMonth() &&
      today.getDate() === user.birthDate.getDate()
    );
  }
}

class UserRepository {
  save(user: UserWithSRP) {
    console.log(`User ${user.name} is saved to database`);
  }
}

class EmailService {
  sendEmail(user: UserWithSRP, message: string) {
    console.log(`Email "${message}" send to User ${user.name}`);
  }
}

function test2() {
  const userInstance = new UserWithSRP('Andrii', 'andrii@lundiak.com', '12-10-1982', 'Europe/Warsaw');

  const uRepo = new UserRepository();
  uRepo.save(userInstance);

  const emailService = new EmailService();
  emailService.sendEmail(userInstance, 'Hello');

  if (BirthdayService.isBirthday(userInstance)) {
    console.log(`Happy Birthday! Your age now: ${userInstance.age}`);
  } else {
    console.log("Today is not your birthday.", userInstance);
  }
}
test2();
