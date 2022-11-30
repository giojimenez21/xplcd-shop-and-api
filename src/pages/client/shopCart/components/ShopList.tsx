import { FC} from 'react';
import { Box } from '@chakra-ui/react';


import ShopItem from './ShopItem';
import { ProductCart } from '../../../../context/products/product.interface';

interface IProps {
    shopProducts: ProductCart[]
}

const ShopList:FC<IProps> = ({shopProducts}) => {
    return (
        <Box
            gridColumn={["1 / 13", "1 / 13", "1 / 9"]}
        >
            {shopProducts.map(shopProduct => (
                <ShopItem product={shopProduct} key={shopProduct.id}/>
            ))}
        </Box>
    )
}

export default ShopList;