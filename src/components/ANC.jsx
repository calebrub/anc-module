import * as React from 'react';
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PresentPregnancy from "./presentPregnancy/index.jsx";
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import History from "./history/index.jsx";
import Examination from "./examination/index.jsx";
import ObstetricAssessment from "./obstetricAssessment/index.jsx";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const navigate = useNavigate();
    const location = useLocation();

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    const tabs = [
        {
            name: "Present Pregnancy",
            component: <PresentPregnancy />,
            icon: <PregnantWomanIcon />,
            path: "/present-pregnancy"
        },
        {
            name: "History",
            component: <History />,
            icon: <HistoryEduIcon />,
            path: "/history"
        },
        {
            name: "Examination",
            component: <Examination />,
            icon: <MonitorHeartIcon />,
            path: "/examination"
        },
        {
            name: "Previous Obstetric Assessment",
            component: <ObstetricAssessment/>,
            icon: <HealthAndSafetyIcon />,
            path: "/obstetric-assessment"
        }
    ];

    // Redirect to first tab if on root path
    useEffect(() => {
        if (location.pathname === '/') {
            navigate(tabs[0].path);
        }
    }, [location.pathname, navigate]);

    const handleTabChange = (path) => {
        navigate(path);
    };

    const drawer = (
        <div>
            <Box display="flex" mx={2} justifyItems="center" gap={1} alignItems="center">
                <img src={`${import.meta.env.BASE_URL}vite.svg`} alt="Custom SVG" height={100} width="30%" />
                <Typography fontWeight={"bold"} variant="h5">Ihmis Demo</Typography>
            </Box>
            <Divider />
            <List>
                {tabs.map(( tab, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={() => handleTabChange(tab.path)}
                            selected={location.pathname === tab.path}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                }
                            }}
                        >
                            <ListItemIcon>
                                {tab?.icon}
                            </ListItemIcon>
                            <ListItemText primary={tab.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Antenatal Card
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* Add this spacer to prevent content from going under AppBar */}


            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    slotProps={{
                        root: {
                            keepMounted: true, // Better open performance on mobile.
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Routes>
                {tabs.map((tab, index) => (
                    <Route 
                        key={index}
                        path={tab.path} 
                        element={tab.component} 
                    />
                ))}
            </Routes>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
