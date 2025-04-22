// const db = require('../db/connect');

// class Login{
//     constructor({id, firstName, lastName, school, email, password}){
//         this.id = id,
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.school = school,
//         this.email = email,
//         this.password = password
//     }

    // static async getLogin(email) {
    //     const response = await db.query("SELECT * FROM user_info WHERE LOWER(email) = LOWER($1);", [email]);

    //     if(response.rows.length != 1) {
    //         throw new Error("Unable to locate email.")
    //     }

    //     return new Login(response.rows[0]);
    // }
// }

// module.exports = Login