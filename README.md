# Stardew Community Checklist

> A Checklist for the Community Center Bundles in Stardew Valley

## Build Setup

NOTE: I am currently working on re-writing the app. The demo site (which is still missing functionality) is available and the code is on the webpack branch.

* Demo Site: https://kihashi.github.io/
* Webpack Branch: https://github.com/kihashi/stardew_community_checklist/tree/webpack

A live version of the site is available at the following link:

Note: The layout makes pretty big use of [Flexbox](https://www.w3.org/TR/css-flexbox-1/), which is not quite finalized.
I've tested the site in Chrome, Firefox, and Safari. IE seems to have
[some problems with text layout](http://i.imgur.com/smeMuAi.png), though.

# Features

* View items by bundle, alphabetically, by season, or by the skill involved in getting the item.
* View Bundle and Room completion rates.
* Filter out completed items and bundles.
* Spoiler Free Mode -- Hide the text, season, and skill information for items as well as bundle rewards.
* Item Search -- Want to see if an item is in a bundle? Search for it in the Alphabetical list!
* Save your progress -- Whenever you make a change to the checklist, it is saved to your browser's local storage.
* Import and Export -- Want to take your data to another computer? Export the data string and import it at another
  computer.
  
Have a feature request? Create a Github issue or make a post at [the subreddit][1].

[1]: https://www.reddit.com/r/stardewchecklist/

## Item Information

An item block looks like this:

![Item Block Image](http://i.imgur.com/VbsR6Su.png)

In it, you can see the item name, where it can be obtained, which bundles it is in (and whether you have it checked off
for those bundles), which seasons it can be obtained in, and which skills can be used in getting it. Want to check it
off? Simply click the button for the appropriate bundle.

# Things to come

I have some planned features listed below, but I am open to feature requests.
If you think of something, please, [make a post on the subreddit](https://www.reddit.com/r/stardewchecklist/) or
[open an issue](https://github.com/kihashi/stardew_community_checklist/issues/new).

* Season Completion Rate
* Skill Completion Rate
* Season Exclusive Toggle -- In the Season tab, shows items that can only be obtained in the selected season.
* (Maybe) Import data from Stardew Valley Save Files

# Development

SCC is a single page application, so all it needs is a web server. You can use any web server that you like, but I
prefer to use the built-in python web server, which is available on any platform with Python installed.
