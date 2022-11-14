import { useParams } from "react-router-dom";


const DetailProductCard = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <>DetailProductCard</>
    )
}

export default DetailProductCard;