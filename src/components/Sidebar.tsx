import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenu,
  SidebarGroupContent,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"

import { Home,SearchIcon,EggIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
const SIDEBAR_MENU =[
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search Pokemon",
    url: "/search",
    icon: SearchIcon,
  },
  {
    title: "Pokemon",
    url: "/pokemon",
    icon: EggIcon,
  }
]
const MainSidebar = () => {


  return (
    <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <img src={"./pokedex_logo.png"} style={{width:"25px"}}/>
            PokeDex
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_MENU.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </SidebarProvider>
  )
}


export default MainSidebar;