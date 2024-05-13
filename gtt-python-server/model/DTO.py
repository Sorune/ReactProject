from typing import List, Dict, Optional
from sqlalchemy import String,Integer,Float,Boolean,DateTime,Date
from sqlalchemy.orm import Mapped,mapped_column,relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# class Player:
#     def __init__(self, nick_name, name, name_full, country, age, birth_date, roles, fav_champs):
#         self.nick_name = nick_name
#         self.name = name
#         self.name_full = name_full
#         self.country = country
#         self.age = age
#         self.birth_date = birth_date
#         self.roles = roles
#         self.fav_champs = fav_champs
#
#     def __str__(self):
#         return f'{self.nick_name}/{self.name}/{self.name_full}/{self.country}/{self.age}/{self.birth_date}/{self.roles}/{self.fav_champs}'
#
class Player(Base):
    __tablename__ = 'server_player'

    id:Mapped[int] = mapped_column(primary_key=True)
    nick_name:Mapped[str] = mapped_column(String(255))
    name:Mapped[str] = mapped_column(String(255))
    name_full:Mapped[str] = mapped_column(String(255))
    country:Mapped[str] = mapped_column(String(255))
    age:Mapped[int]  =  mapped_column(Integer)
    birth_date:Mapped[str] = mapped_column(Date)
    roles:Mapped[List["roles"]] = relationship(back_populates="roles")
    fav_champs:Mapped[List["fav_champs"]] = relationship(back_populates="fav_champs")
    def __repr__(self) -> str:
        return f"Player(id={self.id!r}, nick_name={self.nick_name!r}, name={self.name!r}, name_full={self.name_full}, country={self.country!r}, age={self.age!r}, birth_date={self.birth_date!r}"

    def __str__(self):
        return f'{self.nick_name}/{self.name}/{self.name_full}/{self.country}/{self.age}/{self.birth_date}/{self.roles}/{self.fav_champs}'

class Team:
    def __init__(self, team_name, location, image, roster_photo, players):
        self.team_name = team_name
        self.location = location
        self.image = image
        self.roster_photo = roster_photo
        self.players = players

    def __str__(self):
        return f'{self.team_name}/{self.location}/{self.image}/{self.roster_photo}/{self.players}'

class Match:
    def __init__(self,team1,team2,team1_score,team2_score,match_date):
        self.team1 = team1
        self.team2 = team2
        self.team1_score = team1_score
        self.team2_score = team2_score
        self.match_date = match_date

    def __str__(self):
        return f'{self.team1}/{self.team2}/{self.team1_score}/{self.team2_score}/{self.match_date}'

class Tournament:
    def __init__(self, name, region, country, league,start_date,end_date,matches):
        self.name = name
        self.region = region
        self.country = country
        self.league = league
        self.start_date = start_date
        self.end_date = end_date
        self.matches = matches

    def __str__(self):
        return f'{self.name}/{self.region}/{self.country}/{self.league}/{self.start_date}/{self.end_date}/{self.matches}'