import { useState, useEffect } from "react";
import BasicMenu from "../components/menus/BasicMenu";
import Sidebar from "../test/pages/Sidebar";
import ReadPage from "../pages/news/ReadPage";

const SidebarLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // 가로 너비가 768px 이하이면 모바일로 판단
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 컴포넌트가 마운트될 때 한 번 호출하여 초기값 설정

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* 기존 헤더 대신 BasicMenu */}
            <BasicMenu />
            {/* 상단 여백 my-5 제거 */}
            <div className="bg-white w-full flex flex-col px-8 gap-2 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                {/* 첫 번째와 다섯 번째 열은 isMobile이 true일 때 hidden 클래스 추가 */}
                <div className={`col-span-1 p-2 ${isMobile ? "hidden" : ""}`}>
                    <Sidebar />
                </div>
                {/* 두 번째와 네 번째 열은 isMobile이 true일 때 hidden 클래스 추가 */}
                <main className="bg-sky-300 w-full  md:col-span-2 m-0">
                    {children}
                </main>
                {/* 세 번째와 여섯 번째 열은 isMobile이 true일 때 hidden 클래스 추가 */}
                <div className={`col-span-1 p-2 ${isMobile ? "hidden" : ""}`}>
                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default SidebarLayout;
