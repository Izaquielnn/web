import socket
from thread import *

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = ''
port = 81234

server.bind((host, port))

server.listen(100)
clientes = []

def novoCliente(conn, addr):
    while True:
        msg = conn.recv(1024)
        if (msg == 'bye'): 
            remove(conn)
            break
        msgFinal = str(addr) + ": " + msg
        sendAll(msgFinal) 

def sendAll(msg):
    for cliente in clientes:
        cliente.send(msg)

def remove(conn):
    if( conn in clientes):
            clientes.remove(conn)

while True:
    conn, addr = server.accept()
    clientes.append(conn)
    print str(addr), "conectado"
    start_new_thread(novoCliente, (conn, addr))
conn.close()
server.close()