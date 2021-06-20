# Sigortam.net Front-end Assessment

## Quick start

### npm

```shell
npx http-server -p 8000 -o
```

### python 2

```shell
python -m SimpleHTTPServer 8000
```

### python 3

```shell
python3 -m http.server 8000
```

### Project structure

- assets _(contains resources for the vue.js application to be run)_
    - css
        - [tailwind.css](#tailwindcss)
        - [main.css](#maincss)
    - js
        - [api](#api)
        - [component](#component)
        - [filter](#filter)
        - [helper](#helper)
        - [lib](#lib)
        - [page](#page)
        - [app.js](#appjs)
        - [store.js](#storejs)
        - [typedefs.js](#typedefsjs)

#### tailwind.css

A utility-first CSS framework, [see](https://tailwindcss.com/)

#### main.css

Contains utility styles that will override some of tailwind's rules

#### api

Contains helpers to make api requests

#### component

Contains shared components

#### helper

Contains utility functions for future usability

#### filter

Contains vuex filters

#### lib

Contains third party js libraries (vue.js, vuex.js)

#### app.js

Application's entry point, a Vue instance is being created here

#### store.js

Contains vuex store for 3rd task

#### typedefs.js

Contains javascript typings, [see](https://jsdoc.app/)

#### page

Contains the views for tasks

### FAQ

- [Why didn't I use cdn?](#why-didnt-i-use-cdn)
- [Why didn't I use vuex for 1st and 2nd task?](#why-didnt-i-use-vuex-for-1st-and-2nd-task)
- [Why did I use same components for every task?](#why-did-i-use-same-components-for-every-task)
- [What is typedefs.js?](#what-is-typedefsjs)
- [Why did I use tailwind?](#why-did-i-use-tailwind)
- [Why did I use built-in fetch api instead of axios or another 3rd party library?](#why-did-i-use-built-in-fetch-api-instead-of-axios-or-another-3rd-party-library)
- [Why did I use es6 modules?](#why-did-i-use-es6-modules)
- [Why don't prices look like in the example screenshot?](#why-dont-offer-prices-look-like-in-the-example-screenshot)
- [Are there any possible browser compatibility issues?](#are-there-any-possible-browser-compatibility-issues)
- [Why didn't I add cache mechanism for api requests?](#why-didnt-i-add-cache-mechanism-for-api-requests)
- [What are the missing best practices in this project?](#what-are-the-missing-best-practices-in-this-project)

#### Why didn't I use cdn

Even though my IDE _([WebStorm](https://www.jetbrains.com/webstorm/))_
can fetch source files from CDN and provide a code assistance,
I wanted to support text editors like [VSCode](https://code.visualstudio.com/)
so I stored 3rd party libraries locally.

#### Why didn't i use vuex for 1st and 2nd task?

I wanted to approach differently to this problem.

#### Why did I use same components for every task?

Instead of writing duplicate code I prefer to reuse existing components
for easy debugging and sustainability.

#### What is typedefs.js?

Because JavaScript doesn't have typings, typedefs.js
is used for typing support to help editor and IDE
for better code assistance

#### Why did I use tailwind?

Instead of writing css styles from scratch by myself,
using a technology such as tailwind improves development
efficiency and application integrity.

#### Why did I use built-in fetch api instead of axios or another 3rd party library?

Axios or any other library will provide a lot more
functionality than this application needs and using
such a library will decrease productivity due to initial
boilerplate

#### Why did I use es6 modules?

I would love to use official vue-cli tool for bootstrapping the app
but due to my limitations given by the assessment _(the request
I must not change the html structure)_ I choose to work with
pure javascript, and it's present features.

#### Why don't offer prices look like in the example screenshot?

Because, prices are parsed with a vue.js filter 
that I wrote that uses ECMAScript Internationalization API

#### Are there any possible browser compatibility issues?

Application works on all modern browsers but because I use
es6 and present features it would need promise polyfills
and being transpiled to es3 for better browser compatibility.

#### Why didnt i add cache mechanism for api requests?

I intended to do so at first, but later I decided 
it may be over engineering for a small project like this.


#### What are the missing best practices in this project?
Project can be improved by using code quality tools such as,

- a linter for measuring code quality and avoiding
  vague JavaScript expressions _[see](https://eslint.org)_
- a tester for automated component testing 
  _[see](https://vuejs.org/v2/guide/testing.html)_
- webpack to support a wider range of browser/browser 
  versions with adding polyfill and transpiling to 
  a widely supported ECMAScript version and improving 
  build sizes _[see](https://webpack.js.org/)_
- using custom build of tailwind for to purge unused 
  css rules _(to reduce the build)_ and add custom ones
- using server-side rendering for reducing cumulative layout shift
  usually caused by images, improving performance and for a better SEO
  support in many search engines _(no matter how much modern search
  engines claim to support single page applications, it is possible to 
  see a glitch due to unpredictable dynamic states of single page applications)_
