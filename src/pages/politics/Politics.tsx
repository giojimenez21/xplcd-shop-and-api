import { Text } from "@chakra-ui/react";
import { ContainerStyled } from "../../styled-components";

const Politics = () => {
    return (
        <ContainerStyled padding="2rem 0">
            <Text
                as="h1"
                textAlign="center"
                fontSize="3xl"
                fontWeight="bold"
                marginBottom="1rem"
            >
                Aviso de Privacidad
            </Text>
            <Text lineHeight="2rem">
                <ol type="I">
                    <strong>
                        <li>
                            Responsable de la protección de sus datos personales
                        </li>
                    </strong>
                    <p>
                        XP LCD FACTORY S.A. de C.V. (en adelante “XP LCD
                        FACTORY”), con domicilio en: Lázaro Cárdenas 117,
                        Despacho 601, Colonia Centro, Alcaldía Cuauhtémoc,
                        Ciudad de México, Codigo Postal 06010. Teléfono (55)
                        5500 4525, Correo Electrónico
                        privacity@xplcdfactory.com, es el responsable del
                        tratamiento de sus datos personales. <br />
                        Este aviso de privacidad tiene como propósito hacer del
                        conocimiento del titular los datos personales que XP LCD
                        FACTORY recaba, el tratamiento al que serán sometidos,
                        los procedimientos para revocar su consentimiento. Lo
                        anterior con la finalidad de que el titular decida y
                        controle el uso de su información personal. <br />
                        XP LCD FACTORY guardará confidencialidad respecto de sus
                        Datos Personales.
                    </p>

                    <strong>
                        <li>¿Qué datos personales recopilamos?</li>
                    </strong>
                    <ul>
                        <li>Nombre </li>
                        <li>Nombre de usuario </li>
                        <li>Teléfono </li>
                        <li>Correo Electronico </li>
                    </ul>
                    <p>
                        XP LCD FACTORY no recaba datos considerados sensibles,
                        ni solicitará información personal por una razón
                        secundaria, como marketing, entre otras, si lo hiciere
                        se obtendrá el consentimiento expreso y por escrito del
                        titular, el cual tiene derecho a negarse.
                    </p>

                    <strong>
                        <li>III. ¿Dónde obtenemos la información?</li>
                    </strong>
                    <p>
                        En forma directa de manera verbal, a través de contratos
                        de servicio, medios electrónicos, y telefónicamente.
                    </p>

                    <strong>
                        <li>¿Para qué recopilamos su información?</li>
                    </strong>
                    <p>Los datos personales recabados con el fin de: </p>
                    <ul>
                        <li>
                            Atender las obligaciones contractuales pactadas con
                            nuestros clientes
                        </li>
                        <li>
                            Permitir que los usuarios de nuestras aplicaciones,
                            productos y servicios puedan utilizarlos
                        </li>
                        <li>Facilitarle el uso de nuestro sitio web </li>
                        <li>
                            Administrar y controlar la comercialización de los
                            productos y servicios
                        </li>
                        <li>
                            Tener comunicación con nuestros prospectos y
                            clientes.
                        </li>
                        <li>
                            Informar de promociones diseñados para nuestros
                            prospectos y clientes.
                        </li>
                    </ul>

                    <strong>
                        <li>Servicios de terceros</li>
                    </strong>
                    <p>
                        XP LCD FACTORY cuenta con proveedores terceros
                        (mencionados en enlaces externos) que solo usarán su
                        información, en la medida que sea necesaria, para que
                        les permita desempeñar sus servicios, y cada uno tienen
                        sus propias políticas de privacidad con respecto a la
                        información que estamos obligados a proporcionarles.
                        Para estos proveedores, se recomienda revisar las
                        políticas de privacidad correspondiente, con la
                        finalidad de conocer de manera detallada el modo en que
                        su información personal será manejada, XP LCD FACTORY no
                        es responsable por las prácticas de privacidad de otros
                        sitios.
                    </p>
                    <strong>Enlaces Externos</strong>
                    <ul>
                        <li>Iconos de footer creados por Fontawesome</li>
                        <li>Imagenes sacadas de Freepik</li>
                        <li>Productos traídos por ODOO</li>
                        <li>Servicio de Host y Base de datos por Hostinger</li>
                        <li>Facebook, Instagram y Whatsapp por META</li>
                    </ul>

                    <strong>
                        <li>Seguridad </li>
                    </strong>
                    <p>
                        XP LCD FACTORY cuenta con las mejores prácticas de la
                        industria para evitar el mal uso, acceso, divulgación.{" "}
                        <br />
                        Esta página está encriptada mediante la tecnología
                        Secure Socket Layer (SSL) y, las contraseñas
                        proporcionadas por el usuario estas encriptadas.
                    </p>

                    <strong>
                        <li>Cookies</li>
                    </strong>
                    <p>
                        En XP LCD FACTORY no recabamos ninguna cookie al día de
                        hoy.
                    </p>

                    <strong>
                        <li>Cambios a la política de privacidad</li>
                    </strong>
                    <p>
                        Nos reservamos el derecho de modificar esta política de
                        privacidad en cualquier momento, por favor revísala
                        frecuentemente.
                    </p>
                </ol>
                <p>
                    Estos apartados fueron actualizados por última vez el 01 de
                    diciembre del 2022.
                </p>
            </Text>
        </ContainerStyled>
    );
};

export default Politics;
