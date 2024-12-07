import { uniqueId } from "lodash";
interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  bgcolor?: any;
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}


const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Home",
    icon: 'screencast-2-line-duotone',
    href: "/",
    bgcolor: "primary",
  },
  {
    id: uniqueId(),
    title: "system99",
    icon: 'screencast-2-line-duotone',
    href: "/system99",
    bgcolor: "primary",
  },
  {
    id: uniqueId(),
    title: "form Letters",
    icon: 'screencast-2-line-duotone',
    href: "/formLetters",
    bgcolor: "primary",
  },
];

export default Menuitems;
