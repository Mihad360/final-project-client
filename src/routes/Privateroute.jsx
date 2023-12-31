/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import useAuth from "../hooks/useAuth";

const Privateroute = ({ children }) => {

    const { user, loading } = useAuth()
    const location = useLocation()
    

    if (loading) {
        return <div className="py-20 mx-20">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={3} />
                </p>
            </SkeletonTheme>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Privateroute;