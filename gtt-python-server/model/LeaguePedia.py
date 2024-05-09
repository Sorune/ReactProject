from mwrogue.esports_client import EsportsClient
import datetime as dt
import json
import time
date = "2020-01-25"
date = dt.datetime.strptime(date, "%Y-%m-%d").date()

site = EsportsClient("lol")
# response = site.cargo_client.query(
#     tables="ScoreboardGames=SG, ScoreboardPlayers=SP, Tournaments=T",
#     join_on="SG.GameId=SP.GameId, SG.OverviewPage=T.OverviewPage",
#     fields="T.Name=Tournament, SG.DateTime_UTC, SG.Team1, SG.Team2, SG.Winner, SG.Patch, SP.Link, SP.Team, SP.Champion, SP.SummonerSpells, SP.KeystoneMastery, SP.KeystoneRune, SP.Role, SP.GameId, SP.Side",
#     where="SG.DateTime_UTC >= '" + str(date) + " 00:00:00' AND SG.DateTime_UTC <= '" + str(date+dt.timedelta(1)) + " 00:00:00'"
# )
# print(response)
# page_to_query = "Data:2023 Mid-Season Invitational"
# response = site.cargo_client.query(
#     limit=3,
#     tables="MatchScheduleGame=MSG,MatchSchedule=MS",
#     fields="MSG.OverviewPage, MSG.RiotPlatformGameId",
#     where='MSG._pageName="%s" AND MSG.RiotPlatformGameId IS NOT NULL' % page_to_query,
#     join_on="MSG.MatchId=MS.MatchId",
#     order_by="MS.N_Page, MS.N_MatchInPage, MSG.N_GameInMatch"
# )
# print(response)
teamList = []

results = site.cargo_client.query(
    tables="Teams=T",
    fields="T.Name,T.Image,T.Location,T.RosterPhoto",
    where="T.Region='Korea'"
)

for result in results:
    teams = {"Name":"",
    "Image":"",
    "Location":"",
    "RosterPhoto":"",
    "players":[]}
    teams["Name"] = result["Name"]
    teams["Image"] = result["Image"]
    teams["Location"] = result["Location"]
    teams["RosterPhoto"] = result["RosterPhoto"]
    teams["players"] = site.cargo_client.query(
                tables="Players=P",
                fields="P.ID,P.Name,P.NameFull,P.Country,P.Age,P.Birthdate,P.Team,P.Team2,P.Role,P.FavChamps",
                where='P.TeamLast="%s" AND P.Team IS NOT NULL' %(result["Name"])
            )
    teamList.append(teams)
    # for key,value in result.items():
    #     #print(key,value)
    #     if key=="Name":
    #         #print(result["Name"])
    #         players = site.cargo_client.query(
    #             tables="Players=P",
    #             fields="P.ID,P.Name,P.NameFull,P.Country,P.Age,P.Birthdate,P.Team,P.Team2,P.Role,P.FavChamps",
    #             where='P.TeamLast="%s"' %result["Name"]
    #         )
    #         #for player in players:
                
    #             #for k,v in player.items():
    #                 #print(k,v)
    #         time.sleep(50)
for team in filter(lambda x:x["players"]!=[],teamList):
    print(team)

Leagues = site.cargo_client.query(
    tables="Tournaments=T",
    fields="T.Name,T.DateStart,T.Date,T.League,T.Region,T.Prizepool,T.Country,T.EventType",
    where="T.Region='Korea' AND T.Date IS NOT NULL AND T.Region IS NOT NULL",
    order_by="T.Date ASC"
)
for league in Leagues:
    print(league)