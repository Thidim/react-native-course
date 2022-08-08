<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://reactnative.dev/">
    <img src="https://reactnative.dev/img/tiny_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">React Native course</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#workshop">Workshop</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
      <a href="#lessons">Lessons</a>
      <ul>
        <li><a href="#tips">tips</a></li>
        <li><a href="#lesson-1">Lesson 1</a></li>
        <li><a href="#lesson-2">Lesson 2</a></li>
        <li><a href="#lesson-3">Lesson 3</a></li>
        <li><a href="#lesson-4">Lesson 4</a></li>
        <li><a href="#lesson-5">Lesson 5</a></li>
        <li><a href="#lesson-6">Lesson 6</a></li>
        <li><a href="#lesson-7">Lesson 7</a></li>
        <li><a href="#lesson-8">Lesson 8</a></li>
      </ul>
    </li>
  </ol>
</details>

## About the project

[![Youtube page screen shot][youtube-page-preview]](https://example.com)

In this project we are going to build a [react native](https://reactnative.dev) app using [typescript][ts].

The purpose of this project is to get familiar with react native development:
* Creating pages
* Linking pages
* Handling user management:
    * sign up
    * log in
* Handle multiple languages
* Handle theme (basic light & dark)
* Use simple public apis:
    * building a simple youtube clone

[youtube-page-preview]: overview/youtube%20page%20preview.png
[ts]: https://www.typescriptlang.org/
## Built with
[![React-native][React-native]][React-native-url]
[![Expo][expo.dev]][Expo-url]
[![Ts][type]][ts-url]
[![Aws][aws]][aws-url]
<h1 align="center">
  <a href="https://reactnative.dev/">
    React Native
  </a>
</h1>
<h3 align="center">
  <a href="https://reactnative.dev/docs/getting-started">Getting Started</a>
  <span> · </span>
  <a href="https://reactnative.dev/docs/tutorial">Learn the Basics</a>
  <span> · </span>
  <a href="https://reactnative.dev/showcase">Showcase</a>
  <span> · </span>
  <a href="https://reactnative.dev/docs/contributing">Contribute</a>
  <span> · </span>
  <a href="https://reactnative.dev/help">Community</a>
  <span> · </span>
  <a href="https://github.com/facebook/react-native/blob/HEAD/.github/SUPPORT.md">Support</a>
</h3>

React Native brings [**React**'s][r] declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.

- **Declarative.** React makes it painless to create interactive UIs. Declarative views make your code more predictable and easier to debug.
- **Component-Based.** Build encapsulated components that manage their state, then compose them to make complex UIs.
- **Developer Velocity.** See local changes in seconds. Changes to JavaScript code can be live reloaded without rebuilding the native app.
- **Portability.** Reuse code across iOS, Android, and [other platforms][p].

React Native is developed and supported by many companies and individual core contributors. Find out more in our [ecosystem overview][e].

[r]: https://reactjs.org/
[p]: https://reactnative.dev/docs/out-of-tree-platforms
[e]: https://github.com/facebook/react-native/blob/HEAD/ECOSYSTEM.md

## workshop

To be able to complete this workshop, you need to have the basic knowledge and requirements of [npm][npm-url], [React.js][react-url], and how JavaScript Frameworks work.

This is a technical workshop, but you will be able to follow if you have <strong>EVERY</strong> requirements installed on your computer.

## requirements

* [![node][node.js]][node-url]
* [![npm][npm]][npm-url]
* [![React][React.js]][React-url]
* [![React-native][React-native]][React-native-url]
* [![Expo][expo.dev]][Expo-url]

## installation

<strong>Please make sure you have completed the <a href="#requirements">Requirements</a> step before going further into the workshop.</strong>

### going further

Clone https: [react-native-course][course-repo-https-url]
<br>
or
<br>
Clone ssh: [react-native-course][course-repo-ssh-url]

## Tips

To start each new lesson:

1. Go to lesson branch
    ```sh
    gco lesson-{lesson_id} '// gco stands for: git checkout'
    ````
    or
    ```sh
    git switch lesson-{lesson_id}
    ````
2. Install the required packages
    ```sh
    npm i && npm start
    ````
3. To make it easier for you to complete the workshop `TODO` marks have been put in some of  the important parts of the code for you to understand.
    You just have to globally search (⌘ Cmd + ↑   Maj + F) `TODO` in the project repository

    You won't have to do everything for scratch, 99% is already done, your goal is to fill the blanks (`TODO`)

4. For development purposes, you might find these [react-navigation-docs][rndocs] and [react-navigation-with-typescript-docs][rnts] links usefull

5. Feel free to rewrite your own way, have fun ;)

## Lesson-1

The objective of this first lesson is to learn how to create the base of the app with [react-navigation][rn]:
* pages
* components
* styling

### A few keywords
Here is a few keywords so you understand how the pages are built:<br>
#### Building pages
* View: a View is a container, it can contain anything (allowed)
    for the ones who already know web dev, a View is a div (kind of, you will see why later)
* Text: I think you got it but anyway, a Text is a container but of text...
* TextInput: well it's a input usually used to create forms (login, signup, etc...)
* Button: No need to explain....
    * (a.k.a): Pressable
    * (a.k.a): TouchableOpacity
    * (a.k.a): TouchableHighlight

Earlier I said that Views are 'kind of' divs, why? Because React Native uses native markup (View, Text, ...), and it is translated by everly platform it is sent to. For example, a browser will translate it to html like this:
* View = `<div class="css-view...">`
* Text = `<div class="css-text...">`

#### Building navigation
* Navigator: container of nested Navigator or screens
* Screen: Link to a page or a navigator

Example:

```
<NavigatorA>
    <Screen name="..." component={...}/>
    <Screen name="..." component={NavigatorB}
</NavigatorA>

<NavigatorB>
    <Screen name="..." component={...}/>
</NavigatorB>

```

### Let's begin
First Go to `constants/types.tsx`:
This is where is built a basic navigation structure:<br>
Example:
* root
    * auth
        * log in
        * sign up
        * ... 
    * user
        * home
            * profile
            * settings
        * apps
            * youtube
            * Facebook
            * ...
        * ...
    * ...

For now we will focus on the creation and the linking of the auth screens:
All the screens are located in the `screens/` folder
The navigation file in located in `navigation/index.tsx`

Your goal is to use the infos in `constants/types.tsx` to add the navigation components to `navigation/index.tsx`.
Don't worry, pages are already created, you just have to link them together

Again, [react-navigation][rn] will be your best friend :)

If you want to skip and retrieve the code to go directly to next step: <a href="#tips">Tips</a>

## Lesson-2

Now that we have a base, let's implement [aws-amplify][aws-url]

0. Install amplifyCli -> `npm install -g @aws-amplify/cli`
1. Create an account
2. Once on your dashboard, search for amplify in the console
3. You will have to select the free setup and the country
4. Create a new app and wait for deployment
5. Time to select authentication setup

You can select whatever you want but you might have to slightly change the front, the base auth system is as follows:

1. Configure login:

Username

2. Configure signup:

Preferred Username, Email, Name

If you select anything else, you can change the front forms accordingly

1. Select what you want
2. Click DEPLOY (bottom of the authentication page)
3. Once deployed, click `Local setup instructions` (top right corner)
4. Copy the command line `amplify pull --appId <appId> --envName <envName>`

This command will create the `aws-exports` file, which contains the config

Now it's time for you to find the `TODO` marks and complete the lesson :) 

## Lesson-3

Using context to access user data everywhere on the app instead of passing it as a prop

`TODO` are yours to complete

## Lesson-4

Profile & settings components files

### Data model

Creating [data model][aws-data-model-url] to store more user data:

If you want to use the example model it's here: `/models`

else
1. Click on the data item above the authentication
2. create the data model you want
2. Deploy and pull the config with the command line

After that, you will need the DataStore [documentation][aws-datastore]

## Lesson-5

#### step 1
Create the profile & settings pages

#### step 2
Let's use datastore to retrieve and display user data

## Lesson-6

Use datastore to update user data

## Lesson-7

#### step 1
Use i18n to handle multiple languages management

#### step 2
Use context to access language value anywhere

## Lesson-8

Building our own theme context

## Lesson-9

Going further, using youtube api, to build a youtube basic clone using this [documentation][yt-doc]
<br>
<br>
<br>


<!-- Links & images -->

[rn]: https://reactnavigation.org/
[rndocs]: https://reactnavigation.org/docs/getting-started
[rnts]: https://reactnavigation.org/docs/typescript
[node.js]: https://img.shields.io/badge/node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB
[type]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB
[ts-url]: https://www.typescriptlang.org/
[aws]: https://img.shields.io/badge/aws_amplify-20232A?style=for-the-badge&logo=aws-amplify&logoColor=ec7211
[aws-url]: https://aws.amazon.com/fr/amplify/
[aws-data-model-url]: https://docs.amplify.aws/console/tutorial/data/#browse-and-auto-generate-your-app-data
[aws-datastore]: https://docs.amplify.aws/lib/datastore/data-access/q/platform/js/
[yt]: https://img.shields.io/badge/youtube-20232A?style=for-the-badge&logo=youtube&logoColor=61DAFB
[yt-url]: https://www.typescriptlang.org/
[node-url]: https://nodejs.org/en/
[npm]: https://img.shields.io/badge/npm-20232A?style=for-the-badge&logo=npm&logoColor=61DAFB
[npm-url]: https://www.npmjs.com/
[React.js]: https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[React-native]: https://img.shields.io/badge/react_native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-native-url]: https://reactnative.dev/docs/environment-setup
[Expo-url]: https://docs.expo.dev/get-started/installation/
[Expo.dev]: https://img.shields.io/badge/expo-20232A?style=for-the-badge&logo=expo&logoColor=61DAFB
[yt-doc]: https://developers.google.com/youtube/v3/docs/

<!-- Repo links -->

[course-repo-https-url]: https://github.com/Thidim/react-native-course.git
[course-repo-ssh-url]: git@github.com:Thidim/react-native-course.git


