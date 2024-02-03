
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-spinner text-error"></span>
            </div>

        </>
    }
    if (user) {
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;