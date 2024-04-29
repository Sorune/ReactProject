import {Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, AccordionHeader, AccordionBody, Accordion} from "@material-tailwind/react";
import {PresentationChartBarIcon,ShoppingBagIcon,UserCircleIcon,Cog6ToothIcon,InboxIcon,PowerIcon,} from "@heroicons/react/24/solid";
import React from "react";

const SideComponent = () => {

    // 상세메뉴 드롭다운 이벤트
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-6 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        메뉴를 선택하세요
                    </Typography>
                </div>
                <List className="p-5">
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            <ListItem>
                                <ListItemPrefix>
                                    <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                방문자통계
                            </ListItem>
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography>연간통계</Typography>
                            <Typography>월간통계</Typography>
                            <Typography>주간통계</Typography>
                            <Typography>일간통계</Typography>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            <ListItem>
                                <ListItemPrefix>
                                    <ShoppingBagIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                주문현황
                            </ListItem>
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography>주문확인</Typography>
                            <Typography>입금확인</Typography>
                            <Typography>배송확인</Typography>
                            <Typography>출고확인</Typography>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            <ListItem>
                                <ListItemPrefix>
                                    <InboxIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                메일함
                            </ListItem>
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography>수신확인</Typography>
                            <Typography>발신확인</Typography>
                            <Typography>메일작성</Typography>
                            <Typography>메일설정</Typography>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            <ListItem>
                                <ListItemPrefix>
                                    <UserCircleIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                회원관리
                            </ListItem>
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography>회원리스트</Typography>
                            <Typography>회원추가</Typography>
                            <Typography>로그인테스트</Typography>
                            <Typography>회원설정</Typography>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5}>
                        <AccordionHeader onClick={() => handleOpen(5)}>
                            <ListItem>
                                <ListItemPrefix>
                                    <Cog6ToothIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                사이트설정
                            </ListItem>
                        </AccordionHeader>
                        <AccordionBody>
                            <Typography>api관리</Typography>
                            <Typography>디자인관리</Typography>
                            <Typography>광고관리</Typography>
                            <Typography>서버연결관리</Typography>
                        </AccordionBody>
                    </Accordion>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        관리자모드종료
                    </ListItem>
                </List>
            </Card>
        </>
    );
}

export default SideComponent;