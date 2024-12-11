import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';




export default function NavigationBar() {

    const navigate = useNavigate();
    // const authentication = Auth();
    const [authenticated,setAuthenticated] = React.useState();
    const [usernavbtn,setUsernavbtn] = React.useState(false);
    const [adminnavbtn,setAdminnavbtn] = React.useState(false);
    const [navbtns,setNavbtns] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);

  };

  const logout = () =>{
    setAdminnavbtn(false);
    setUsernavbtn(false);
    navigate("/logout");
  }
  
  // useEffect(() => {
  //   console.log("USE EFFECT!!");
  //   setAuth();
  //   if(adminnavbtn)
  //     setNavbtns(['Home','Todos','Welcome','Add Todos','Show All Todos']);
  //   if(usernavbtn)
  //     setNavbtns(['Home','Todos','Welcome','Add Todos']);

  //   console.log(usernavbtn);
  //   console.log(adminnavbtn);
  //   console.log(navbtns);

  // },[]);

  useEffect(() => {
    setAuth();
  });

  function setAuth() {
    
      setAdminnavbtn(true);
      setAdminnavbtn(true);
      setAuthenticated(true);
      setAuthenticated(true);
        setUsernavbtn(true);
        setUsernavbtn(true);
        setAuthenticated(true);
        setAuthenticated(true);
  }

  const navigateTo = (text) =>{
    if(text == "Home"){
      navigate("/Home")
    } else if(text == "Todos"){
      navigate("/table");
    } else if(text == "Welcome"){
      navigate("/welcome");
    } else if(text == "Add Todos"){
      navigate("/addtodo");
    } else if(text == "restaurantlist"){
      navigate("/restaurantlist");
    }else if(text == "leaderboard"){
      navigate("/leaderboard");
    }
  } 

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  
  
  
  
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <center>
        <h1 style={{"fontFamily":"Arial"}}>Todos</h1>
        </center>
        <List>
        
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{navigateTo('Home')}}>
              <ListItemIcon>
                <MenuIcon/>
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
      </List>
        <List>
        
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{navigateTo('leaderboard')}}>
              <ListItemIcon>
                <MenuIcon/>
              </ListItemIcon>
              <ListItemText primary={"Leaderboard"} />
            </ListItemButton>
          </ListItem>
      </List>
         
    </Box>
  );


  return (<>

{/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    <Box sx={{ flexGrow: 1 }} id='box'>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
            
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>


          <Link to='./login' className="links"><Button className="links" color="inherit">{ 'Login'}</Button></Link>
          {/* <Link to='./register' className="links"><Button color="inherit">{'Register'}</Button></Link> */}
          <Link to='./logout' className="links" onClick={logout}><Button color="inherit">{'Logout'}</Button></Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  </>
  );
}