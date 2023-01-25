import { GrLocation } from "react-icons/gr";
import { Box, Icon, Text } from "@chakra-ui/react";

const FindUs = () => {
    return (
        <>
            <Box gridColumn={["span 12", "span 12", "span 6"]} fontSize="lg">
                <Text
                    as="h2"
                    fontSize="4xl"
                    color="primary"
                    fontWeight="bold"
                    fontStyle="italic"
                >
                    Encuéntranos
                </Text>
                <Text textAlign="center" lineHeight="2rem">
                    Visita nuestra sucursal ubicada en: <br />
                    <Icon as={GrLocation} marginX="0.2rem" />
                    Eje Central Lázaro Cárdenas 97, Colonia Centro, Centro,
                    Cuauhtémoc, 06000 Ciudad de México, CDMX
                </Text>
            </Box>
            <Box gridColumn={["span 12", "span 12", "span 6"]}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.605904155554!2d-99.14410758452121!3d19.42942648688619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fed45ccbd561%3A0xa3e8f245d4172d82!2sPlaza%20Central%2087!5e0!3m2!1ses!2smx!4v1674624141723!5m2!1ses!2smx"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                />
            </Box>
        </>
    );
};

export default FindUs;
