// import axios from "axios";
// import {useEffect} from "react";
// import Preloader from "./Preloader";
//
//
// function UsersAPIComponent(props) {
//    useEffect(() => {
//             axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${props.pageNum}`)
//                  .then(response => {
//                      props.setUsers(response.data.items);
//                  });
//     }, [props.pageNum]);
//     const showMoreUsers = ()=> props.addUsers();
//     return (
//         <Preloader users={props.users}
//                follow={props.follow}
//                unfollow={props.unfollow}
//                showMoreUsers={showMoreUsers}/>
//     )
//
//
// }
// export default UsersAPIComponent