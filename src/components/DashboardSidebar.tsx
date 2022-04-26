
import { Box, Button, Divider, Drawer, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import Link from 'next/link'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavItem from './NavItem';
import { LogoBag } from '../icons/logo'
import { SelectorIcon } from '../icons/SelectorIcon'

type Props = {
    onClose?: () => void; 
    open: boolean; 
}


const items = [
    {
      href: '/',
      icon: (<DashboardIcon fontSize="small" />),
      title: 'Dashboard'
    },
    {
      href: '/availble_unit',
      icon: (<HouseSidingIcon fontSize="small" />),
      title: 'Available unit'
    },
    {
      href: '/invoices',
      icon: (<VerifiedUserIcon fontSize="small" />),
      title: 'Invoices'
    },
    {
      href: '/project',
      icon: (<AccessTimeIcon fontSize="small" />),
      title: 'Project'
    },
    {
      href: '/social_media',
      icon: (<ShareIcon fontSize="small" />),
      title: 'Social Media'
    },
    {
      href: '/integration',
      icon: (<DashboardIcon fontSize="small" />),
      title: 'Integration'
    },
    {
      href: '/documentation',
      icon: (<ArticleIcon fontSize="small" />),
      title: 'Documentation'
    },
    {
      href: '/settings',
      icon: (<SettingsIcon fontSize="small" />),
      title: 'Settings'
    },
    {
      href: '/helpcenter',
      icon: (<HelpIcon fontSize="small" />),
      title: 'Help Center'
    },
];


const loweritems =[
  {
    href: '/documentation',
    icon: (<AccountCircleIcon fontSize="small" />),
    title: 'Louise Thompson'
  },
]



const DashboardSidebar = ({ onClose, open }: Props) => {

    const theme = useTheme();
    // const location = useLocation()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });


    // useEffect(() => {
    //     console.log(location.pathname)
    //   }, [location])


      const content = (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div>
              <Box sx={{ p: 3 }}>
                <Link href="#" >
                  <a>
                    <LogoBag sx={{ height: 42, width: 42 }}
                    />
                  </a>
                </Link>
              </Box>
              <Box sx={{ px: 2 }}>
                <Box
                  sx={{
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 3,
                    py: '11px',
                    borderRadius: 1
                  }}
                >
                  <SelectorIcon
                    sx={{
                      color: 'neutral.500',
                      width: 14,
                      height: 14
                    }}
                  />
                </Box>
              </Box>
            </div>
            <Divider
              sx={{
                borderColor: '#2D3748',
                my: 3
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              {items.map((item) => (
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                />
              ))}
            </Box>
            <Divider sx={{ borderColor: '#2D3748' }} />
            <Box sx={{px: 2, py: 3 }}>
              <Box sx={{ flexGrow: 1 }}>
                {loweritems.map((item) => (
                    <NavItem
                      key={item.title}
                      icon={item.icon}
                      href={item.href}
                      title={item.title}
                    />
                ))}
                
              </Box>
            </Box>
          </Box>
        </>
      );


      if(lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280
                }
                }}
                variant="permanent"
                >
                {content}
            </Drawer>
        )
      }


    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
            sx: {
                backgroundColor: 'neutral.900',
                color: '#FFFFFF',
                width: 280
            }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
           {/* { content } */}
        </Drawer>
    )
}

export default DashboardSidebar