

import React, { useState } from 'react'; 
import Header from '../Header';
import Sidebar from '../Sidebar';

import { styled } from '@mui/material/styles'; 
import DashboardNavbar from '../dashboardNavbar';
import { Container, useMediaQuery, useTheme, Box } from '@mui/material';
import DashboardSidebar from '../DashboardSidebar';



const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));


type DashboardLayoutProps = {
    children: React.ReactNode;
  };


const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true); 

    return (
      <>
          <DashboardLayoutRoot>
              <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', width: '100%'}}>
                  { children }
              </Box>
          </DashboardLayoutRoot>
          <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
          <DashboardSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen}/>
      </>

    )
}


export default DashboardLayout