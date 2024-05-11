import React, {useCallback, useMemo, useState} from 'react';
import {Card, CardBody, Typography, Button, Dialog, DialogHeader, DialogBody} from "@material-tailwind/react";
import { format, addWeeks } from 'date-fns';
import { ko } from 'date-fns/locale';
import {getMember} from "../../api/memberApi";
import Stadium from "../../test/pages/Stadium";
import TestStadium from "../../test/pages/TestStadium";

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


const formatDate = (dateString) => {
    const parts = dateString.split(' ');
    return { dayPart: parts.slice(0, -1).join(' '), timePart: parts.pop() };
};

const GameCard = React.memo(({ game, onOpenModal }) => {
    const { dayPart, timePart } = formatDate(game.matchDay);

    return (
        <Card className="mt-6 w-full">
            <CardBody>
                <div className={`text-center ${game.isSelected ? 'bg-blue-500' : ''}`}>
                    <Typography className="text-black">
                        {timePart} {game.matchName} / {game.matchRound}
                    </Typography>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center mt-2">
                    <Typography>{dayPart}<br/>{game.matchHour}</Typography>
                    <Typography>{game.matchOpponent}</Typography>
                    <Button onClick={() => onOpenModal(game)}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
                        예매
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
});

// function usePagination(data, itemsPerPage) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPages = Math.ceil(data.length / itemsPerPage);
//
//     const currentData = useMemo(() => {
//         const start = (currentPage - 1) * itemsPerPage;
//         const end = start + itemsPerPage;
//         return data.slice(start, end);
//     }, [currentPage, itemsPerPage, data]);
//
//     return { currentData, currentPage, setCurrentPage, totalPages };
// }

const TicketingPage = ({ selectedTeam }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentGame, setCurrentGame] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 4;

    const filteredGames = useMemo(() => games.filter(game => game.team === selectedTeam), [selectedTeam]);
    const paginatedGames = useMemo(() => {
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        return filteredGames.slice(startIndex, endIndex);
    }, [filteredGames, currentPage, gamesPerPage]);

    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

    const handleOpenModal = useCallback((game) => {
        setCurrentGame(game);
        setModalOpen(true);
    }, [setCurrentGame, setModalOpen]);

    const changePage = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
    };
    const [showDialog, setShowDialog] = useState(false);

    const handleOpenDialog = () => {
        setShowDialog(true)
    };
    const handleCloseDialog = () => {
        setShowDialog(false);
    };
    return (
        <div>
            {/* Game cards */}
            {paginatedGames.map((game, index) => (
                <GameCard key={index} game={game} onOpenModal={handleOpenModal} />
            ))}
            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-4">
                <Button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>이전</Button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button key={index} onClick={() => setCurrentPage(index + 1)}
                            className={index + 1 === currentPage ? 'bg-blue-700' : ''}>
                        {index + 1}
                    </Button>
                ))}
                <Button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>다음</Button>
            </div>
            {/* Modal for booking details */}
            <Dialog open={modalOpen} onClose={() => setModalOpen(false)} handler={handleOpenModal}>
                <Dialog.Header>예매 정보</Dialog.Header>
                <Dialog.Body>
                    {currentGame && (
                        <div>
                            <p>경기일자: {currentGame.matchDay}</p>
                            <p>주최명: {currentGame.matchName}</p>
                            <p>상대팀: {currentGame.matchOpponent}</p>
                            <p>경기정보: {currentGame.matchRound}</p>
                        </div>
                    )}
                </Dialog.Body>
                <Dialog.Footer>
                    <Button onClick={() => {
                        handleOpenDialog(currentGame);
                        setModalOpen(false);
                    } } >예매</Button>
                    <Button onClick={() => setModalOpen(false)}>닫기</Button>
                </Dialog.Footer>
            </Dialog>
            {/*좌석선택*/}
            <Dialog size="lg" className="w-full" open={showDialog} handler={handleCloseDialog} >
                <DialogHeader className="flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-bl items-center">
                    <div className="flex items-center">
                        <Typography color="white" variant="h3" className="mr-4">
                            예매하기
                        </Typography>
                        {currentGame && (
                            <Typography className="mr-4" color="white" variant="h4">
                                {currentGame.matchName} | {currentGame.matchRound}
                            </Typography>
                        )}
                    </div>
                    <Button variant="gradient" color="red" size="sm" onClick={handleCloseDialog}>
                        X
                    </Button>
                </DialogHeader>
                <DialogBody className="overflow-hidden ">
                    <div className="max-w-full max-h-full h-[34.5rem]">
                        <TestStadium/>
                    </div>
                </DialogBody>
            </Dialog>
        </div>
    );
}

export default TicketingPage;