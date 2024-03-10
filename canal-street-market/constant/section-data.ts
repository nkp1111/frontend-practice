import About from "@/components/about";
import Food from "@/components/food";
import Retail from "@/components/retail";
import Community from "@/components/community";

import aboutLogo from "@/public/sections-logo/about_icon.svg"
import foodLogo from "@/public/sections-logo/cake_food_icon.svg"
import retailLogo from "@/public/sections-logo/retail_icon.svg"
import communityLogo from "@/public/sections-logo/community_icon.svg"

export const sectionData = [
  {
    id: 1,
    name: "about",
    logo: aboutLogo,
    Component: About,
    baseClass: "bg-white",
  },
  {
    id: 2,
    name: "food",
    logo: foodLogo,
    Component: Food,
    baseClass: "bg-custom_blue",
  },
  {
    id: 3,
    name: "retail",
    logo: retailLogo,
    Component: Retail,
    baseClass: "bg-custom_red",
  },
  {
    id: 4,
    name: "community",
    logo: communityLogo,
    Component: Community,
    baseClass: "bg-custom_yellow",
  },
]