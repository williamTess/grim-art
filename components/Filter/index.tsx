"use client";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  origin: string[];
  style: string[];
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
}

const FilterSlide = (props: Props) => {
  const { origin, style, handleChange } = props;
  return (
    <>
      <Accordion defaultExpanded={true} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Origine
        </AccordionSummary>
        <AccordionDetails>
          {origin.map((o) => (
            <FormControlLabel
              control={<Checkbox onChange={(e) => handleChange(e, o)} />}
              label={o}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Style
        </AccordionSummary>
        <AccordionDetails>
          {style.map((o) => (
            <FormControlLabel
              control={<Checkbox onChange={(e) => handleChange(e, o)} />}
              label={o}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FilterSlide;
