## Happy YEG

Welcome to my Happy YEG repository. I will explain how everything all works from what the site does, and how it obtains its information.

### How the Site is Built

The site is build with following tech stack

- NextJS
- Tailwind CSS
- Typscript
- Firesotre Datastore
- Firebase Hosting
- n8n AI Agents w/ Google Gemini

### The Purpose of the Site

This site's main purpose is to help Edmontonians save money by finding the best happy hour specials around the city. With the cost of going out increasingly getting higher, I believe Edmontonians shouldn't have to sacrifice good times to save more, when they have oppurtunities to save by going to the right places at the right times. We all work hard to make sure we meet our financial priorities. A good time to rest, relax, and unwind is good for the mind, and I hope this site helps people do just that.

### The Site

The site is straight forward. The main page start off with a little intro. Then below is a location selector which gives you options to filter the list based on location. You can choose South, or Downtown for example and only view restaurants and pubs of that specific region, or you can view them all.

South

Downtown

ALL

When selecting one of the restaurants, you will be taken to a page where you will all of the restaurant details, and their specials. You will see their name, address, business hours, happy hour times, and of course the food and drink specials.

There is also a seach bar at the top if you would like to search for a specific restaurant in the city.

### How the Site Gets its Data

So the list is populated in two ways, both by using n8n and both with the assistance of AI Agents.

The first workflow is a fully automated workflow that runs on a schedule, once a day. This is where an AI Agent, powered by Google Gemini, uses a sub-workflow that I have setup with other agents where its job is simply search the web, based on the query it receives. In this case, the parent agent asks for it to search for restaurants across the city of Edmonton with happy hour specials, and to pull the information of the business such as its nane, location, business hours, and specials. It then takes the information it receives, and parses the data so that it can go into the fields node, where the Firebase node is able to read it properly, then add it to Firestore.

The Google Sheet node is to keep track of which restaurants have been added. The agent uses it to reference it so that it doesn't repeat a location, and it's added at the end to update that list.

The second workflow was setup for situations where I find a restaurant myself, and then I add it to the list. First I used a form submission node where I enter the details, n8n would format it, and sendd it to Firestore. Now, although this was still faster than manually entering the data into Firestore, it was still cumbersome. So, I remade it using an AI agent as well. This is where I add a Google Doc, copy and paste the information from the source. Using the Google Doc's URL, the flow extracts that data, sends it to the agent where it then formats the data so that it can be organized into the proper fields, then just the like the last flow, Firebase reads it, and sends it to Firestore, updating the same Google Sheet.

No matter how messy and unorganized the data is, even if it's all scrambled, the Agent will know what to grab, how to organize it, and format it properly in its output.

### Check out the site

The site is now public! Check it out here: [Happy YEG](https://happyyeg.com)

And follow me on my socials.

[LinkedIn](https://www.linkedin.com/in/david-vasquez-yeg/) | [X](https://x.com/Dave53v) | [Instagram](https://www.instagram.com/david.vasq1/) | [Personal-Website](https://dvasquez.net)
