# Stardew Community Checklist

> A Checklist for the Community Center Bundles in Stardew Valley

# Features

* View items by bundle, alphabetically, by season, or by the skill involved in getting the item.
* View Bundle and Room completion rates.
* Filter out completed items and bundles.
* Responsive Design -- Use the checklist on your computer or phone.
* Spoiler Free Mode -- Hide the text, season, and skill information for items as well as bundle rewards.
* Item Search -- Want to see which items you need before spring? Search for it in the search page.
* Save your progress -- Whenever you make a change to the checklist, it is saved to your browser's local storage.
* Import and Export -- Want to take your data to another computer? Export the data string and import it at another
  computer.
  
Have a feature request? Create a Github issue or make a post at [the subreddit][1].

[1]: https://www.reddit.com/r/stardewchecklist/

## Item Information

An item block looks like this:

![Item Block Image](https://i.imgur.com/p0zYYKV.png)

In it, you can see the item name, where it can be obtained, which bundles it is in (and whether you have it checked off
for those bundles), which seasons it can be obtained in, and which skills can be used in getting it. Want to check it
off? Simply click the button for the appropriate bundle.

# Things to come

I have some planned features listed below, but I am open to feature requests.
If you think of something, please, [make a post on the subreddit](https://www.reddit.com/r/stardewchecklist/) or
[open an issue](https://github.com/kihashi/stardew_community_checklist/issues/new).

* Season Completion Rate
* Skill Completion Rate
* Inventory -- See items that you have, but haven't turned in yet
* Achievement progress
* Season Exclusive Toggle -- In the Season tab, shows items that can only be obtained in the selected season.
* (Maybe) Import data from Stardew Valley Save Files

# Contributing

SCC is made using 

* [Vuejs](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Bulma](https://bulma.io/)

To get started, you'll need Yarn/NPM installed. Then clone the repository and run

```
// Install dependencies
yarn install
// Startup a dev server on localhost:8080
yarn dev
```

The pages and componenets are in `src/components` and the game data is in `src/assets/game_data`.

If you would like to get started and don't know how, send me a message and I will do my best to help.
