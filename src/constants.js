
import Mintnft from "./components/MintNft";
import Landingpage from './components/Landingpage'
import ItemDescription from "./pages/ItemDescription/index"
import AddProduct from "./components/AddProduct";
import UserProfile from "./components/Userprofile";

const routes = [
  {
    pathName: "HOME",
    path: "/",
    component: Landingpage,
  },

  
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
  
  
  {
    pathName: "profile",
    path: "/profile",
    component: UserProfile,
  },

  

];

export { routes };
