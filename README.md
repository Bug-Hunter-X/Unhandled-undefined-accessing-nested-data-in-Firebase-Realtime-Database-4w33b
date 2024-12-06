# Unhandled undefined accessing nested data in Firebase Realtime Database

This repository demonstrates a common error when working with Firebase Realtime Database: attempting to access nested data without checking for its existence.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

When retrieving data from the Firebase Realtime Database, you might encounter a situation where a nested property you're trying to access is not always present.  Directly accessing this property will result in an undefined error, crashing your application.

## Solution

The solution involves adding checks to ensure the nested property exists before attempting to access it. This can be done using optional chaining (`?.`) or a more traditional check with `if` statements, as demonstrated in `bugSolution.js`.