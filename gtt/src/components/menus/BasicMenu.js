import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Collapse, Typography,Button, IconButton, } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const BasicMenu = () =>{
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false),
        );
      }, []);
    

    function NavList(){
        return(
            <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <Typography as="li" className="pr-6 text-2xl hover:text-blue-500">
                    <Link to={'/'}>Main</Link>
                </Typography>
                <Typography as="li" className="pr-6 text-2xl hover:text-blue-500">
                    <Link to={'/about'}>About</Link>
                </Typography>
                <Typography as="li" className="pr-6 text-2xl hover:text-blue-500">
                    <Link to={'/todo/'}>Todo</Link>
                </Typography>
                <Button  className="text-white text-sm m-1 rounded">Login</Button>
            </ul>
        );
    }
    
    return (
        <Navbar className="mx-auto max-w-screen-4xl px-6 py-3">
            <div className="flex items-center justify-between text-black">
                <Typography as="div" variant="h3" >
                    <Link to={'/'}>Main</Link>
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