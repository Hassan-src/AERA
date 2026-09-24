import { useState } from "react";
import FormatListing from "../../ui/Collection/FormatListing";
import FormatOption from "../../ui/Collection/FormatOption";
import Product from "../../ui/Collection/Product";
import styles from "./Collection.module.css";

function Collection() {
  const [selectorValue, setSelectorValue] = useState("");

  const categories = [
    { value: "allProducts", label: "all products" },
    { value: "sofas", label: "sofas" },
    { value: "tables", label: "tables" },
    { value: "chairs", label: "chairs" },
  ];

  return (
    <div className={styles.main}>
      <FormatListing>
        <FormatOption
          arrayName={categories}
          setSelectorValue={setSelectorValue}
        />
      </FormatListing>
      <Product />
    </div>
  );
}

export default Collection;
