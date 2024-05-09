import pymysql

def sql_connect():
    conn = pymysql.connect(host='sorune.asuscomm.com',port=13917,user="gtt",password="gtt",db="gtt",charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor,use_unicode=True)
    return conn

