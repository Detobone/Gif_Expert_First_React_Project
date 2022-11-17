import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    // I can add later a validation for case sensitive ej. ONE puch, one punch
    if (categories.includes(newCategory)) return;
    // setCategories([newCategory, ...categories]);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

/* The key is mandatory for dynamic elements like array.maps, etc */
