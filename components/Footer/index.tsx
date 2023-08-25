"use client";
import React from "react";
import { Column, FooterContainer, List, Socials, Title } from "./style";
import { Link, Typography } from "@mui/material";
import { DataContext, DataContextType } from "@/context/app.context";

import InstagramIcon from "@mui/icons-material/Instagram";
import PaymentsIcon from "@mui/icons-material/Payments";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const { footer } = React.useContext(DataContext) as DataContextType;
  return (
    <FooterContainer>
      <Column>
        <Title variant="h6">{footer.title}</Title>
        <List>
          {footer.links.map((line) => (
            <Link
              key={line.label}
              href={line.link}
              style={{
                color: "inherit",
                textDecoration: "inherit",
                margin: "5px 0",
              }}
            >
              <Typography variant={"subtitle2"}>{line.label}</Typography>
            </Link>
          ))}
        </List>
      </Column>
      <Column>
        <Title variant="h6">Contact</Title>
        <Typography variant={"subtitle2"}>
          Vous pouvez contacter l'artiste grim-art ou faire des donations via
          les liens suivant
        </Typography>
        <Socials>
          <InstagramIcon />
          <TwitterIcon />
          <PaymentsIcon />
          <EmailIcon />
        </Socials>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
