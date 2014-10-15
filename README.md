# Reddit-Participation

## What is it?
Reddit-Participation is a chrome extension that serves one purpose: to remove all `np.reddit.com` links from Reddit.

## Why?
np.reddit.com links were created to help prevent the participation of users in one sub from interacting/participating with other subs that get linked. (Such as the links in `/r/bestof`)

This is meant to be a way around that.

## What EXACTLY does it do?
This extension will convert all `np.reddit.com` links on Reddit into `www.reddit.com`<sup>1</sup> links.

## How do I use it?
For now, this is just the source-code being released, but soon it will be published. If you know how to load unpacked extension directories into your installation of chrome, have at it. But, for those of you less tech saavy, I will soon publish on the Chrome Webstore where you can just download it and get going.

## How do I change my desired prefix?
If you desire something other than www for your prefixes, then navigate to any reddit.com page, right-click the black reddit icon in your omnibox, and select options. 

**WARNING: Any changes made to the text-box on the options page is automatically saved into the extensions local-storage, so if your links suddenly aren't working, make sure you didn't empty or modify the option to a reddit subdomain that doesn't exist**

---

## Planned Features that aren't in yet
* Convert to using Chrome's `storage` api for the options. This will allow the extension to sync settings between devices
* Fix the left-click popup of the extension's icon to display how many links have been changed in the session

---

<sup>1 - The desired prefix (e.g. www) is customizable</sup>
