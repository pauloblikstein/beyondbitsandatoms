import urllib.request
import threading
import http.server
import socketserver
import time
import sys

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

class MyServer(threading.Thread):
    def run(self):
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            self.httpd = httpd
            httpd.serve_forever()

    def stop(self):
        self.httpd.shutdown()
        self.httpd.server_close()

server = MyServer()
server.start()

# Give server time to start
time.sleep(1)

try:
    req = urllib.request.urlopen(f"http://localhost:{PORT}/index.html")
    content = req.read().decode('utf-8')
    if "__edit_mode_available" in content and "/" in content:
        print("Success: Page loaded and contains expected content.")
    else:
        print("Error: Page did not contain expected content.")
        sys.exit(1)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
finally:
    server.stop()
    server.join()
