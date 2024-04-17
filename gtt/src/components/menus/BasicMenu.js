import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { Navbar, Collapse, Typography,Button, IconButton, } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const BasicMenu = () =>{
    const [openNav, setOpenNav] = React.useState(false);
    const navigate = useNavigate()
    React.useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false),
        );
      }, []);
    const MoveToLogin = ()=>{
        navigate("/login")
    }
    function NavList(){
        return(
            <ul className="my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
                <Typography as="li" className="pr-4 text-2xl hover:text-blue-500 text-blue-gray-800">
                    <Link to={'/'}>Main</Link>
                </Typography>
                <Typography as="li" className="pr-4 text-2xl hover:text-blue-500 text-blue-gray-800">
                    <Link to={'/about'}>About</Link>
                </Typography>
                <Typography as="li" className="pr-4 text-2xl hover:text-blue-500 text-blue-gray-800">
                    <Link to={'/news/'}>News</Link>
                </Typography>
                <Button variant="outlined" size="md" color="blue-gray" onClick={MoveToLogin} fullWidth>
                    Log In
                </Button>
                <Button variant="gradient" size="md" className="whitespace-nowrap" fullWidth>
                    Sign In
                </Button>
            </ul>
        );
    }
    
    return (
        <Navbar className="mx-auto max-w-full px-3 py-3">
            <div className="flex items-center justify-between text-black">
                <Typography as="div" variant="h3" >
                    <Link to={'/'}>GTT</Link><Typography variant="small">- 그래서 그 팀 티어가...? -</Typography>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default BasicMenu;