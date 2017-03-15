---
layout: generic
name: inhalte
category: konzepte
hero_image: /media/hero/hero_inhalt.png
hero_title: Inhaltsseiten für den neuen UniBW Webauftritt
department: inhaltsseite
section: Konzepte
color_scheme: orange
---

{% include static.html pagename="inhaltsseiten-intro" color_scheme="orange"%}

<div class="separator dotted separator-medium-line"> </div>

{% assign ipages = site.posts | where:"layout", "inhaltsseite" | where:"department", page.department%}
{% for item in ipages reversed %}

{% include page-teaser-img-left.html pagename=item.name color_scheme="gray"%}

<div class="separator dotted separator-medium-line"> </div>

{% endfor %}
