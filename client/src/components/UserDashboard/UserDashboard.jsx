// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// export default function UserDashboard () {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { user } = useSelector(state => state);
    
//     useEffect(() => {
//         dispatch(getUser(id));
//     }, [dispatch, id]);

//     return (
//         <div>
//             <div>User Dashboard</div>
//             <h4>{user.name}</h4>
//         </div>
//     )
// }