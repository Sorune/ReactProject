import { Link } from 'react-router-dom';
import { Accordion, AccordionHeader, AccordionBody, Card, CardBody, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import React from "react";

const AdminSideComponent = () => {

    const menuItems = [
        {
            id: 1,
            title: "방문자통계",
            icon: PresentationChartBarIcon,
            details: [
                { name: "연간통계", path: "/annual-stats" },
                { name: "월간통계", path: "/monthly-stats" },
                { name: "주간통계", path: "/weekly-stats" },
                { name: "일간통계", path: "/daily-stats" }
            ]
        },
        {
            id: 2,
            title: "주문현황",
            icon: ShoppingBagIcon,
            details: [
                { name: "주문확인", path: "/order-confirmation" },
                { name: "입금확인", path: "/payment-verification" },
                { name: "배송확인", path: "/shipping-status" },
                { name: "출고확인", path: "/dispatch-status" }
            ]
        },
        {
            id: 3,
            title: "메일함",
            icon: InboxIcon,
            details: [
                { name: "수신확인", path: "/inbox" },
                { name: "발신확인", path: "/outbox" },
                { name: "메일작성", path: "/compose-mail" },
                { name: "메일설정", path: "/mail-settings" }
            ]
        },
        {
            id: 4,
            title: "회원관리",
            icon: UserCircleIcon,
            details: [
                { name: "회원리스트", path: "/member-list" },
                { name: "회원추가", path: "/add-member" },
                { name: "로그인테스트", path: "/login-test" },
                { name: "회원설정", path: "/member-settings" }
            ]
        },
        {
            id: 5,
            title: "사이트설정",
            icon: Cog6ToothIcon,
            details: [
                { name: "API 관리", path: "/api-management" },
                { name: "디자인관리", path: "/design-management" },
                { name: "광고관리", path: "/ad-management" },
                { name: "서버연결관리", path: "/server-connection" }
            ]
        }
    ];

    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-6 shadow-xl shadow-blue-gray-900/5 overflow-hidden">
            <div className="mb-2 p-2">
                <Typography variant="h5" color="blue-gray">
                    관리자메뉴
                </Typography>
            </div>
            <List className="p-0 min-w-[200px]">
                {menuItems.map((item) => (
                    <Accordion key={item.id} open={open === item.id}>
                        <AccordionHeader onClick={() => handleOpen(item.id)}>
                            <ListItem>
                                <ListItemPrefix>
                                    <item.icon className="h-5 w-5" />
                                </ListItemPrefix>
                                {item.title}
                            </ListItem>
                        </AccordionHeader>
                        <AccordionBody className="text-center">
                            {item.details.map(detail => (
                                <Link to={detail.path} key={detail.name}>
                                    <Typography>
                                        {detail.name}
                                    </Typography>
                                </Link>
                            ))}
                        </AccordionBody>
                    </Accordion>
                ))}
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    관리자모드종료
                </ListItem>
            </List>
        </Card>
    );
};

export default AdminSideComponent;