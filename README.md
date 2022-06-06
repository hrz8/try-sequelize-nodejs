## Setup

create a file named `sequelize.config.json` in root folder. adjust the configuration by your own config.
 
Example:
```json
{
  "development": {
    "username": "postgres",
    "password": "toor",
    "database": "try_sequelize",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "toor",
    "database": "try_sequelize",
    "host": "database.sequelize.com",
    "port": 5432,
    "dialect": "postgres"
  }
}
```

## How to run

```sh
$ yarn install
$ yarn db:create
$ yarn db:migrate
$ yarn db:seed:all
```
