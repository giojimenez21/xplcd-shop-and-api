import { Image, ImageProps } from "@chakra-ui/react"
import { FC } from "react";

import LogoXp from '../../assets/headerxp.png';

interface IProps {
    style: ImageProps
}

const Logo:FC<IProps> = ({style}) => {
    return (
        <Image src={LogoXp} {...style}/>
    )
}

export default Logo