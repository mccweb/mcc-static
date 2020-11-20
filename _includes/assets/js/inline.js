if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

function ResponsiveCellHeaders(elmID) {
  try {
    var THarray = [];
    var table = document.getElementById(elmID);
    var ths = table.getElementsByTagName("th");
    for (var i = 0; i < ths.length; i++) {
      var headingText = ths[i].innerHTML;
      THarray.push(headingText);
    }
    var styleElm = document.createElement("style"),
      styleSheet;
    document.head.appendChild(styleElm);
    styleSheet = styleElm.sheet;
    for (var i = 0; i < THarray.length; i++) {
      styleSheet.insertRule(
        "#" +
          elmID +
          " td:nth-child(" +
          (i + 1) +
          ')::before {content:"' +
          THarray[i] +
          ': ";}',
        styleSheet.cssRules.length
      );
    }
  } catch (e) {
    console.log("ResponsiveCellHeaders(): " + e);
  }
}
ResponsiveCellHeaders("council");
ResponsiveCellHeaders("sec1");
ResponsiveCellHeaders("sec2");
ResponsiveCellHeaders("sec3");

// https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html
// https://adrianroselli.com/2018/05/functions-to-add-aria-to-tables-and-lists.html
function AddTableARIA() {
  try {
    var allTables = document.querySelectorAll('table');
    for (var i = 0; i < allTables.length; i++) {
      allTables[i].setAttribute('role','table');
    }
    var allRowGroups = document.querySelectorAll('thead, tbody, tfoot');
    for (var i = 0; i < allRowGroups.length; i++) {
      allRowGroups[i].setAttribute('role','rowgroup');
    }
    var allRows = document.querySelectorAll('tr');
    for (var i = 0; i < allRows.length; i++) {
      allRows[i].setAttribute('role','row');
    }
    var allCells = document.querySelectorAll('td');
    for (var i = 0; i < allCells.length; i++) {
      allCells[i].setAttribute('role','cell');
    }
    var allHeaders = document.querySelectorAll('th');
    for (var i = 0; i < allHeaders.length; i++) {
      allHeaders[i].setAttribute('role','columnheader');
    }
    // this accounts for scoped row headers
    var allRowHeaders = document.querySelectorAll('th[scope=row]');
    for (var i = 0; i < allRowHeaders.length; i++) {
      allRowHeaders[i].setAttribute('role','rowheader');
    }
    // caption role not needed as it is not a real role and
    // browsers do not dump their own role with display block
  } catch (e) {
    console.log("AddTableARIA(): " + e);
  }
}

AddTableARIA();

function lazyLoadImages() {
  let images = Array.from(document.getElementsByTagName('img'))
  images.forEach((image) => {
    image.setAttribute('loading', 'lazy')
  })
}

lazyLoadImages();

// Site search

var searchForm = document.querySelector('#site-search');
searchForm.addEventListener('submit', function(event) {

  event.preventDefault();

  var searchInput = document.getElementById('search');
  var requiredNotice = document.getElementById('required-notice');
  var searchResults = document.getElementById('search-results');
  var status = document.getElementById('status');
  searchResults.innerHTML = "";

  // Fetch JSON with title, URL and content from every page
  fetch('/search.json')
    .then(response => response.json())
    .then(data => {
      var searchIndex = data.search;
      var results = [];
      var searchString = searchInput.value;

      // Match search query with page content
      for (var item in searchIndex) {
        var found = searchIndex[item].text.toLowerCase().indexOf(searchString.toLowerCase());
        if (found !== -1 && searchString.length >= 3) {
          results.push(searchIndex[item]);
        }
      }

      // If any matches are found, add them to the list and display it
      if (results.length > 0) {
        results.forEach(result => {
          searchResults.innerHTML += `
            <li><a href="${result.url}">${result.title}</a></li>
          `;

          // Make results region focusable
          searchResults.setAttribute('tabindex', '0');
        });
      } else {
        searchResults.innerHTML += `
          <li>No results</li>
        `;

        // Make sure empty results region cannot be focused
        searchResults.removeAttribute('tabindex');
      }

      // Announce number of results found after 1 second
      setTimeout(function() {
        status.innerHTML = `${results.length} results loaded below`;
      }, 1000);

    })
    .catch(error => console.error('Error:', error));

  // Error checking
  if (searchInput.value === "") {
    searchInput.focus();
    requiredNotice.innerHTML = "Please enter a search term";
    searchResults.innerHTML = "";
  } else if (searchInput.value.length < 3) {
    searchInput.focus();
    requiredNotice.innerHTML = "Please enter at least three characters";
  } else {
    requiredNotice.innerHTML = "";
  }

}, false);