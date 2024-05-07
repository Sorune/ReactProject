import React, { useState } from 'react';
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";

const TicketingNav = ({ onTeamSelect }) => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    // 팀 데이터 배열 정의
    const teams = [
        { name: "Gen.G", img: "/img/team/geng.png" },
        { name: "SKT1", img: "/img/team/T1.png" },
        { name: "Hanwha Life Esports", img: "/img/team/Hanwha_Life_Esports.png" },
        { name: "kt Rolster", img: "/img/team/Rolster.png" },
        { name: "Dplus KIA", img: "/img/team/DPlus_KIA.png" },
        { name: "KWANGODNG FREECS", img: "/img/team/Freecs.png" },
        { name: "FearX", img: "/img/team/FearX.png" },
        { name: "Nongshim RedForce", img: "/img/team/NongShim.png" },
        { name: "DRX", img: "/img/team/Brion.png" },
        { name: "OKSavingBank BRION", img: "/img/team/OK.jpg" }
    ];

    const handleTeamSelect = (teamName) => {
        setSelectedTeam(teamName);
        onTeamSelect(teamName);
    };

    return (
        <Card className="mt-6 w-full">
            <CardBody>
                <div className="grid col-auto gap-5">
                    <div className="col-start-1 col-end-2">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            예매하기
                        </Typography>
                    </div>
                    <div className="col-start-3 col-end-6">
                        <Typography variant="h6">
                            아래의 팀 아이콘을 눌러서 경기 일정을 조회 할 수 있습니다.
                        </Typography>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {teams.map((team) => (
                        <div key={team.name} className="flex items-center gap-4 cursor-pointer" onClick={() => handleTeamSelect(team.name)} style={{border: selectedTeam === team.name ? '2px solid skyblue' : 'none', padding: '4px', borderRadius: '50%'}}>
                            <Avatar src={team.img} alt={team.name} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    <div className="items-center hidden gap-x-2 lg:flex">
                        <div className="relative flex w-full gap-2 md:w-max">
                            <div className="relative h-10 w-full  min-w-[288px]">
                                <input type="search" placeholder="Search" className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                            </div>
                            <div className="!absolute left-3 top-[13px]">
                                <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z" fill="#CFD8DC"></path>
                                    <path d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z" stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                        <button className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Search
                        </button>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default TicketingNav;