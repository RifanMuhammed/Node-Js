Node.js Learning & Projects

This repository contains my Node.js learning journey — from basics to small projects built while understanding core concepts and NPM packages.

📂 Folder Structure
1. Using Node

Basic Node.js fundamentals

Running JS outside the browser

process object

Command line arguments

2. Native Modules

Working with built-in Node modules

fs (File System)

path

Reading & writing files

3. NPM

Understanding package manager usage

Installing packages

package.json

Dependencies vs devDependencies

4. Superhero NPM

Using external NPM packages inside Node projects
Example: generating random superheroes/villains using an installed package

5. QR Code Project

A small CLI app that generates a QR Code from a user-entered URL.

⚠️ Note:
inquirer and qrcode packages are NOT included in this repo.
You must install them manually:

npm install inquirer qrcode


Then run:

node index.js


The program will:

Ask for a URL

Generate a QR code image

Save the URL to a text file

🚀 Goal

This repo is mainly for practicing:

Node.js basics

Built-in modules

NPM packages

Simple CLI applications
