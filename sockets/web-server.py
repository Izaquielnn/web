import socket
import os

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = 'localhost'
port = 5000

server.bind((host, port))

server.listen(1)

print 'Server on por', port

while True:
    conn, addr = server.accept()
    req = conn.recv(1024).decode('utf-8')
    string_list = req.split(' ')

    method = string_list[0]
    req_file = string_list[1]

    print addr, method, req_file

    header = ''
    response = ''
    if(method == 'GET'):
        try:
            path = os.getcwd() + req_file
            file = open(path)
            res = file.read()
            file.close()

            header = 'HTTP/1.1 200 OK\n'
            response = res
        except:
            header = 'HTTP/1.1 404 Not Found\n'
            response = '<html><body><h3>Error 404: File not found</h3></html>'

    elif (method in ['POST', 'DELETE', 'PUT', 'HEAD', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH']):
        header = 'HTTP/1.1 405 Method Not Allowed\n'
        response = '<html><body><h3>Error 405: Method Not Allowed</h3></html>'

    else:
        header = 'HTTP/1.1 400 Bad Request\n'
        response = '<html><body><h3>Error 400: Bad Request</h3></html>'

    header += 'X-projws: 117111446\n\n'
    
    final_response = header.encode('utf-8')
    final_response += response.encode('utf-8')

    conn.send(final_response)
    conn.close()

server.close()