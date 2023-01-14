import { Link } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import { reports } from "../constants";

const ReportsList = () => {
    return (
        <>
            {reports.map((reportItem) => (
                <Link as={LinkRouter} to={reportItem.path} display="block" key={reportItem.name}>
                    { reportItem.name }
                </Link>
            ))}
        </>
    );
};

export default ReportsList;
