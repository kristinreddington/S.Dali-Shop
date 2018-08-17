class Auth {

  static authenticateToken(token) {
    sessionStorage.SetItem('token', token)
  }

  static isUserAuthenticated() {
    return sessionStorage.SetItem('token') !== null;
  }

  static deauthenticateToken() {
    sessionStorage.removeItem('token')
  }

  static getToken() {
    return sessionStorage.getItem('token');
  }



}

export default Auth;
