---
layout: generic
name: inhalte
category: Inhalt hinzufügen
hero_image: media/hero/hero_module.jpg
hero_title: Inhalt hinzufügen
department: inhaltstypen
section: Inhalt hinzufügen
color_scheme: orange
---


{% include static.html pagename="inhalt-intro" color_scheme="orange"%}

<div class="separator dotted separator-medium-line"> </div>

{% assign contenttypes = site.posts | where:"layout", "content" | where:"department", page.department%}
{% for item in contenttypes reversed %}

{% include page-teaser-img-left.html pagename=item.name color_scheme="gray"%}

<div class="separator dotted separator-medium-line"> </div>

{% endfor %}

