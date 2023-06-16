import { useState } from 'react'
import { Grid, useTheme } from '@mui/material'
import Typography from './commons/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from '../assets/styles/howItWork.module.scss'

const FreqQuestion = () => {
  const theme = useTheme()

  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const accordionItems = [
    {
      title: '¿Qué es Fiumbi?',
      content:
        'Fiumbi es una plataforma que te permite compartir con tu comunidad tu listado de productos favoritos de MercadoLibre para que puedan regalarte los artículos que necesitas de manera anonima',
    },
    {
      title: '¿Cómo se usa Fiumbi?',
      content:
        'Para usar Fiumbi, primero debes crear tu cuenta rellenando el formulario y luego tienes que enlazar tu cuenta de MercadoLibre con Fiumbi. Una vez hecho esto, puedes compartir tu Fiumbi con tu comunidad.',
    },
    {
      title: '¿Cómo agrego productos a mi Fiumbi?',
      content:
        'Los productos que se reflejan en la lista serán los productos que tengas marcado como favorito en Mercadolibre, una vez agregado el producto deberás sincronizar la lista para que se refleje en tu Fiumbi',
    },
    {
      title: 'Agregué productos pero no se muestran en mi lista',
      content:
        'En el caso de publicaciones que fueron marcadas como favorito hace mucho tiempo, deberás desmarcar y marcar nuevamente el producto como favorito y luego sincronizar. Sin embargo, no gestionamos pedidos en dolares ni inmuebles o vehiculos. ',
    },
    {
      title: '¿Tiene algún costo?',
      content:
        'No, la plataforma es 100% gratuita para los usuarios, todos los costos van a cargo de quien compre los productos de tu lista.',
    },

    /*  {
      title: 'Tienen algún medio de contacto?',
      content: 'Si, podés contactarnos haciendo click aquí',
    }, */
  ]
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ color: 'white', width: 'min(95%, 1200px)', mx: 'auto' }}
    >
      <Grid item xs={12} display="flex" justifyContent="center">
        <Typography
          textAlign="center"
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
        >
          Preguntas frecuentes
        </Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mx={{ xs: 3, sm: 3 }}
      >
        {accordionItems.map((accordionItem, index) => (
          <Accordion
            key={`panel-${index}-accordion`}
            expanded={expanded === `panel-${index}`}
            onChange={handleChange(`panel-${index}`)}
            sx={{
              width: '100%',
              background: 'transparent',
              boxShadow: 'none',
              color: 'customGold.at254a1At50',
              borderBottom: '1px solid',
              borderRadius: '0',
              ':last-of-type': { borderRadius: '0' },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: 'customGold.at254a1' }} />
              }
              aria-controls={`panel-${index}bh-content`}
              id={`panel-${index}bh-header`}
              sx={{ py: { xs: 2, sm: 3 }, px: { xs: 1, sm: 2 } }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'customGold.at254a1',
                  textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
                }}
                fontWeight="bold"
              >
                {accordionItem.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ pb: { xs: 2, sm: 4 }, mt: { xs: -2, sm: -4 } }}
            >
              <Typography sx={{ color: 'customGold.at255a1' }}>
                {accordionItem.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  )
}

export default FreqQuestion
