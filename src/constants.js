import Previewnft from "./components/PreviewNft";
// import Search from "./components/Search";
import Viewprofile from "./components/ViewProfile";
// import page2 from "./mints/nfts/page2";
import faq from './components/FAQ';
import ItemDescription from "./pages/ItemDescription";
import Profile from './components/Profile'
import Infopage from './components/Infopage'
import ContactUs from "./components/ContactUs";
import Mintnft from "./components/MintNft";
import Landingpage from './components/Landingpage'
import Descpage from "./components/Descpage";
import ArtisPage from "./components/ArtistBio";
import Blog from "./components/Blog"
import Collections from "./components/Collections"
import AllNFT from './components/AllNFT'
import Privacy from "./components/Privacy/Privacy";
import CommGuide from "./components/Privacy/CommGuide";
import CookiesPolicy from "./components/Privacy/Cookie";
import Userprofile from "./components/Userprofile";
import ViewProfile from "./pages/Profile/ViewProfile";
import ProfileSettings from './components/Profilesettings'

const routes = [
  {
    pathName: "HOME",
    path: "/",
    component: Landingpage,
  },
  {
    pathName: "FAQ & HELP",
    path: "/faq",
    component: faq,
  },
  {
    pathName: "ABOUT MUZIX",
    path: "/ABOUT MUZIX",
    component: Previewnft,
  },
  {
    pathName: "contactus",
    path: "/contactus",
    component: ContactUs,
  },
  {
    pathName: "VIEW PROFILE",
    path: "/creator/bharat-thakur",
    component: Viewprofile,
  },

  {
    pathName: "EXPLORE MARKETPLACE",
    path: "/EXPLORE MARKETPLACE",
  },
  {
    pathName: "description-page",
    path: "/asset/:itemid",
    component: ItemDescription,
  },
  {
    pathName: "profile",
    path: "/profile/:addr",
    component: Profile,
  },
  {
    pathName: "about",
    path: "/about",
    component: Infopage,
  },
  {
    pathName: "create",
    path: "/assets/create",
    component: Mintnft,
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
    pathName: "artist",
    path: "/artist",
    component: ArtisPage,
  },
  {
    pathName: "blog",
    path: "/blog",
    component: Blog,
  },
  {
    pathName: "privacy-policy",
    path: "/privacy-policy",
    component: Privacy,
  },
   {
    pathName: "community-guidelines",
    path: "/community-guidelines",
    component: CommGuide,
  },
  {
    pathName: "cookies-policy",
    path: "/cookies-policy",
    component: CookiesPolicy,
  },
  {
    pathName: "collections",
    path: "/collections",
    component: Collections,
  },
  {
    pathName: "allnft",
    path: "/allnft",
    component: AllNFT,
  },
  {
    pathName: "profile",
    path: "/profile",
    component: Userprofile,
  },
  {
    pathName: "viewProfile",
    path: "/profile/:id",
    component: ViewProfile,
  },
  {
    pathName: "settings",
    path: "/settings",
    component: ProfileSettings,
  },

];

export { routes };
