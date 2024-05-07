import React, {useEffect, useState} from "react";
import axios from "axios";
import {Avatar, Card, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography} from "@material-tailwind/react";

export const getItems = async () => {
    const res = await axios.get(`https://ddragon.leagueoflegends.com/cdn/14.9.1/data/ko_KR/item.json`);
    return res.data;
};

const LoLListPage = () => {
    const [serverData, setServerData] = useState();
    const [items, setItems] = useState();
    const [keys, setKeys] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        getItems().then((data) => {
            setServerData(data);
            setItems(data.data);
        });
    }, [refresh]);

    var keyString = "";
    for (let key in items) {
        keyString += key + "/";
    }
    const keyList = keyString.split("/");
    console.log(items)

    const removeTags = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html"); // DOMParser를 사용하여 HTML을 파싱
        return doc.body.textContent || ""; // textContent를 사용하여 태그를 제외한 순수한 텍스트를 추출
    };

    return (
        <Card className="grid">
            <Tabs value="all">
                <div>
                    메롱ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ
                </div>
                <TabsHeader className="start-1 end-12 overflow-x-auto">
                    {serverData !== undefined &&
                        keyList.map((itemsKey) => {
                            if (itemsKey === "") {
                                return null;
                            }
                            return (
                                // 아이템이 소환사의 협곡이고 inStore 속성이 없는 경우에만 출력
                                items[itemsKey].maps["11"] === true && !items[itemsKey].hasOwnProperty('inStore') && (
                                    (searchKey === "all" || searchKey === "") ? (
                                        <Tab key={itemsKey} value={items[itemsKey].name} className="min-w-24">
                                            <div className="grid-rows-2">
                                                <Avatar
                                                    src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${items[itemsKey].image.full}`}
                                                    alt={`${items[itemsKey].name}`}
                                                    size="md"
                                                />
                                                <Typography variant="small">{items[itemsKey].name}</Typography>
                                            </div>
                                        </Tab>
                                    ) : (
                                        <Tab key={itemsKey} value={items[itemsKey].name} className="min-w-24">
                                            <div className="grid-rows-2">
                                                <Avatar
                                                    src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${items[itemsKey].image.full}`}
                                                    alt={`${items[itemsKey].name}`}
                                                    size="md"
                                                />
                                                <Typography variant="small">{items[itemsKey].name}</Typography>
                                            </div>
                                        </Tab>
                                    )
                                )
                            );
                        })}
                </TabsHeader>
                <TabsBody>
                    {serverData !== undefined &&
                        keyList.map((itemsKey) => {
                            if (itemsKey === "") {
                                return null;
                            }
                            return (
                                // 아이템이 소환사의 협곡이고 inStore 속성이 없는 경우에만 출력
                                items[itemsKey].maps["11"] === true && !items[itemsKey].hasOwnProperty('inStore') && (
                                    (searchKey === "all" || searchKey === "") ? (
                                        <TabPanel key={items[itemsKey].key} value={items[itemsKey].name}
                                                  className="min-w-24">
                                            <div className="grid-rows-2">
                                                <img
                                                    src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${items[itemsKey].image.full}`}
                                                />
                                            </div>
                                        </TabPanel>
                                    ) : (
                                        itemsKey[0].toLowerCase() === searchKey && (
                                            <TabPanel key={items[itemsKey].key} value={items[itemsKey].name}
                                                      className="min-w-24">
                                                <div className="grid-rows-2">
                                                    <img
                                                        src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/item/${items[itemsKey].image.full}`}
                                                    />
                                                </div>
                                            </TabPanel>
                                        )
                                    )
                                )
                            );
                        })}
                    {serverData !== undefined &&
                        keyList.map((itemsKey) => {
                            const item = items[itemsKey];
                            if (!item) {
                                return null;
                            }
                            return (
                                // 아이템이 소환사의 협곡이고 inStore 속성이 없는 경우에만 출력
                                items[itemsKey].maps["11"] === true && !items[itemsKey].hasOwnProperty('inStore') && (
                                    (searchKey === "all" || searchKey === "") ? (
                                        <TabPanel key={item.key} value={item.name} className="min-w-24">
                                            <div className="mb-3 flex items-center justify-between">
                                                <Typography variant="h5" color="blue-gray"
                                                            className="font-medium text-3xl">
                                                    <strong>{item.name}</strong>
                                                    <small className="ml-3 text-lg font-bold">Tag : {item.tags}</small>
                                                </Typography>
                                                <Typography variant="paragraph" color="blue-gray" className="font-bold">
                                                    가격 : {item.gold.total}
                                                </Typography>
                                            </div>
                                            <div className="grid grid-cols-3">
                                                <Typography color="gray" className="font-bold col-start-1 mb-3">
                                                    {/*removeTags 함수를 적용하여 HTML 태그를 제거한 후에 이를 Typography 컴포넌트에 표시*/}
                                                    설명<br/>{removeTags(item.description)}
                                                </Typography>
                                                <Typography color="gray" className="font-bold col-start-1 mb-3">
                                                    {item.plaintext}
                                                </Typography>
                                            </div>
                                        </TabPanel>
                                    ) : (
                                        itemsKey[0].toLowerCase() === searchKey && <></>
                                    )
                                )
                            );
                        })}
                </TabsBody>
            </Tabs>
        </Card>
    );
};

export default LoLListPage;
