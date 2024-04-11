import Login from "../pages/Login"
import Register from "../pages/Register"
import HomePage from "../pages/HomePage"

export const publicRoutes = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
]   

export const  privateRoutes = [
    {path: '/home', component: HomePage},
]
