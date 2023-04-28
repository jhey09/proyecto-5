const bcrypt = require('bcrypt');

const authService = class {
  constructor(userService) {
    this.UserService = userService
  }


  async login(email, password) {
    const user = await this.UserService.getByEmail(email)
    if (user) {
      const passwordMath = await bcrypt.compare(password, user.password)
      console.log('contraseña comparada', passwordMath )
      return user.toObject(); 
    } else if(!user){
      throw new Error('usuario no encontrado')
    } else{
      throw new Error('usuario no encontrado')
    }
  }
}

module.exports = authService
