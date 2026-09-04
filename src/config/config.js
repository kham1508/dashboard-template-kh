export const config = {
    // Dashboard title
    "title": "Fantastic Stats",

    // Set order of page links and display text in navigation bar
    "navigation": [
  {
    "href": "index.html",
    "text": "Home"
  },
  {
    "href": "detail.html",
    "text": "Detail"
  },
  {
    "href": "charts.html",
    "text": "Charts"
  },
  {
    "href": "user-notes.html",
    "text": "User Notes"
  }
],
    
    "portal_url": "https://data.nisra.gov.uk/",

    // Departmental abbreviations. See departments.js for available options
    "department": "DfE",

    // Data portal tables to use in the dashboard.
    // Re-run "src/r/data.R" script after each update to list below
    "matrix": [
        "EXAMPLETABLE1",
        "EXAMPLETABLE2"
    ],
    
    "rateit": "link-to-rateit"
    
}
