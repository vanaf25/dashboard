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
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu: any = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();
  const router = useRouter();

  // Logout function
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      // Redirect to the login page after successful logout
      router.push('/login');  // Use useRouter to redirect to login page
    } catch (error:any){
      console.error('Error logging out:', error.message);
    }
  };

  return (
      <Box sx={{ px: '20px' }}>
        <List sx={{ pt: 0 }} className="sidebarNav">
          {Menuitems.map((item) => {
            // {/********SubHeader**********/}
            if (item.subheader) {
              return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

              // {/********If Sub Menu**********/}
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

              // {/********If Sub No Menu**********/}
            } else {
              return (
                  <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu} onClick={() => dispatch(toggleMobileSidebar())} />
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
