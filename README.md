# UFOs

## Overview of Project
The client, Dana, is a data journalist who wishes to write a story covering her hometown, McMinnville, OR, from the angle of its famous UFO sightings.  She has provided the source data in the form of a .JS file, and wishes to allow online users to interact with the dataset via filters on a user-focused page designed in HTML.  

Primary development focused on Javascript coding and site layout.  Once the initial filter (date) was in place and successfully tested, add'l filters were added for city, state, country, and shape.

## Results

There are four primary HTML components to this webpage:

### 1) *Page header ("UFO Sightings") & title*
_The Jumbotron title, while nonfunctional for the user, is the boldest branding of this page.  The page header in the upper left is marginally functional insofar as it reloads the table below as needed (a function also performed by clearing the filters and pressing "Enter" on the keyboard).  While Bootstrap (primarily) allowed formatting that's preferable to raw HTML, the banner image allows an opportunity for add'l functionality if the client desires (e.g., clickable link to Google "UFO" news search results)._

  ![1_page_header.png](https://github.com/crkaide/UFOs/blob/main/README_md_files/1_page_header.png?raw=true)

### 2) *Article*
_Title and body are nonfunctional for the user.  This section is manually updateable, but may be a place for richer technical development (e.g., hyperlinks, current content from elsewhere on the web)._

  ![2_article.png](https://github.com/crkaide/UFOs/blob/main/README_md_files/2_article.png?raw=true)

### 3) *Filters*
_This is the user's primary point of interaction with this page.  Five filters are available and interact with the table to the right:  date, city, state, country, and shape.  All filters are open text-entry and results are strictly sensitive to case and syntax of the entry.  The filter button included in the original design has been removed, and the filters are responsive to the user pressing "Enter" on the keyboard._

  ![3_filters.png](https://github.com/crkaide/UFOs/blob/main/README_md_files/3_filters.png?raw=true)

### 4) *Table*
_This is the user's secondary point of interaction with this page, and is responsive to the filter at left.  Lack of formatting, particularly as it interacts with the filters' high sensitivity, is the primary drawback of this table design.  The original data is least uniformly formatted in the "Duration" and "Comments" columns, and no proper name formatting is followed in the city, state, or country columns.  Date syntax is unfriendly (m-d-yyyy)._

  ![4_table.png](https://github.com/crkaide/UFOs/blob/main/README_md_files/4_table.png?raw=true)

## Summary
1. There are two primary drawbacks of this new design: sensitivity to formatting, and the ability to apply only a single filter at a time.  While default entries are meant to instruct users on the proper formatting for a successful search, the required formatting is not intuitive and is very strict (e.g., "seattle" will return results but "Seattle" will not).  In addition, only one criterion can be used to filter; combinations are not allowed (e.g. the user cannot search for both "seattle" and "triangle").
2. Coding should be developed so that users can filter by multiple criteria.  Regex should be adjusted so that letter case and date syntax requirements are loosened.  In the coming months, a UFO/UAP report is due to be delivered to the United States congress, and it's recommended that the server hosting this page brace for an influx of visits.  The data is very old (circa 2010); current data is available from MUFON.  Regular API calls for new data from that source may be advisable here, if the MUFON site allows.  As things stand, the "Comments" column is at once the most interesting and the least user-friendly.  Making the text searchable by string is a potentially easily implemented improvement here.
