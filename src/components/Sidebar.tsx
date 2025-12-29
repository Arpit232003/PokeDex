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
  }
]
const MainSidebar = () => {


  return (
    <SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="text-center flex item-center justify-center w-full gap-4">
                <img src={"./pokedex_logo.png"} style={{width:"30px"}}/>
                <span className="text-xl font-bold">Pokedex</span>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {SIDEBAR_MENU.map((item) => (
                <SidebarMenuItem key={item.title} className="mt-5">
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