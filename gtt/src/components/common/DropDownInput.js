import React, {forwardRef, useEffect, useState} from "react";
import { useCountries } from "use-react-countries";
import {
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import {allTeam} from "../../api/teamApi";
import {API_SERVER_HOST} from "../../api/filesApi";

const testTeam ={
    teamName:"Gen.G",
    teamImg:"/img/team/geng.png"
}



export const DropDownInput = forwardRef(({onChange,title,  buttonRef, inputRef}) => {
    const { countries } = useCountries();
    const [teams, setTeams] = useState();
    const [team, setTeam] = React.useState(0);
    const { teamNo,teamName,teamImage } = teams?teams[team]: {teamNo: 0,teamName:"",teamImg:"/img/team/geng.png"};

    useEffect(() => {
        allTeam().then((teams)=>{
            console.log(teams[0]);
            setTeams(teams);
        })
    }, []);
    console.log(teams)
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
                            src={teams?`${API_SERVER_HOST}/api/files/${teamImage}`:"/img/no-image.png"}
                            alt={teams?teamNo:0}
                            className="h-4 w-4 rounded-full object-cover"
                        />
                        {teams?teamName:""}
                    </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                    {teams?teams.map((team, index) => {
                        console.log(team);
                        return (
                            <MenuItem
                                key={team.teamNo}
                                value={team.teamNo}
                                className="flex items-center gap-2"
                                onClick={() => setTeam(index)}
                            >
                                <img
                                    src={team.teams?`${API_SERVER_HOST}/api/files/${team.teamImage}`:"/img/no-image.png"}
                                    alt={team.teams?team.teamName:""}
                                    className="h-5 w-5 rounded-full object-cover"
                                />
                                {team.teamNo} <span className="ml-auto">{team.teamName}</span>
                            </MenuItem>
                        );
                    }):<></>}
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
