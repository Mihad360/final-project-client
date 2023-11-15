/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Privateroute = ({ children }) => {

    const { user, loading } = useContext(Authcontext)
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

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privateroute;