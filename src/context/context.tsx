"use client";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
} from "react";

type ContextType = {
  cartImage: Images;
  handleCartImg: (id: number, url: string) => void;
  url: string;
  recomended:Recomend;
  review:Review;
  helpDesk:HelpDesk;
  questionsAsked:QuestionsAsked;
};

type Images = { url: string; id: number }[];
type Recomend={img:string,name:string,key:string,price:string}[];
type Review={
  img:string,
  text:string,
  key:string,
  name:string,
}[];
type QuestionsAsked={
    question:string,
    answer:string,
  }[];

type HelpDesk={
  name:string,
  text:string,
  id:string,
  img:string,
}[];

interface ContextChild {
  children: ReactNode;
}

const Context = createContext<ContextType | null>(null);

const cartImage: Images = [
  {
    url: "/images/p-m-fd1_400x449_crop_top.webp",
     id: 1,
  },
  {
    url: "/images/p-m-fd3_400x449_crop_top.webp",
    id: 2,
  },
  {
    url: "/images/p-m-fd4_400x449_crop_top.webp",
    id: 3,
  },
  {
    url: "/images/p-m-fd2.webp",
    id: 4,
  },
];
const recomended:Recomend=[
  {
    img:"/images/a.webp",
    name:"Tan Wedding Cufflinks",
    key:"a",
    price:"$140",
    
  },
  {
    img:"/images/b.webp",
    name:"Personalised Custom Gift",
    key:"b",
    price:"$150",
    
  },
  {
    img:"/images/c.webp",
    name:"Best Dad Photo Night Light",
    key:"c",
    price:"$70",
    
  },
  {
    img:"/images/d.webp",
    name:"Father's Day Keepsake Gift",
    key:"d",
    price:"$70",
    
  },
]
const review:Review=[
  {
    img:"/images/rv-1.webp",
    text:"Great quailing and perfect for our Dads birthday. Hes not a bracelet person but he LOVES this one. Score 1 for the kids.",
    key:"rv1",
    name:"Jayla Graham",
  },
  {
    img:"/images/rv-2.webp",
    text:"Looked great and feels like a great quality material",
    key:"rv2",
    name:"Meredith Nuñez",
  },
  {
    img:"/images/rv-3.webp",
    text:"Beautifully crafted. I love it so much!",
    key:"rv3",
    name:"Kerrie Hesp",
  },
  {
    img:"/images/rv-4.webp",
    text:"The name tags are so small for a man's wrist and the kids names are tiny. I don't like it and he won't wear it due to it being not very masuline",
    key:"rv4",
    name:"Erika svichla"
  },
  {
    img:"/images/rv-5.webp",
    text:"Love the quality of this bracelet",
    key:"rv5",
    name:"Shelley",
  },
  {
    img:"/images/rv-6.webp",
    text:"The name tags are so small for a man's wrist and the kids names are tiny. I don't like it and he won't wear it due to it being not very masuline",
    key:"rv6",
    name:"Joanna Irvine"
  },
  {
    img:"/images/rv-7.webp",
    text:"Super cute my husband loved it",
    key:"rv7",
    name:"Evied"
  },
  {
    img:"/images/rv-8.webp",
    text:"Great quality! Arrived early and makes a perfect gift!",
    key:"rv8",
    name:"Becky Priestley "
  },
]
const helpDesk:HelpDesk=[
  {
    name:"Size Guide",
    text:"Ensure your customers get the right fit",
    id:"Ensure your customers get the right fit",
    img:"https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135"
  },
  {
    name:"Loyalty Program",
    text:"Offer exclusive rewards",
    id:"Offer exclusive rewards",
    img:"https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ry1vhOiRg8ic-hp-2.png?v=1724407185"
  },
  {
    name:"Order & Shipping",
    text:"Looking for your order status",
    id:"Looking for your order status",
    img:"https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png?v=1724407203"
  },
  {
    name:"Payment & Gift cards",
    text:"Wonder of what payment we accept?",
    id:"Wonder of what payment we accept?",
    img:"https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-JYbi3Qpv20ic-hp-4.png?v=1724634293"
  },
  {
    name:"Discount Codes",
    text:"Have a discount you like to use?",
    id:"Have a discount you like to use?",
    img:"https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-NcXYj3LOv3ic-hp-5.png?v=1724634338"
  },
  {
    name:"Store Location",
    text:"Want to find a store near you?",
    id:"Want to find a store near you?",
    img:"https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-zO0BfEcTlSic-hp-6.png?v=1724634383"
  },
]
const questionsAsked:QuestionsAsked=[
  {
    question:"How do I join the affiliate program?",
    answer:"Simply sign up through our affiliate program page by filling out the registration form. Once approved, youll receive a unique affiliate link to start promoting our products."
  },
  {
    question:"What commission rates do you offer?",
    answer:"We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners."
  },
  {
    question:"How and when do I get paid?",
    answer:"For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family."
  },
  {
    question:"What marketing resources are available to affiliates?",
    answer:"Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI."
  },
]

export const ContextProvider = ({ children }: ContextChild) => {
  const [url, setUrl] = useState<string>("/images/p-m-fd2.webp");
  const handleCartImg = (id: number, url: string) => {
    cartImage.map((item) => {
      if (item.id === id) {
        setUrl(url);
      }
    });
  }

  return (
    <Context.Provider
      value={{
        cartImage,
        handleCartImg,
        url,
        recomended,
        review,
        helpDesk,
        questionsAsked,
      }}
    >
      {" "}
      {children}
    </Context.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useProvider must be used within a ContextProvider");
  }

  return context;
};
