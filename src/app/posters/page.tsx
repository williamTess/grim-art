"use client";
import React from "react";
import { Container, Content, Drawer } from "./style";
import { DataContext, DataContextType } from "@/context/app.context";
import FilterSlide from "/components/Filter";

const PostersPage = () => {
  const { filter, posters } = React.useContext(DataContext) as DataContextType;
  const { origin, style } = filter;
  const [filterPosters, setFilterPosters] = React.useState<string[]>([]);
  const filteredPosters = posters.filter(
    (pos) =>
      filterPosters.some((i) => pos.origin.split("/").includes(i)) ||
      filterPosters.some((i) => pos.categories.split("/").includes(i))
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const tmp = [...filterPosters];
    if (event.target.checked) tmp.push(name);
    else tmp.splice(tmp.indexOf(name), 1);

    setFilterPosters(tmp);
  };

  return (
    <Container>
      <Drawer>
        <FilterSlide
          origin={origin}
          style={style}
          handleChange={handleChange}
        />
      </Drawer>
      <Content>
        {filterPosters} {filteredPosters.map((i) => JSON.stringify(i))}
      </Content>
    </Container>
  );
};

export default PostersPage;
