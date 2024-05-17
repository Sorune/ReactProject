import BasicLayout from "../layouts/BasicLayout";
import {Card, Typography} from "@material-tailwind/react";
import {TeamCard} from "../components/common/TeamCard";
import {FaBug, FaFilePowerpoint, FaGithub, FaProjectDiagram} from "react-icons/fa";

const members = [
    {
        img: `/img/bongo-cat.gif`,
        name: "남태욱",
        title: "Team Leader",
        git:"https://github.com/Sorune",
    },
    {
        img: `/img/bonobono.gif`,
        name: "이서준",
        title: "Team Sub Leader",
        git:"https://github.com/lsj0317",
    },
    {
        img: `/img/poppy.gif`,
        name: "양지웅",
        title: "Team Member",
        git:"https://github.com/Yangjiwung",
    },
    {
        img: `/img/jerry.gif`,
        name: "전필우",
        title: "Team Member",
        git:"https://github.com/5516146",
    },
];

const AboutPage = ()=>{
    return (
        <BasicLayout>
            <section className="min-h-screen py-8 px-8 lg:py-28">
                <div className="container mx-auto">
                    <div className="mb-16 text-center lg:mb-28">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="text-lg"
                        >
                            Meet the Team
                        </Typography>
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="my-2 !text-2xl lg:!text-4xl"
                        >
                            GTT 프로젝트 팀원을 소개합니다
                        </Typography>
                        <div className="text-left">
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                조장 남태욱 : 전체적인 프로젝트 기획 및 라이브러리 관리, 폴더 구조 관리, 스프링 시큐리티 및 JWT 사용
                            </Typography>
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                부조장 이서준 : 버그리포팅 및 프로젝트의 전반적인 work-flow관리, 로그인 처리 및 검증 로직
                            </Typography>
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                팀원 양지웅 : 전반적인 디자인, 화면 구성, 게시판 작성. UI 이벤트 및 예매, 결제 로직 작성
                            </Typography>
                            <Typography variant="lead"  className="mx-auto w-full !text-gray-500 max-w-4xl">
                                팀원 전필우 : 게시판 작성 및 API 통신 구현, API 서버 작성 및 쿼리 작성
                            </Typography>
                        </div>
                    </div>
                    <div className="mb-16 text-center lg:mb-28 w-full">
                        <Typography variant="h1" color="blue-gray" className="my-2 !text-2xl lg:!text-3xl mb-6">
                            프로젝트 관리사항
                        </Typography>
                        <ul className="flex flex-wrap justify-center gap-4">
                            <li>
                                <Card className="flex flex-col items-center mb-4 p-2">
                                    프로젝트-레포지토리
                                    <a href="https://github.com/Sorune/ReactProject" target="_blank" rel="noopener noreferrer" className="mt-3 mb-3">
                                        <FaGithub className="mt-2 text-2xl" />
                                    </a>
                                    프로젝트의 전체적인 관리를 담당합니다.
                                </Card>
                            </li>
                            <li>
                                <Card className="flex flex-col items-center mb-4 p-2">
                                    엑셀-디버그
                                    <a href="https://docs.google.com/spreadsheets/d/1K__W738_YQg0yh3rkiwWCpVvQ2T4lJbCyXSIrWNiGRI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-3 mb-3">
                                        <FaBug className="mt-2 text-2xl" />
                                    </a>
                                    오류사항 체크 및 점검사항 문서화 자료입니다.
                                </Card>
                            </li>
                            <li>
                                <Card className="flex flex-col items-center mb-4 p-2">
                                    엑셀-프로젝트구조
                                    <a href="https://docs.google.com/spreadsheets/d/1cy7wGvsxCtF6VVV1Sz8xcvjUmFtRpRdB0JwZAXDE3JE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-3 mb-3">
                                        <FaProjectDiagram className="mt-2 text-2xl" />
                                    </a>
                                    GTT프로젝트의 구조 문서화 자료입니다.
                                </Card>
                            </li>
                            <li>
                                <Card className="flex flex-col items-center mb-4 p-2">
                                    PPT-발표자료
                                    <a href="https://docs.google.com/presentation/d/16qg9zVZI4_lOkWRWDRszbVpyA3_koDfQgV_KafeirFU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-3 mb-3">
                                        <FaFilePowerpoint className="mt-2 text-2xl" />
                                    </a>
                                    GTT프로젝트 발표내용 자료입니다.
                                </Card>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {members.map((props, key) => (
                            <TeamCard key={key} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </BasicLayout>
    );
}

export default AboutPage;