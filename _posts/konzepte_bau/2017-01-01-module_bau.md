---
title: Module in BAU
layout: generic
name: module_bau
category: konzepte
hero_image: media/hero/hero_module.jpg
hero_title: Verwendete Module im Bereich BAU
department: modul_bau
section: Module BAU
color_scheme: orange
breadcrumbs:
- title: Home
  url: bau.html
---

{% include static.html pagename="module_bau-intro" color_scheme="orange"%}

<div class="separator dotted separator-medium-line"> </div>

{% assign modules = site.posts | where:"layout", "modul" | where:"department", page.department%}
{% for item in modules reversed %}
{% include module-details.html pagename=item.name color_scheme="gray"%}

<div class="separator dotted separator-medium-line"> </div>

{% endfor %}

