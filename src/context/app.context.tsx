"use client";
import React from "react";
import data from "../../public/infos.json";

export interface CategoryProps {
  id: string;
  name: string;
  description: string;
  button: string;
  link: string;
  url: string;
}
export interface PosterProps {
  id: string;
  origin: string;
  categories: string;
  description: string;
  image: string;
  price: string;
  url: string;
}

export interface FooterProps {
  title: string;
  links: { label: string; link: string }[];
  insta: string;
  mail: string;
  twitter: string;
  paypal: string;
}

export interface FilterProps {
  origin: string[];
  style: string[];
}

export type DataContextType = {
  categories: CategoryProps[];
  posters: PosterProps[];
  footer: FooterProps;
  filter: FilterProps;
};

interface Props {
  children: React.ReactNode;
}

export const DataContext = React.createContext<DataContextType | null>(null);

const DataProvider: React.FC<Props> = ({ children }) => {
  const [categories] = React.useState<CategoryProps[]>(data.categories);
  const [posters] = React.useState<PosterProps[]>(data.posters);
  const [footer] = React.useState<FooterProps>(data.footer);
  const [filter] = React.useState<FilterProps>(data.filter);

  return (
    <DataContext.Provider value={{ categories, posters, footer, filter }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
