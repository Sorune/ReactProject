import ListComponent from "../../components/player/PlayerListComponent"

const PlayerListPage = () => {

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Player List Page
            </div>
            <ListComponent/>
        </div>
    )
}

export default PlayerListPage;