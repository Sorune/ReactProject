import sqlalchemy as db
import pandas as pd

def sql_connect():
    return db.create_engine("mysql+pymysql://gtt:gtt@sorune.asuscomm.com:13917/gtt",encoding='utf-8')

engine = db.create_engine("mysql+pymysql://gtt:gtt@sorune.asuscomm.com:13917/gtt",pool_recycle=600)
connection = engine.connect()
metadata = db.MetaData()
member = db.Table('member', metadata)
print(member,metadata.tables)
df = pd.read_sql_query(db.text("SELECT * FROM member;"),connection)
print(df)
connection.close()