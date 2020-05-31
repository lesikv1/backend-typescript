
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
$ yarn
```

## Running the app

```bash
# development
$ npm run start
$ yarn start

# watch mode
$ npm run start:dev
$ yarn start:dev

# production mode
$ npm run start:prod
$ yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test
$ yarn test

# e2e tests
$ npm run test:e2e
$ yarn test:e2e

# test coverage
$ npm run test:cov
$ yarn test:cov
```

## Api

```
* GET http://localhost:3000/api/users/generate – this will fetch the details from https://randomuser.me/api/ and insert to user model.
Important: (Password must be encrypted)

* GET http://localhost:3000/api/users – get list of users (not removed)

* PUT http://localhost:3000/api/users/{userId} – update user by Id

* DELETE http://localhost:3000/api/users/{userId} – remove user by Id (set
removed to true)

* POST http://localhost:3000/api/users/login – Body will be {email, password}.
It have to return success status if it match, and error status if it is wrong.
```

## Document of collection

```
    user {
        id: string;
        name: string;
        gender: string;
        email: string;
        picture: string;
        password: string;
        removed: boolean;
    }
```

## Stay in touch

- Author - [Onufriev Alexey](https://www.linkedin.com/in/alexey-onufriev-222bb318b/)

## License

  Nest is [MIT licensed](LICENSE).
