

import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, useTheme, Typography } from '@mui/material';
import styled from '@emotion/styled';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    color: 'black',
    // backgroundColor: theme.pallete.background.paper,
    // boxShadow: theme.shadows[3]
}))

type Props = {
    onSidebarOpen: () => void;
}


const DashboardNavbar = ({ onSidebarOpen }: Props) => {
    return (
        <DashboardNavbarRoot sx={{left: {lg: 280},  width: {lg: 'calc(100% - 280px)'}} } >
          <Toolbar
              disableGutters
              sx={{
                minHeight: 64,
                left: 0,
                px: 2
              }}
            >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Typography variant="h4" component="div">Your Dashboard</Typography> 
          <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Contacts">
              <IconButton sx={{ ml: 1 }}>
                <NotificationsActiveIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton sx={{ ml: 1 }}>
                <Badge
                  badgeContent={4}
                  color="primary"
                  variant="dot"
                >
                  <SearchIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>

            </Toolbar>

        </DashboardNavbarRoot>
    )
}


export default DashboardNavbar