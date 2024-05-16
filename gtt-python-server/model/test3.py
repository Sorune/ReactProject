from mwrogue.esports_client import EsportsClient

site = EsportsClient("lol")

Leagues = site.cargo_client.query(
    tables="Tournaments=T, TournamentResults=TS",
    join_on="T.OverviewPage=TS.OverviewPage",
    fields="T.OverviewPage=LeagueName,T.Name,T.DateStart,T.Date,T.League,T.Region,T.Prizepool,T.Country,T.EventType,T.TournamentLevel, TS.Team=Challenger",
    where="T.Region='Korea' AND T.Date IS NOT NULL AND T.Region IS NOT NULL AND TS.Place=1",
    order_by="T.Date ASC"
)
for league in Leagues:
    print(league)