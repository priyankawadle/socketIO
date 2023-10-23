
# Node.js and Socket.io Server with Multiple Namespaces

This is a Node.js server using Socket.io with multiple namespaces for real-time communication between the server and connected clients. Each namespace represents a different category of communication. This README provides an overview of the project, its functionality, and how to run the server.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Overview](#project-overview)
- [Usage](#usage)
- [Custom Events](#custom-events)
- [Namespace Usage](#namespace-usage)
- [License](#license)

## Getting Started

To get started with the Node.js and Socket.io server, you'll need to set it up on your local machine.

### Prerequisites

Before you proceed, ensure you have the following installed:

- Node.js (v14.0.0 or higher)


### Installation

Follow these steps to install and run the server:

1. Clone the repository or create a new directory for your project:

   git clone  git clone https://github.com/priyankawadle/socketIO.git

Navigate to the project directory:

cd socketIO

Install project dependencies (Socket.io and Express):

npm install

Start the Node.js server:

node server.js

The server will be running at http://localhost:3002, ready to accept WebSocket connections.

# Project Overview

This project is a Node.js server that uses the Socket.io library to establish real-time communication with clients. It sets up multiple namespaces, each representing a different category of communication, to broadcast messages to clients in those namespaces.

# Usage

To use this server, you can establish a WebSocket connection from a client-side application. Here's an example of how to connect to a specific namespace:


// Connect to the 'buy' namespace

const buySocket = io("/buy");

// Connect to the 'sell' namespace

const sellSocket = io("/sell");

// Listen for custom events within each namespace
buySocket.on("myEvent", function(data) {
  console.log("Buy Namespace Event:", data);
});

sellSocket.on("myEvent", function(data) {
  console.log("Sell Namespace Event:", data);
});

## Custom Events

The server emits a custom event named "myEvent" in each namespace to demonstrate real-time communication. You can modify these events to send different data or events based on your project requirements.


// Broadcast a message in the 'buy' namespace
buynsp.emit('myEvent', 'Buy Namespace');

// Broadcast a message in the 'sell' namespace
sellnsp.emit('myEvent', 'Sell Namespace');

## Namespace Usage

In this project, the server sets up two namespaces: 'buy' and 'sell'. Each namespace represents a different category of communication, allowing you to send and receive messages independently in those namespaces.

The 'buy' namespace is accessed via http://localhost:3002/buy.

The 'sell' namespace is accessed via http://localhost:3002/sell.

You can create additional namespaces as needed for different categories or functionalities.

# License
This project is licensed under the MIT License. You can find the full license details in the LICENSE file.