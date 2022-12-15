import { FC } from "react";
import { Route } from "react-router-dom";

import { ItemRoute } from "../routesByRole/constants";

interface IProps {
    route: ItemRoute;
}

const RouteCustom: FC<IProps> = ({ route }) => {
    return (
        <>
            {route?.isIndex ? (
                <>
                    <Route index element={<route.component />} />
                </>
            ) : (
                <Route path={route.path} element={<route.component />} />
            )}
        </>
    );
};

export default RouteCustom;
