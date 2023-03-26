import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Lottie from "react-lottie";
import FaqSVG from "../../lotties/faq.json";
import { renderSVG } from "../../helpers/renderSVG";

const Faq = () => {
  const FaqIcon = renderSVG(FaqSVG);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box id="faq" sx={{ pt: isMobile ? 5 : 0 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6} xs={12}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              textAlign: "center",
              color: "#4f5bd5",
              justifyContent: "center",
            }}
          >
            Preguntas frecuentes
          </Typography>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Lottie
            options={FaqIcon}
            height={isMobile ? 300 : 600}
            width={isMobile ? 300 : 600}
          />
        </Grid>
      </Grid>

      <Box sx={{ padding: isMobile ? 3 : 10 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{ fontFamily: "Poppins", color: "#4f5bd5", fontWeight: 600 }}
            >
              Accordion 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
