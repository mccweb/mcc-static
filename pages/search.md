---
title: Search
permalink: "/search/index.html"
tags: search
eleventyNavigation:
  key: Search
  order: "4"
---
## Search the website
**Note:** Searching with this form will load relevant results on this page, below the "Search the website" button. Enter at least three characters in the Search field to get started.

<form id="site-search">
  <label for="search">Search</label>
  <input type="text" id="search" name="search" required aria-describedby="required-notice">
  <span id="required-notice"></span>
  <button type="submit" id="search-btn">Search the website</button>
</form>

<p aria-live="polite" role="status" class="visually-hidden" id="status"></p>
<ul id="search-results" aria-label="Site search results"></ul>

## Search with Google
**Note:** Searching with this form will redirect to Google and show results for the search term entered. You can use this search option even if JavaScript is turned off.
<form action="https://www.google.com/search" method="get" class="search">
  <input type="hidden" name="q" id="q" value="site:https://accessibility.ct.edu">
  <label for="search-str">Search for Google results</label>
  <input type="text" name="q" id="search-str">
  <button type="submit">Search with Google</button>
</form>