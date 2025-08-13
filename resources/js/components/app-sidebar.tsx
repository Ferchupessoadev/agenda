import { NavMain } from '@/components/nav-main';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import AppLogo from './app-logo';
import { mainNavItemsForAdmin, mainNavItemsForTeacher, mainNavItemsForStudent, mainNavItemsForUser } from '@/config/mainNavItems';
import { useEffect } from 'react';

export function AppSidebar() {
    const { user, roles } = usePage<SharedData>().props;

    let $mainNavItems;
    switch (roles[0]) {
        case "admin": $mainNavItems = mainNavItemsForAdmin;
            break;
        case "teacher": $mainNavItems = mainNavItemsForTeacher;
            break;
        case "student": $mainNavItems = mainNavItemsForStudent;
            break;
        default: $mainNavItems = mainNavItemsForUser;
            break;
    }

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={$mainNavItems} />
            </SidebarContent>
        </Sidebar>
    );
}
