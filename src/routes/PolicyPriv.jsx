import React from 'react'
import { Grid } from '@mui/material'
import Typography from '../components/commons/Typography'

const PolicyPriv = () => {
  return (
    <Grid
      container
      justifyContent="center"
      my={{ xs: 2, sm: 4 }}
      color="customText.textWhiteLight"
    >
      <Grid item xs={11} sm={9}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Politicas de privacidad
        </Typography>
      </Grid>
      <Grid item xs={11} sm={9} my={2} pl={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          ¿Cómo tratamos sus datos de manera segura, responsable y confidencial?
        </Typography>
        <Typography paragraph>
          En esta Política de Privacidad (la Política, en adelante) se describen
          todos los derechos y obligaciones de las partes al utilizar el
          servicio del sitio web "https://fiumbi.com/".
        </Typography>
        <Typography paragraph>
          Es obligación del Cliente leer y aceptar esta Política, que forma
          parte de las "Condiciones Generales de Contratación"
          ("https://fiumbi.com/terminos-y-condiciones"), previo a proceder la
          utilización de los servicios proporcionados por la Empresa.
        </Typography>
        <Typography paragraph>
          En caso de no estar de acuerdo con alguna/s de las cláusulas insertas,
          deberá abstenerse de la utilización de los servicios que brinde o
          pudiere brindar en un futuro la Empresa.
        </Typography>
        <Typography paragraph>
          La utilización del servicio implica la aceptación por parte del
          Cliente de la presente Política y Condiciones Generales de
          Contratación. A todo efecto, se entiende por:
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Sitio:
        </Typography>
        <Typography paragraph> https://fiumbi.com/ </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Política:
        </Typography>
        <Typography paragraph>
          Así se abrevia la presente "Política de Privacidad" del Sitio.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          CGC:
        </Typography>
        <Typography paragraph>
          Son las "Condiciones Generales de Contratación", las cuales rigen toda
          la relación contractual establecida entre el Cliente y la Empresa.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          AAIP:
        </Typography>
        <Typography paragraph>
          Agencia de Acceso a la Información Pública - Organismo de contralor.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Propiedad Intelectual :
        </Typography>
        <Typography paragraph>
          Fiumbi reconoce y respeta los derechos de propiedad intelectual
          relacionados con los productos. No se permite la reproducción,
          distribución o uso no autorizado de logotipos, marcas comerciales u
          otro contenido protegido sin la autorización previa y expresa del
          titular de los derechos.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Confidencialidad :
        </Typography>
        <Typography paragraph>
          Fiumbi se compromete a mantener la confidencialidad de la información
          proporcionada por los clientes durante el proceso de registro del
          Usuario. No se divulgará ni se utilizará dicha información con fines
          distintos a los necesarios para completar la transacción de manera
          segura y eficiente. En ninguna situación se revelará información
          personal de los Usuarios hacia terceros. Uso
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Adecuado :
        </Typography>
        <Typography paragraph>
          El servicio adquiridos a través de "https://fiumbi.com/" deben ser
          utilizadas únicamente con fines legales y legítimos. Queda
          estrictamente prohibido promover o facilitar el uso fraudulento o
          ilegal del servicio Información y Responsabilidad :
          "https://fiumbi.com/" se compromete a proporcionar información precisa
          y actualizada sobre los requisitos y procedimientos necesarios para
          que un Usuario pueda recibir un producto financiado por un Cliente.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Ley Aplicable y Jurisdicción :
        </Typography>
        <Typography paragraph>
          Estos Términos se regirán e interpretarán de acuerdo con las leyes de
          la República Argentina. Cualquier disputa o controversia que surja en
          relación el servicio estará sujeta a la jurisdicción exclusiva de los
          tribunales competentes de la República Argentina. ALOJAMIENTO WEB
          Nuestros servidores se encuentran en el ámbito de la República
          Argentina, Estados Unidos de América y/o dentro del espacio de la
          Unión Europea, siendo la Unión Europea considerada como un espacio con
          legislación adecuada en materia de protección de datos personales y
          permitida la transferencia de datos. Todo de conformidad con el art. 3
          de la Disposición 60 – E/2016 de la Dirección Nacional de Protección
          de Datos y el art. 12 de la Ley 25.326. Ellos cuentan con medidas de
          seguridad técnica
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PolicyPriv
