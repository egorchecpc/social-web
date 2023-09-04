import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "bd64308b-e51a-4082-ac5a-6b5221baaa4f"}
});

const UsersAPI = {
    setUsersAPI: (pageNum)=>{
        return instance.get(`users?count=3&page=${pageNum}`).then(response => response.data)
    },
    setUserProfileAPI: (userId) => {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    setUserAuthDataAPI: () => {
        return instance.get(`auth/me`).then(response => response.data)
    },
    unfollowAPI: (id) => {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followAPI: (id) => {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}

export default UsersAPI
// export const setUsersAPI = (pageNum) => {
//     return instance.get(`users?count=3&page=${pageNum}`).then(response => response.data)
// }
//
// export const setUserProfileAPI = (userId) => {
//     return instance.get(`profile/${userId}`).then(response => response.data)
// }
//
// export const setUserAuthDataAPI = () => {
//     return instance.get(`auth/me`).then(response => response.data)
// }
//
// export const unfollowAPI = (id) => {
//     return instance.delete(`follow/${id}`).then(response => response.data)
// }
//
// export const followAPI = (id) => {
//     return instance.post(`follow/${id}`).then(response => response.data)
// }