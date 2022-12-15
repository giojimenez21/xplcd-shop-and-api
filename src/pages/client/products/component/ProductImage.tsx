import { Image, ImageProps } from "@chakra-ui/react";
import { FC } from "react";

interface IProps extends ImageProps {
    image: string;
}

const ProductImage: FC<IProps> = ({ image, ...props }) => {
    return (
        <Image
            width="100%"
            src={
                image
                    ? `data:image/png;base64,${image}`
                    : "https://celularymas.com.mx/2909-large_default/pantalla-display-samsung-a10-a105-negr-celularymas-celulares-y-tablets.jpg"
            }
            {...props}
        />
    );
};

export default ProductImage;
