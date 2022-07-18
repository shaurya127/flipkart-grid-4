
import Mintnft from "./components/MintNft";
import Landingpage from './components/Landingpage'
import Descpage from "./components/Descpage";
import AddProduct from "./components/AddProduct";


const routes = [
  {
    pathName: "HOME",
    path: "/",
    component: Landingpage,
  },
 

  // {
  //   pathName: "description-page",
  //   path: "/asset/:itemid",
  //   component: ItemDescription,
  // },
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
  // {
  //   pathName: "main",
  //   path: "/asset/:collection/:id",
  //   component: ItemDescription,
  // },
  
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
