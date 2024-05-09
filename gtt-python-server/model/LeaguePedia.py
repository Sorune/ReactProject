from mwrogue.esports_client import EsportsClient

site = EsportsClient("lol")
page_to_query = "Locaiton:Korea"
response = site.cargo_client.query()
print(response)