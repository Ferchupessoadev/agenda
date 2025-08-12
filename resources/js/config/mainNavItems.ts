import { NavItem } from "@/types";
import { HomeIcon, RollerCoasterIcon, UserIcon } from "lucide-react";

export const mainNavItemsForAdmin: NavItem[] = [
    {
        title: 'Inicio',
        href: '/',
        icon: HomeIcon,
    },
    {
        title: 'Usuarios',
        href: '/users',
        icon: UserIcon,
    },
    {
        title: 'Roles',
        href: '/roles',
        icon: RollerCoasterIcon,
    },
    {
        title: 'Permisos',
        href: '/permissions',
        icon: RollerCoasterIcon,
    },
    {
        title: 'Logs',
        href: '/logs',
        icon: RollerCoasterIcon,
    },
    {
        title: 'Orden',
        href: '/order',
        icon: RollerCoasterIcon,
    }
];

export const mainNavItemsForUser: NavItem[] = [
    {
        title: 'Inicio',
        href: '/',
        icon: HomeIcon,
    },
];

export const mainNavItemsForTeacher: NavItem[] = [
    {
        title: 'Inicio',
        href: '/',
        icon: HomeIcon,
    },
    {
        title: 'Orden',
        href: '/order',
        icon: RollerCoasterIcon,
    }
];

export const mainNavItemsForStudent: NavItem[] = [
    {
        title: 'Inicio',
        href: '/',
        icon: HomeIcon,
    },
    {
        title: 'Orden',
        href: '/order',
        icon: RollerCoasterIcon,
    }
];
