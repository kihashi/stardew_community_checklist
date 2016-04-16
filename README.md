# Stardew Community Checklist

A checklist for the Community Center Bundles in Stardew Valley

SCC is an application for keeping track of the community center bundles in Stardew Valley. When I started playing the 
game, I spent a decent amount of time searching the wiki trying to figure out what items I needed for the community
center and keeping track of which ones I had already turned in. I started working on this as a way to help myself out
playing the game. Of course, I finished the community center bundles before I finished the site, but I figured that
maybe someone else would get some use out of it.

A live version of the site is available at the following link:

---
# http://www.stardewcommunitychecklist.com/
---

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

## Item Information

An item block looks like this:

![Item Block Image](http://i.imgur.com/VbsR6Su.png)

In it, you can see the item name, where it can be obtained, which bundles it is in (and whether you have it checked off
for those bundles), which seasons it can be obtained in, and which skills can be used in getting it. Want to check it
off? Simply click the button for the appropriate bundle.

# Things to come

I have some planned features listed below, but I am open to feature requests.
If you think of something, please, list it below or
[open an issue](https://github.com/kihashi/stardew_community_checklist/issues/new).

* Season Completion Rate
* Skill Completion Rate
* Season Exclusive Toggle -- In the Season tab, shows items that can only be obtained in the selected season.
* (Maybe) Import data from Stardew Valley Save Files

# Development

SCC is a single page application, so all it needs is a web server. You can use any web server that you like, but I
prefer to use the built-in python web server, which is available on any platform with Python installed.

```
# Python 3.5
python -m http.server
```

Libraries and Frameworks used:

* [vuejs](http://vuejs.org/)
* [Bulma](http://bulma.io/)

Feature requests and pull requests are certainly welcome. I still need to clean up a lot of things in the repository
(For example, I changed naming styles part way through and the item "cards" need to be made into a vue component so they
aren't repeated), but the code should *mostly* be easy to figure out. I suspect there are optimizations to be done in
the searching and filtering logic as well.
