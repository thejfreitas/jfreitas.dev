# jfreitas.dev

This is my personal website built in [NextJs](https://nextjs.org/docs) which is a open source framework based on [React](https://reactjs.org/)

## Requirements

### [NodeJs](https://nodejs.org/en/)

`Expected version: >=20.15.1`

### [Yarn](https://yarnpkg.com/)

After you clone this repository you must run the following command in order to install the dependency packages:

```
yarn
```

and then

```
yarn develop
```

The `dev.sh` file will help you to create a production version of this website and deploy to production. In this case I am using [Netlify](https://www.netlify.com/) to deploy this website. You must create an account in order to set up your environment in production.

To build and deploy this website you can use the following command:

```sh
./dev.sh build deploy
```
