import { useContext } from "react";
import { UserAuth } from "../context/authProvider";
import Loading from "../utils/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const { user,loading } = useContext(UserAuth)
    const location = useLocation()

    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from:location}} replace />
    }

    return children;
};

export default PrivetRoutes;