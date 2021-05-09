
# PROJECT OVERVIEW
This project is about building a HTML webpage to display an article about UFO Sightings, supported by data from a Javascript file and beautified by CSS & Bootstrap. We have also built a filter option to easily sift through the hundreds of UFO Sighting Data displayed in table format.

# RESULTS

## All About Aesthetics
The website features an _eerie landing page_ to set the stage for an excited user's research into UFO Sightings. Just below the featured alien image is the Article section with Ttile and Paragraph taking up their own sub sections. The fonts for the article and the rest of the website have been carefully chosen to compliment the look and feel of the topic under discussion.

<img src='https://github.com/yazhcodes/UFOs/blob/main/Challenge/Resources/landing%20page.png'/>

## Table and Filters
As we scroll down we are presented with hundreds of UFO Sighting Data recorded across the US in a table format. It is impractical for a user to scroll through all of the data and make sense out of it. So we have provided some filter options to narrow down the search results. The filters work in an _Inclusive OR_ fashion. Meaning, if the date field is set to 1/3/2010 and the state field is set to 'ga', the search results will include all the UFO Sightings on 1/3/2010 followed by all the UFO Sightings in the state of Georgia. 

<img src='https://github.com/yazhcodes/UFOs/blob/main/Challenge/Resources/filter%20results.png'/>

# SUMMARY

Although it was a timetaking painful process building this application, it defenitely has drabacks and could use some upgrades to provide best user experience.

* **Drawback** - The filters are _text inputs_ so they cannot take more than one value. Also the one value entered by the user has to have a perfect match with the database, else the filter does not return any results.
* **Recommendations**
    * The filer options could be upgraded to _dropdown or checkbox_ input type, which will offer the user some options to choose the filters from.
    * A _Data Visualization element_ like a _bar graph_ with the **City/State for X-axis** and the **Number of Sightings for Y-axis** would be a cherry on top for this webpage.
