#!/usr/bin/env python3
"""Single source of truth for the site footer.

Edit footer.template.html, then run:  python3 build-footer.py
The footer is stamped into every page (works on any static host, no JavaScript needed).
{{ROOT}} becomes "" on the home page, "../" inside /pages, and "/" on 404.html.
"""
import re, pathlib
base = pathlib.Path(__file__).parent
tpl = (base / "footer.template.html").read_text(encoding="utf-8").strip()
targets = {"index.html": "", "404.html": "/"}
for p in (base / "pages").glob("*.html"):
    targets["pages/" + p.name] = "../"
pat = re.compile(r'<footer class="footer">.*?</footer>', re.S)
for rel, root in sorted(targets.items()):
    f = base / rel
    s = f.read_text(encoding="utf-8")
    if not pat.search(s):
        print("SKIP (no footer):", rel); continue
    new = pat.sub(lambda m: tpl.replace("{{ROOT}}", root), s, count=1)
    f.write_text(new, encoding="utf-8")
    print("footer updated:", rel)
