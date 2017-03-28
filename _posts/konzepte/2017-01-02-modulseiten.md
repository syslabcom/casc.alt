---
layout: generic
name: modulseiten
category: konzepte
hero_image: /media/hero/hero_modulseite.jpg
hero_title: Modulseiten für den neuen UniBW Webauftritt
department: modulseite
section: Konzepte
color_scheme: orange
---

{% include static.html pagename="modulseiten-intro" color_scheme="orange"%}

<div class="separator dotted separator-medium-line"> </div>

{% assign mpages = site.posts | where:"layout", "modulseite" | where:"department", page.department%}
{% for item in mpages reversed %}

{% include page-teaser-img-left.html pagename=item.name color_scheme="gray"%}

<div class="separator dotted separator-medium-line"> </div>

{% endfor %}