import { CategoryProps } from "@/context/app.context";

import React from "react";
import { Card, Content, Description, Title } from "./style";
import { Link, Typography } from "@mui/material";
import StyledButton from "../Button";

interface Props {
  category: CategoryProps;
}

const FullCardImage = (props: Props) => {
  const { category } = props;

  return (
    <Card image={require(`../../public/${category.url}.png`).default.src}>
      <Content>
        <Title variant="h4">
          <b>{category.name}</b>
        </Title>
        <Description>{category.description}</Description>
        <Link href={category.link}>
          <StyledButton variant={"contained"} text={category.button} />
        </Link>
      </Content>
    </Card>
  );
};

export default FullCardImage;
