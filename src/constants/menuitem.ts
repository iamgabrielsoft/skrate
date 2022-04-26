
import React from "react";
import {
  Dashboard,
  ShoppingCart,
  People,
  AttachMoney,
  AddShoppingCart,
  Done,
  Business,
  HomeWork,
  Person,
} from "@styled-icons/material";



export type MenuItem = {
    name: string;
    icon: React.ComponentType;
    url: string;
    id: string;
  };

  type MenuOption = {
    name: string;
    icon: React.ComponentType;
    url: string;
   
  };

export const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: "/",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    url: "/Available_unit",
  },
  {
    name: "Invoices",
    icon: People,
    url: "/Invoices",

  },
  {
    name: "Project",
    icon: AttachMoney,
    url: "/project",
  },
  {
    name: "Social Media",
    icon: AttachMoney,
    url: "/socialmedia",
  },
  {
    name: "Integration",
    icon: AttachMoney,
    url: "/integration",
  },
  {
    name: "Documentation",
    icon: AttachMoney,
    url: "/documentation",
  },
];



function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
  }));
}



export const MENU_ITEMS = MENU_OPTIONS