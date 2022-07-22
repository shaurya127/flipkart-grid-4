
import Mintnft from "./components/MintNft";
import Landingpage from './components/Landingpage'
import ItemDescription from "./pages/ItemDescription/index"
import AddProduct from "./components/AddProduct";
import MintNft from "../src/components/MintNft";

const routes = [
  {
    pathName: "HOME",
    path: "/",
    component: Landingpage,
  },
 


  // {
  //   pathName: "profile",
  //   path: "/profile/:addr",
  //   component: Profile,
  // },
  
  {
    pathName: "create",
    path: "/assets/create",
    component: Mintnft,
  },
  {
    pathName: "add-product",
    path: "/add-product",
    component: AddProduct,
  },
  {
    pathName: "/",
    path: "/",
    component: Landingpage,
  },
  {
    pathName: "main",
    path: "/asset/:collection/:id",
    component: ItemDescription,
  },
  
  // {
  //   pathName: "allnft",
  //   path: "/allnft",
  //   component: AllNFT,
  // },
  // {
  //   pathName: "profile",
  //   path: "/profile",
  //   component: Userprofile,
  // },
  // {
  //   pathName: "viewProfile",
  //   path: "/profile/:id",
  //   component: ViewProfile,
  // },
  

];

export { routes };
