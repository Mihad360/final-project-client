import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Adminroute = ({children}) => {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminloading] = useAdmin()

    const location = useLocation()


    if (loading || isAdminloading) {
        return <div className="py-20 mx-20">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={3} />
                </p>
            </SkeletonTheme>
        </div>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default Adminroute;