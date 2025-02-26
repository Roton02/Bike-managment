import { jwtDecode } from 'jwt-decode'

const verrifyToken = (token: string) => {
  return jwtDecode(token)
}
export default verrifyToken
