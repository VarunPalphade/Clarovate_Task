// src/config/roleConfig.ts
export interface Link {
    to: string;
    label: string;
  }
  
  interface RoleConfig {
    sidebarLinks: Link[];
    headerLinks: Link[];
  }
  
  export const roleConfig: Record<string, RoleConfig> = {
    admin: {
      sidebarLinks: [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/settings", label: "Settings" },
        { to: "/users", label: "Users" },
      ],
      headerLinks: [{ to: "/profile", label: "Profile" }],
    },
    user: {
      sidebarLinks: [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/settings", label: "Settings" },
      ],
      headerLinks: [{ to: "/profile", label: "Profile" }],
    },
  };
  