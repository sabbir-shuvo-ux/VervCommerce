import CreateForm from "./(components)/CreateForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Create Page - VervCommerce",
  description: "Product Create Page - VervCommerce",
};

const CreatePage = () => {
  return <CreateForm />;
};

export default CreatePage;
