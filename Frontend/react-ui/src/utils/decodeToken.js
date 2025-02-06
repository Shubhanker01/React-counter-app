import { jwtDecode } from "jwt-decode"

export default function decodeToken(token) {
    const decoded = jwtDecode(token)
    return decoded.name
}