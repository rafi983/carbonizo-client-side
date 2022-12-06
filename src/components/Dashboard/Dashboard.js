import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Switch, Link, useRouteMatch, Route, NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import MyReview from "../MyReview/MyReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddAProduct from "../AddAProduct/AddAProduct";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {admin ? (
        <Box>
          <NavLink
            to="/"
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Home
            </Button>
          </NavLink>

          <Divider />

          <NavLink
            to={`${url}/myorders`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              My Orders
            </Button>
          </NavLink>
          <Divider />

          <NavLink
            to={`${url}/makeAdmin`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Make Admin
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/manageAllOrders`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Manage All Orders
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/manageProducts`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Manage Products
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/addAProduct`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Add A Product
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/login`}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              onClick={logOut}
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Logout
            </Button>
          </NavLink>
        </Box>
      ) : (
        <Box>
          <NavLink
            to="/"
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Home
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/myorders`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              My Orders
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/review`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Review
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/payment`}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Payment
            </Button>
          </NavLink>

          <NavLink
            to={`${url}/login`}
            style={{
              fontWeight: "bold",
              color: "mediumpurple",
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              onClick={logOut}
              sx={{
                display: "block",
                margin: "0 auto",
                fontSize: "1.5rem",
              }}
            >
              Logout
            </Button>
          </NavLink>
        </Box>
      )}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <PrivateRoute path={`${path}/myorders`}>
            <MyOrders />
          </PrivateRoute>

          <PrivateRoute path={`${path}/review`}>
            <MyReview />
          </PrivateRoute>
          <PrivateRoute path={`${path}/payment`}>
            <Payment />
          </PrivateRoute>

          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders />
          </AdminRoute>

          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>

          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>

          <AdminRoute path={`${path}/addAProduct`}>
            <AddAProduct />
          </AdminRoute>

          {admin ? (
            <AdminRoute path={path}>
              <ManageAllOrders />
            </AdminRoute>
          ) : (
            <PrivateRoute path={path}>
              <MyOrders />
            </PrivateRoute>
          )}
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
