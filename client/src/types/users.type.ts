export interface User {
    username: string,
    email: string,
    password: string,
    avatar?: string,
  }
  

  export interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
  }
  