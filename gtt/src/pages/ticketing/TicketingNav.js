import { Avatar, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
// import { Button } from "react-day-picker";


const TicketingNav = () => {

    return (
        <Card className="mt-6 w-full">
            <CardBody>
                <div>
                    <div>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            예매하기
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6">
                            아래의 팀 아이콘을 눌러서 경기 일정을 조회 할 수 있습니다.
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="flex items-center gap-4">
                            <Avatar src="/img/teab/geng.png" alt="avatar" />
                            <div>
                                <Typography variant="h6">Gen.G</Typography>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </CardBody>
            <div>

            </div>
        </Card>
    );
}

export default TicketingNav;