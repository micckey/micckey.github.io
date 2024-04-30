import Slider from "../components/Slider";
import dashImage from "../assets/passion_pick/dash.webp";
import cartImage from "../assets/passion_pick/cart.webp";
import wishlistImage from "../assets/passion_pick/wishlist.webp";
import historyImage from "../assets/passion_pick/history.webp";
import productImage from "../assets/passion_pick/product.webp";
import { SiFlutter , SiMysql} from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";

const slides = [
  {
    image: dashImage,
    title: "Dashboard",
    description:
      "Here, customers can browse all available products, including those on offer, and purchase seedlings.",
  },
  {
    image: cartImage,
    title: "Cart page",
    description:
      "Customers can conveniently access their shopping cart right here on this page. ",
  },
  {
    image: wishlistImage,
    title: "Wishlist page",
    description:
      "Here on this page, customers can explore and manage their wishlist items",
  },
  {
    image: productImage,
    title: "Product page",
    description:
      "Clicking on a product brings you to this page where you can adjust the quantity and proceed to payment.",
  },
  {
    image: historyImage,
    title: "History page",
    description:
      "Customers can access a comprehensive record of their past purchases right here. This feature provides detailed information about each transaction, including the total amount spent, timestamp, and items purchased. It's a convenient way to track your spending history and review previous orders.",
  },
];

export default function PassionPick() {
  return (
    <div className="h-full bg-my-bg">
      <div className="container mx-auto">
      <h1 className="text-3xl text-white font-bold mt-20 flex items-center justify-center mb-5">
          Passion Pick
        </h1>
        <div className="flex justify-center mb-10">
          <SiFlutter className="text-white text-3xl mx-3 dance-animation" />
          <SiMysql className="text-white text-3xl mx-3 dance-animation" />
          <BiLogoPhp className="text-white text-3xl mx-3 dance-animation" />
        </div>
        <Slider slides={slides} />
      </div>
    </div>
  );
}
