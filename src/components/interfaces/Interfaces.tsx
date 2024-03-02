import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { ReactNode } from "react";

export interface RouteComponent {
  path: string;
  component: JSX.Element;
  props?: unknown;
}

export interface ContactUs {
  name: string;
  email: string;
  phone: number;
  message: string;
}

export interface SidebarItem {
  id: string;
  name: string;
  subItem: boolean;
  icon: JSX.Element;
  path?: string;
}

export interface SidebarSubItem {
  id: string;
  list: SidebarItem[];
}

export interface TabPanelProps {
  children: ReactNode;
  value: any;
  index: any;
}

export interface MenuObject {
  name: string;
  icon: JSX.Element;
  path?: string;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
