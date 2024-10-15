import React from "react";
import "./Header.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List></List>
      <Divider />
      <div className="Sidebharmanu">
        <ul>
          <Link to="/">
            <li> Home</li>
          </Link>

          <Link to="/Men">
            {" "}
            <li>COOKIN</li>
          </Link>
          <Link to="/Women">
            <li>DINING AND DRINKING</li>
          </Link>
          <Link to="/Women">
            <li> KITCHEN TOOLS</li>
          </Link>
          <Link to="/Women">
            <li> POOJA GIFTING & MORE</li>
          </Link>
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <header className="py-4 px-6 md:px-12 flex justify-between items-center Header-main">
        <Link to="/">
          <img className="logo" src="img/logo.jpeg" alt="E-commerce Logo" />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <div className="data">
            <ul>
              <Link to="/">
                <li> Home</li>
              </Link>

              <Link to="/Men">
                {" "}
                <li>COOKIN</li>
              </Link>
              <Link to="/Women">
                <li>DINING AND DRINKING</li>
              </Link>
              <Link to="/Women">
                <li> KITCHEN TOOLS</li>
              </Link>
              <Link to="/Women">
                <li> POOJA GIFTING & MORE</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="flex items-center">
          <div className="manu flex">
            <input
              type="text"
              placeholder="Search..."
              className="bg-input text-primary-foreground px-3 py-2 rounded-md mr-5  focus:outline-none"
            />
            {/* <Button className="Serach" variant="contained">Search</Button> */}
            <AccountCircleIcon />
          </div>
          <div className="Sidebhar">
            <Button onClick={toggleDrawer(true)}>
              <AppsIcon />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
