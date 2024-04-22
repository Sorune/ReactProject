import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

const TicketingPage = () => {

    return (
        <div >
            <Card className="mt-6 w-full">
                <CardBody>
                    <div className="grid col-auto gap-5">
                        <div className="col-start-1 col-end-1">
                            <Typography>
                                {/* {matchDay} */}
                                5.11(토)
                            </Typography>
                        </div>
                        <div className="col-start-2 col-end-2">
                            <Typography>
                                {/* {matchHour} */}
                                17:00
                            </Typography>
                        </div>
                        <div className="col-start-3 col-end-3">
                            <Typography>
                                {/* {matchName} */}
                                LCK 스프링
                                <br/>
                                {/* {matchRound}/{matchOpponent} */}
                                1라운드 / GEN.G vs SKT1
                            </Typography>
                        </div>
                        <div className="col-start-4 col-end-4">
                            <Button className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">예매</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default TicketingPage;