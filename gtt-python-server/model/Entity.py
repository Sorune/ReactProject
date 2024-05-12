# 필요한 라이브러리 import
from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

# 데이터베이스와 연결
engine = create_engine("mysql+pymysql://gtt:gtt@sorune.asuscomm.com:13917/gtt",pool_recycle=600)

# Base 클래스 생성
Base = declarative_base()

# SQLAlchemy 모델 정의
class ServerPlayer(Base):
    __tablename__ = 'server_player'
    id = Column(Integer, primary_key=True)
    nick_name = Column(String, nullable=False)
    name = Column(String)
    name_full = Column(String)
    country = Column(String)
    age = Column(Integer, nullable=False)
    birth_date = Column(DateTime)
    team = Column(String)  # 외래키가 아닌 경우

    roles = relationship("ServerPlayerRole")  # ServerPlayerRole과의 관계 설정
    fav_champs = relationship("ServerPlayerFavChamp")  # ServerPlayerFavChamp과의 관계 설정

class ServerTeam(Base):
    __tablename__ = 'server_team'
    id = Column(Integer, primary_key=True)
    team_name = Column(String, nullable=False)
    location = Column(String)
    image = Column(String)
    roster_photo = Column(String)

    players = relationship("ServerPlayer", secondary='server_team_server_players')  # ServerPlayer과의 관계 설정

class ServerTournament(Base):
    __tablename__ = 'server_tournament'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    region = Column(String)
    country = Column(String)
    league = Column(String)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime)

    matches = relationship("ServerMatch", secondary='server_tournament_server_matches')  # ServerMatch와의 관계 설정

class ServerMatch(Base):
    __tablename__ = 'server_match'
    match_id = Column(Integer, primary_key=True)
    match_date = Column(DateTime)
    team1score = Column(Integer, default=0)
    team2score = Column(Integer)
    server_team1_id = Column(Integer, ForeignKey('server_team.id'))  # 외래키 설정
    server_team2_id = Column(Integer, ForeignKey('server_team.id'))  # 외래키 설정

    team1 = relationship("ServerTeam", foreign_keys=[server_team1_id], backref="matches_as_team1")  # ServerTeam과의 관계 설정
    team2 = relationship("ServerTeam", foreign_keys=[server_team2_id], backref="matches_as_team2")  # ServerTeam과의 관계 설정

class ServerPlayerRole(Base):
    __tablename__ = 'server_player_roles'
    id = Column(Integer, primary_key=True)
    server_player_id = Column(Integer, ForeignKey('server_player.id'))
    roles = Column(Enum('Top', 'Mid', 'Bot', 'Support', 'Jungle'))  # enum 타입

class ServerPlayerFavChamp(Base):
    __tablename__ = 'server_player_fav_champs'
    id = Column(Integer, primary_key=True)
    server_player_id = Column(Integer, ForeignKey('server_player.id'))
    fav_champs = Column(String)

class ServerTeamServerPlayer(Base):
    __tablename__ = 'server_team_server_players'
    id = Column(Integer, primary_key=True)
    server_team_id = Column(Integer, ForeignKey('server_team.id'))
    server_player_id = Column(Integer, ForeignKey('server_player.id'))

class ServerTournamentServerMatch(Base):
    __tablename__ = 'server_tournament_server_matches'
    id = Column(Integer, primary_key=True)
    server_tournament_id = Column(Integer, ForeignKey('server_tournament.id'))
    server_matches_match_id = Column(Integer, ForeignKey('server_match.match_id'))

# 테이블 생성
Base.metadata.create_all(engine)
