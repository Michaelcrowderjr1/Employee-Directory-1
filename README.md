# Employee Directory

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
![License](https://img.shields.io/static/v1?label=Language&message=JavaScript&color=brightgreen)
![License](https://img.shields.io/static/v1?label=Language&message=CSS.js&color=orange) 
![License](https://img.shields.io/static/v1?label=Language&message=Node.js&color=green)


![License](https://img.shields.io/static/v1?label=Language&message=React&color=blueviolet)
![License](https://img.shields.io/static/v1?label=Language&message=Mongoose&color=blue)
![License](https://img.shields.io/static/v1?label=Language&message=Express.js&color=yellowgreen)

  ---
  
<p>&nbsp;<p>

## Description

This project is an intuitive budgeting tool that allows a user to keep track of their deposits and expenses. These entries are stored in a table format with their provided description and amount, and visualized over time in a date stamped line chart as well. This is a progressive web application that can be used both online, and offline if necessary. In the event that a connection is lost during use, transaction entries will be stored temporarily in `IndexedDB` "pending" storage, and then permanently added to the `MongoDB` database once a connection can be established again. A `Service Worker` file provides a cached version of the website when using offline so the user interface can continue to be utilized during an outage.

This project had the following criteria:

Utilizing this app, the user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.


<p>&nbsp;<p>

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)

<p>&nbsp;<p>

## Installation

To install dependencies when executing on localhost, run the following:

```
npm i
```

### Built with
* Javascript
* [MorganDB](https://mongodb.com/)
* [npm](https://nodejs.org/en/)
* [npm express](https://www.npmjs.com/package/express)
* [npm mongoose](https://www.npmjs.com/package/mongoose)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Heroku](www.heroku.com)
* [Visual Studio Code](code.visualstudio.com)

<p>&nbsp;<p>

## Usage

To run on localhost:

```
npm start
```

### Heroku Link
[Heroku Budget Tracker Link](https://rocky-headland-91018.herokuapp.com/)

1. Navigate to https://rocky-headland-91018.herokuapp.com/ or http://localhost:3000
2. Add deposit and withdrawal transactions
3. To test offline functionality, press CTRL-SHIFT-I to bring up Chrome Dev Tools.  Click on the Application tab.  Choose Service Workers.
4. Set service worker to offline.
5. Add additional transactions.  Look in the Network Tab and Console tab to see failed network messages.  This is normal when offline. Now set the Service Worker back to online.  In the network tab, you should see bulk messages.  When the type changes from pending to fetch, the database will have been updated.
6. Refresh the page to check if the data entered was persistent. 

### Sample Screenshot
![Budget Tracker Image](./BudgetTrackerImage.PNG)


<p>&nbsp;<p>

## License

This repository is licensed under the MIT License.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p>&nbsp;<p>

## Contributing

This repository is a homework project and is not accepting contributions.
