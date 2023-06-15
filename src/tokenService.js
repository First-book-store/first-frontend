//get token
const getToken = () => {
    return window.localStorage.getItem("id_token");
} 

//set token
const setToken = (token) => {
    window.localStorage.setItem("id_token", token);
}

//destroy token
const destroyToken = () => {
    window.localStorage.removeItem("id_token");
}

export default {setToken,getToken,destroyToken}