from mwrogue.esports_client import EsportsClient

site = EsportsClient("lol")

Leagues = site.cargo_client.query(
    tables="Tournaments=T",
    fields="T.OverviewPage=LeagueName,T.Name,T.DateStart,T.Date,T.League,T.Region,T.Prizepool,T.Country,T.EventType,T.TournamentLevel",
    where="T.Region='Korea' AND T.Date IS NOT NULL AND T.Region IS NOT NULL",
    order_by="T.Date ASC"
)
for league in Leagues:
    print(league)