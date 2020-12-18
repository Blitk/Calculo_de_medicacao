import webview

def load_css(window):
	with open("/home/raphaelrody/Documentos/Python/DesktopApplication/css/Style.css") as arq:
		css = arq.read()
		window.load_css(css)



home = webview.create_window("DesktopApplication", "/home/raphaelrody/Documentos/Python/DesktopApplication/html/index.html")

webview.start(load_css, home, debug=True)
