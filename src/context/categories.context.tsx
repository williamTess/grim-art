"use client";
import React from "react";

interface CategoryProps {
  id: number;
  title: string;
  description?: string;
  status?: boolean;
}

export type CategoryContextType = {
  categories: CategoryProps[];
  saveCategory: (category: CategoryProps) => void;
  updateCategory: (id: number) => void;
};

interface Props {
  children: React.ReactNode;
}

export const CategoryContext = React.createContext<CategoryContextType | null>(
  null
);

const CategoryProvider: React.FC<Props> = ({ children }) => {
  const [categories, setCategories] = React.useState<CategoryProps[]>([
    {
      id: 1,
      title: "post 1",
      description: "this is a description",
      status: false,
    },
    {
      id: 2,
      title: "post 2",
      description: "this is a description",
      status: true,
    },
  ]);

  const saveCategory = (category: CategoryProps) => {
    const newCategory: CategoryProps = {
      id: Math.random(), // not really unique - but fine for this example
      title: category.title,
      description: category.description,
      status: false,
    };
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (id: number) => {
    categories.filter((todo: CategoryProps) => {
      if (todo.id === id) {
        todo.status = true;
        setCategories([...categories]);
      }
    });
  };

  return (
    <CategoryContext.Provider
      value={{ categories, saveCategory, updateCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
