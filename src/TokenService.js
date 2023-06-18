const getToken = () => {
      return window.localStorage.getItem('id_token')
};
const setToken = (token) => {
      window.localStorage.setItem('id_token' , token)
}
const destroyToken = () => {
      window.localStorage.removeItem('id_token')
}
export default {getToken , setToken , destroyToken}