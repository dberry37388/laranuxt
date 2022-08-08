<p align="center">
  <img src="https://raw.githubusercontent.com/acidjazz/laranuxt/master/client/static/laranuxt.png" />
</p>

<p align="center">
  <a href="https://laravel.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" width="92" height="92" /></a>
  <a href="https://vuejs.org"><img src="https://vuejs.org/images/logo.png" width="92" height="92" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png" width="92" height="92" /></a>
  <a href="https://tailwindcss.com"><img src="https://pbs.twimg.com/profile_images/1278691829135876097/I4HKOLJw_400x400.png" width="92" height="92" /></a>
  <a href="https://github.com/acidjazz/metapi"><img src="https://github.com/acidjazz/metapi/raw/master/logo.png" width="92" height="92" /></a>
</p>


> *NEW* Want all of your models typed out as interfaces? check out [modeltyper](https://github.com/fumeapp/modeltyper)

## Sample Resume Project

![](client/static/screenshot.jpg?raw=true)

### What is included

* [NUXT](https://nuxtjs.org) front end, a progressive Vue.js framework - `v2.15.8`
  * [@nuxtjs/typescript-build](https://typescript.nuxtjs.org/) TypeScript Support for Nuxt.js
  * [@nuxtjs/composition-api](https://composition-api.nuxtjs.org/) Composition API Support for Nuxt.js
  * [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/) a [utility-first](https://tailwindcss.com) framework - now with PurgeCSS built in
  * [@nuxtjs/axios](https://github.com/nuxt-community/axios-module) to communicate with our API 
  * [nuxt-tailvue](https://github.com/acidjazz/nuxt-tailvue) a collection of components built for Nuxt.js, powered by TailwindCSS

* [Laravel](https://laravel.com) - for our API - `v8.60.0`
  * [MetAPI](https://github.com/acidjazz/metapi) - API helpers and utilities
  * [debugbar](https://github.com/barryvdh/laravel-debugbar) - awesome debugbar for our API
  * [ide-helper](https://github.com/barryvdh/laravel-ide-helper) - Helper files to enable help with IDE autocompletion

### Installation

* clone from GitHub
* run `yarn` and `composer install` to install all of your deps
* copy `.env.example` to `.env` and configure it to your likings
* TL;DR
 ```bash
git clone git@github.com:Rimsys/laranuxt.git; cd laranuxt; yarn; composer install; cp .env.example .env;
 ```
* Feel free to delete excess media in  `/client/static/`, just images for the readme


### Local Environment
* run `yarn dev` in one terminal for our nuxt dev setup
* run `yarn api` (alias for `./artisan serve`) in another terminal for our laravel API

### Features

* Ability to update your basic information such as name, title, phone, email, etc...
* Ability to add experiences (work, project, etc...)
* Typed models for user, resume, and experiences
* Basic restful api with responses, and requests

### What I'd Do Differently

From the instructions, the intent was to spend a few hours to demonstrate basic working knowledge. With that in mind, I
kept this pretty simple and implemented basic crud for the user's information and the experiences to show some different
approaches.

If I was just doing a simple resume for myself, I'd probably go with something a little less heavy, such as a static
filesystem. For this demo project, I went ahead as though it would have the ability to have multiple users each with
multiple resumes.

There is no authentication in this app, so for demonstration purposes, I've hardcoded to the first user and their
first resume.

