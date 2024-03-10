export interface User {
    name: string,
    email: string,
    password: string,
    avatar: string,
  }
  
  export type Users = Pick<User, 'name' | 'email' | 'avatar' | 'password'>[]
