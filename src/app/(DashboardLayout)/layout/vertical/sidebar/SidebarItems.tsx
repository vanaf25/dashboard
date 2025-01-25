import React from 'react';
import Menuitems from './MenuItems';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from '@/store/hooks';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';
import { AppState } from '@/store/store';
import { toggleMobileSidebar } from '@/store/customizer/CustomizerSlice';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';

const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu: any = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();
  const router = useRouter();
  const supabase=createClient();
  // Logout function
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/login');
    } catch (error: any) {
      console.error('Error logging out:', error.message);
    }
  };
  return (
      <Box sx={{ px: '20px' }}>
        <List sx={{ pt: 0 }} className="sidebarNav">
          {Menuitems.map((item) => {
            if (item.subheader) {
              return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;
            } else if (item.children) {
              return (
                  <NavCollapse
                      menu={item}
                      pathDirect={pathDirect}
                      hideMenu={hideMenu}
                      pathWithoutLastPart={pathWithoutLastPart}
                      level={1}
                      key={item.id}
                      onClick={() => dispatch(toggleMobileSidebar())}
                  />
              );
            } else {
              return (
                  <NavItem
                      item={item}
                      key={item.id}
                      pathDirect={pathDirect}
                      hideMenu={hideMenu}
                      onClick={() => dispatch(toggleMobileSidebar())}
                  />
              );
            }
          })}

          {/* Logout Button */}
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </List>
      </Box>
  );
};

export default SidebarItems;
