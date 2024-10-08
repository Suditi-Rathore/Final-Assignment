import ContactPage from "@/container/contactPage/index";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPage />
    </Suspense>
  );
};

export default page;
