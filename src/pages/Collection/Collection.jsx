import { useState } from "react";
import FormatListing from "../../ui/Collection/FormatListing";
import FormatOption from "../../ui/Collection/FormatOption";
import ProductCard from "../../ui/Collection/ProductCard";

import styles from "./Collection.module.css";
import { useParams } from "react-router-dom";

function Collection() {
  const { value } = useParams();
  const [categoriesValue, setCategoriesValue] = useState(value);
  const [pricingValue, setPricingValue] = useState("default");
  const categories = [
    { value: "allProducts", label: "all products" },
    { value: "sofa", label: "sofas" },
    { value: "table", label: "tables" },
    { value: "chair", label: "chairs" },
  ];
  const pricing = [
    { value: "expensive", label: "most Expensive" },
    { value: "cheap", label: "Cheapest" },
    { value: "default", label: "Default" },
  ];
  return (
    <div className={styles.main}>
      <FormatListing>
        <span className={styles.filterName}>Categories:</span>
        <FormatOption
          arrayName={categories}
          setSelectedValue={setCategoriesValue}
        />
        <span className={styles.filterName}>Pricing:</span>
        <FormatOption arrayName={pricing} setSelectedValue={setPricingValue} />
      </FormatListing>
      <div className={styles.productList}>
        <ProductCard
          categoriesValue={categoriesValue}
          pricingValue={pricingValue}
        />
      </div>
    </div>
  );
}

export default Collection;
