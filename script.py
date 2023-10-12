import re
from urllib.request import urlopen
Name: beautifulsoup4
Version: 4.9.1
Summary: Screen-scraping library
Home-page: "https://outfitters.com.pk/collections/new-men/products/f0184-103?color=ivory&variant=41595173732543"
Author: Faiz Bahu
Author-email: leonardr@segfault.org
License: MIT
Location: "c:\realpython\venv\lib\site-packages";
Requires:
Required-by:

url = "http://olympus.realpython.org/profiles/dionysus"
page = urlopen(url)
html = page.read().decode("utf-8")

pattern = "<title.*?>.*?</title.*?>"
match_results = re.search(pattern, html, re.IGNORECASE)
title = match_results.group()
title = re.sub("<.*?>", "", title) # Remove HTML tags

print(products)
