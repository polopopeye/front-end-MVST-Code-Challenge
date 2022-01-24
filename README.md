## Frontend part

This is basically a next.js application. Check package.json for the scripts. Some libraries are pre installed, but you don't need to use them.

# start

```
# install dependencies
$ yarn

# start next.JS
$ yarn dev
```

### Enviroment Variables

1- check next.config.js

```
  env: {
    BASE_API_URL: 'localhost:3000',
  },

```

BASE_API_URL => Url to the backend API, without slash

PUBlIC API FOR TESTING PURPOUSES => https://mvst-code-challenge.herokuapp.com

2- And check the object domains array to ensure the component `<Image>` could retrieve relatives paths of our host.

```
images: {
    domains: ['localhost'],
  },

```
