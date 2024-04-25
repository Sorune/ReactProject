import React, {forwardRef, useState} from "react";
import { useCountries } from "use-react-countries";
import {
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

const testTeam ={
    teamName:"Gen.G",
    teamImg:"/img/team/geng.png"
}



export const DropDownInput = forwardRef(({ onChange,title , buttonRef, inputRef}) => {
    const { countries } = useCountries();
    const [country, setCountry] = React.useState(0);
    const { name, flags, countryCallingCode } = countries[country];

    const handleChange = (e) => {
        onChange(e); // 상위 컴포넌트로 선택된 팀 전달
    };
    return (
        <div className="relative flex w-full ">
            <Menu placement="bottom-start" ref={buttonRef}>
                <MenuHandler>
                    <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                    >
                        <img
                            src={testTeam.teamImg}
                            alt={name}
                            className="h-4 w-4 rounded-full object-cover"
                        />
                        {testTeam.teamName}
                    </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                    {countries.map(({ name, flags, countryCallingCode }, index) => {
                        return (
                            <MenuItem
                                key={name}
                                value={name}
                                className="flex items-center gap-2"
                                onClick={() => setCountry(index)}
                            >
                                <img
                                    src={flags.svg}
                                    alt={name}
                                    className="h-5 w-5 rounded-full object-cover"
                                />
                                {name} <span className="ml-auto">{countryCallingCode}</span>
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
            <Input
                type="text"
                placeholder="title"
                value={title}
                ref={inputRef}
                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                containerProps={{
                    className: "min-w-0",
                }}
                onChange={handleChange}
            />
        </div>
    );
})
