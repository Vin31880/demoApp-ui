/**
 * Created by G4EDD3T on 28-May-17.
 */

export class User {

 static createWithJson(userJson: any): User {
    const user = new User();

    user.email = userJson.email;
    user.username = userJson.userName;
    user.password = userJson.password;
    user.role = userJson.role;

    return user;
  }

  constructor(public email?: string,
              public username?: string,
              public password?: string,
              public role?: string) {  }
}
