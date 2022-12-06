import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavMenu.css";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function NavMenu() {
  const { user, logOut } = useAuth();
  const theme = useTheme();

  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },

    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },

    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
      display: "flex",
      alignItems: "center",
    },
  });

  const { navIcon, navItemContainer, navLogo } = useStyle();

  const [state, setState] = React.useState(false);

  const history = useHistory();
  const handleClick = () => {
    history.push("/explore");
  };

  const handleClick2 = () => {
    history.push("/");
  };

  const handleClick3 = () => {
    history.push("/login");
  };

  const handleDashboard = () => {
    history.push("/dashboard");
  };
  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Button
              sx={{ display: "block" }}
              color="inherit"
              onClick={handleClick}
            >
              Explore
            </Button>
          </ListItemText>
        </ListItem>
        {user?.email ? (
          <>
            <ListItem button>
              <ListItemText>
                <Button
                  sx={{ display: "block" }}
                  color="inherit"
                  onClick={handleDashboard}
                >
                  Dashboard
                </Button>
              </ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemText>
                <Button
                  sx={{ display: "block" }}
                  color="inherit"
                  onClick={logOut}
                >
                  Logout
                </Button>
              </ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemText>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  Hello, {user.displayName}
                  {user.photoURL ? (
                    <img className="user-img" src={user.photoURL} alt="" />
                  ) : (
                    <img
                      className="user-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzgsi-SA54nLR0Nqw0bbSVKaUIaGnCN5KQQ&usqp=CAU"
                      alt=""
                    />
                  )}
                </Typography>
              </ListItemText>
            </ListItem>
          </>
        ) : (
          <ListItem button>
            <ListItemText>
              <Button
                sx={{ display: "block" }}
                color="inherit"
                onClick={handleClick3}
              >
                Login
              </Button>
            </ListItemText>
          </ListItem>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                className={navLogo}
                sx={{ flexGrow: 1, cursor: "pointer" }}
                onClick={handleClick2}
              >
                Carbonizo
              </Typography>
            </>

            <Box className={navItemContainer}>
              <div>
                <Button color="inherit" onClick={handleClick}>
                  Explore
                </Button>

                {user?.email ? (
                  <>
                    <Button color="inherit" onClick={handleDashboard}>
                      Dashboard
                    </Button>
                    <Button color="inherit" onClick={logOut}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button color="inherit" onClick={handleClick3}>
                    Login
                  </Button>
                )}
              </div>

              <div>
                {user?.email && (
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    Hello, {user.displayName}
                    {user.photoURL ? (
                      <img className="user-img" src={user.photoURL} alt="" />
                    ) : (
                      <img
                        className="user-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzgsi-SA54nLR0Nqw0bbSVKaUIaGnCN5KQQ&usqp=CAU"
                        alt=""
                      />
                    )}
                  </Typography>
                )}
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
