import { FC } from "react";
import { Navigate } from "react-router-dom";

import { User } from "../../context";

interface IProps {
    children: any;
    user: User;
}

const PrivateRoute: FC<IProps> = ({ children, user }) => {
    return user.id > 0 ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
