from mwrogue.esports_client import EsportsClient
import datetime as dt
from DTO import Match,Team,Player,Tournament

site = EsportsClient("lol")
teams=[]

results = site.cargo_client.query(
    tables="Teams=T",
    fields="T.Name=TeamName,T.Image,T.Location,T.RosterPhoto",
    where="T.Region='Korea'"
)

for result in results:
    response  = site.cargo_client.query(
                tables="Players=P",
                fields="P.ID=NickName,P.Name,P.NameFull,P.Country,P.Age,P.Birthdate,P.Team,P.Role,P.FavChamps",
                where='P.TeamLast="%s" AND P.Team IS NOT NULL AND (P.Role="Top" OR P.Role="Mid" OR P.Role="Bot" OR P.Role="Jungle" OR P.Role="Support")' %(result["TeamName"])
            #  AND P.Team IS NOT NULL AND (P.Role="Top" OR P.Role="Mid" OR P.Role="Bot" OR P.Role="Jungle" OR P.Role="Support")
            )
    players=[]
    for player in response:
        players.append(Player(player.get("NickName"),player.get("Name"),player.get("NameFull"),player.get("Country"),player.get("Age"),player.get("Birthdate"),player.get("Role"),player.get("FavChamps")))
    teams.append(Team(result["TeamName"],result["Image"],result["Location"],result["RosterPhoto"],players)) if players!=[] else None
for team in teams:
    print(team)
    for player in team.players:
        print(player)
Leagues = site.cargo_client.query(
    tables="Tournaments=T",
    fields="T.OverviewPage,T.Name,T.DateStart,T.Date,T.League,T.Region,T.Prizepool,T.Country,T.EventType",
    where="T.Region='Korea' AND T.Date IS NOT NULL AND T.Region IS NOT NULL",
    order_by="T.Date ASC"
)
for league in Leagues:
    print(league)

date = "2024-01-25"
date = dt.datetime.strptime(date, "%Y-%m-%d").date()
response = site.cargo_client.query(
    tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
    join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
    fields="T.Name=Tournament, SG.DateTime_UTC, SG.Team1, SG.Team2, SG.Winner, SG.Patch, SP.Link, SP.Team, SP.Champion, SP.SummonerSpells, SP.KeystoneMastery, SP.KeystoneRune, SP.Role, SP.GameId, SP.Side",
    where="SG.DateTime_UTC >= '" + str(date) + " 00:00:00' AND SG.DateTime_UTC <= '" + str(date+dt.timedelta(1)) + " 00:00:00' AND T.Region='Korea' AND T.Date IS NOT NULL",
)
for item in response:
    print(item)
page_to_query = "Data:LCK CL/2024 Season/Spring Playoffs"
response = site.cargo_client.query(
    tables="MatchScheduleGame=MSG,MatchSchedule=MS",
    fields="MSG.OverviewPage, MSG.RiotPlatformGameId",
    where='MSG._pageName="%s" AND MSG.RiotPlatformGameId IS NOT NULL' % page_to_query,
    join_on="MSG.MatchId=MS.MatchId",
    order_by="MS.N_Page, MS.N_MatchInPage, MSG.N_GameInMatch"
)
for item in response:
    print(item)

page_to_query = "Data:LCK CL/2024 Season/Spring Playoffs"
response = site.cargo_client.query(
    tables="TournamentRosters=TR",
    fields="TR.Team,TR.OverviewPage=League,TR.RosterLinks,TR.Roles",
    where="TR.OverviewPage='LCK/2024 Season/Spring Season'",
)
for item in response:
    print(item)

response = site.cargo_client.query(
    tables="MatchSchedule=MS",
    fields="MS.OverviewPage=League,MS.Team1,MS.Team2,MS.Team1Score,MS.Team2Score,MS.MatchDay,MS.DateTime_UTC,MS.N_MatchInPage,MS.ShownRound",
    where="MS.OverviewPage='LCK/2024 Season/Spring Season'",
    order_by="MS.DateTime_UTC DESC"
)
for item in response:
    print(item)
