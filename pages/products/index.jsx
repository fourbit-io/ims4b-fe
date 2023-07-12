import React from "react";
import List from "@/components/pages/product/List";
import Layout from "@/layout";
import withStorekeeper from "@/lib/hoc/withStoreKeeper";

const ProductPage = () => {
  return (
    <List />
  );
};

export default withStorekeeper(ProductPage);
