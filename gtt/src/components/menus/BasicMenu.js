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
                <Typography as="li" className="p-1">
                    <Link to={'/'}>Main</Link>
                </Typography>
                <Typography as="li" className="p-1">
                    <Link to={'/about'}>About</Link>
                </Typography>
                <Typography as="li" className="p-1">
                    <Link to={'/todo/'}>Todo</Link>
                </Typography>
            </ul>
        );
    }
    
    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
            <div className="flex items-center justify-between text-black">
                <div className="w-4/5 bg-gray-500">
                    <Typography as="li" className="p-1">
                        <Link to={'/'}>Main</Link>
                    </Typography>
                    <Typography as="li" className="p-1">
                        <Link to={'/about'}>About</Link>
                    </Typography>
                    <Typography as="li" className="p-1">
                        <Link to={'/todo/'}><span className="flex items-center hover:text-blue-500 transition-colors">Todo</span></Link>
                    </Typography>
                </div>
                <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
                    <Button  className="text-white text-sm m-1 rounded">Login</Button>
                </div>
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