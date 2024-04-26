import {Avatar, Card, Tab, Tabs, TabsHeader, Typography} from "@material-tailwind/react";
import axios from "axios";
import {useEffect, useState} from "react";

export const getChampions= async()=> {
    const res = await axios.get(`http://ddragon.leagueoflegends.com/cdn/14.8.1/data/ko_KR/champion.json`)

    return res.data
}
const initState = {
    data:null,
    format:'',
    type:'',
    version:'',
}

const LoLListPage = ()=>{
    const [serverData, setServerData] = useState()
    const [champions, setChampions] = useState()
    const [keys,setKeys]=useState("")
    const [refresh, setRefresh] =useState(false)
    useEffect(() => {
        getChampions().then(data => {
            console.log(data)
            setServerData(data)
            setChampions(data.data)
        })
    }, [refresh]);

    var keyString = ""
    for (let key in champions){
        console.log(key)
        keyString+=key+"/"
    }
    const keyList = keyString.split("/")
    console.log(keyString,keyList)
    console.log(serverData,champions)
    console.log(keys)
    return(
        <Card className="grid">
            <Tabs value="all" className="start-1 end-12 overflow-x-scroll">
                <TabsHeader>
                    {serverData!==undefined?
                        keyList.map((championsKey)=>{
                        console.log(championsKey,champions[championsKey])
                        if (championsKey === "") {
                            return;
                        }
                            return(
                                <Tab key={champions[championsKey].key} value={champions[championsKey].name} className="min-w-24">
                                    <div className="grid-rows-2">
                                        <Avatar src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${champions[championsKey].image.full}`} alt={`${champions[championsKey].name}`} size="md"/>
                                        <Typography variant={"small"}>{champions[championsKey].name}</Typography>
                                    </div>
                                </Tab>)
                        }) : <></>}
                </TabsHeader>
            </Tabs>
        </Card>
    )
}

export default LoLListPage