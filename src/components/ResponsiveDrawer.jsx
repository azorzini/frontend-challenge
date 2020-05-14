import React from 'react';
import { AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core';
import { Menu }  from '@material-ui/icons';
import {PostDetails, PostList} from "../components";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;
const drawerWidth = 400;
//necessary to useTheme
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    width: 500,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ResponsiveDrawer = (props) =>  {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <PostList />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <RootDiv className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <StyledTypography variant="h6" noWrap>
            Reddit posts
          </StyledTypography>
          <Button variant="contained" color="secondary">
            Dismiss All
          </Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/*<PostDetails flex />*/}
      </main>
    </RootDiv>
  );
}

export default ResponsiveDrawer;
