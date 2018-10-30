import socket
from thread import *

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = ''
port = 81234

server.connect((host, port))

def readMsg():
    while True:
        print server.recv(1024)

start_new_thread(readMsg, ())


while True:
    msg = raw_input()
    server.send(msg)
    if(msg == 'bye') : break

server.close()