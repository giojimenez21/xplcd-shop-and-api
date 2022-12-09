import { FC } from "react";
import { Navigate } from "react-router-dom";

import { UserSale } from "../context";

interface IProps {
    children: any;
    user: UserSale;
}

const PublicRoute: FC<IProps> = ({ children, user }) => {
    return (user.id == 0) ? children : <Navigate to="/" />;
};

export default PublicRoute;
