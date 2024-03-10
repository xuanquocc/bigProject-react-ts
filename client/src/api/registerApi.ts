
import { Users } from "../types/users.type"
import http from "../utils/http"

export const registerUser = (user: Users) => {
    return http.post<Users>('/api/customers', user)
}
