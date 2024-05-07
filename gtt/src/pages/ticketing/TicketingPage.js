import React, { useMemo, useState } from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { format, addWeeks } from 'date-fns';
import { ko } from 'date-fns/locale';

const teams = [
    "Gen.G", "SKT1", "Hanwha Life Esports", "kt Rolster", "Dplus KIA",
    "KWANGODNG FREECS", "FearX", "Nongshim RedForce", "DRX", "OKSavingBank BRION"
];

const startDate = new Date(2024, 4, 6);

const generateGames = () => {
    const games = [];
    for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < 10; j++) {
            let opponent = teams[(i + j + 1) % teams.length];
            let matchDate = addWeeks(startDate, j);
            games.push({
                team: teams[i],
                matchDay: format(matchDate, 'M월 d일 EEEE, yyyy', { locale: ko }),
                matchHour: "17:00",
                matchName: "LCK 스프링",
                matchRound: `${j + 1}라운드`,
                matchOpponent: `vs ${opponent}`
            });
        }
    }
    return games;
};

const games = generateGames();

const GameCard = React.memo(({ game, selectedTeam }) => (
    <Card className="mt-6 w-full">
        <CardBody>
            <div>
                <div className={`text-center ${selectedTeam === game.team ? 'bg-blue-500' : ''}`}>
                    <Typography className="text-white">
                        {game.matchDay.split(' ').pop()} {game.matchName} / {game.matchRound}
                    </Typography>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center mt-2">
                    <div className="col-span-2">
                        <Typography>
                            {game.matchDay.split(' ').slice(0, -1).join(' ')}<br/>
                            {game.matchHour}
                        </Typography>
                    </div>
                    <div className="col-span-1 text-center">
                        <Typography>
                            {game.matchOpponent}
                        </Typography>
                    </div>
                    <div className="col-span-1 flex justify-center align-center">
                        <Typography>
                            <Button className="col-span-4 md:col-span-1 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                                예매
                            </Button>
                        </Typography>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>
));

const TicketingPage = ({ selectedTeam }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 4;

    const filteredGames = useMemo(() => games.filter(game => game.team === selectedTeam), [selectedTeam]);

    const paginatedGames = useMemo(() => {
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        return filteredGames.slice(startIndex, endIndex);
    }, [filteredGames, currentPage, gamesPerPage]);

    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

    const changePage = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
    };

    return (
        <div>
            {paginatedGames.map((game, index) => (
                <GameCard key={index} game={game} selectedTeam={selectedTeam} />
            ))}
            <div className="flex justify-center space-x-2 mt-4">
                <Button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>이전</Button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button key={index} onClick={() => setCurrentPage(index + 1)} className={index + 1 === currentPage ? 'bg-blue-700' : ''}>
                        {index + 1}
                    </Button>
                ))}
                <Button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>다음</Button>
            </div>
        </div>
    );
}

export default TicketingPage;