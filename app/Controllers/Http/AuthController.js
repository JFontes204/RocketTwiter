'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('/app/Models/User')

class AuthController {
  async register({ request }) {
    const data = request.only(['username', 'email', 'password']);
    const user = await User.create(data);
    return user;
  }

  async authenticate ({ request }) {

  }
}

module.exports = AuthController
