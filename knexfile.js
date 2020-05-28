// Update with your config settings.

module.exports = {

    development: {
      client: 'mysql',
      connection: {
        host: '185.28.21.241', //sql37.main-hosting.eu
        user:     'u168368074_ccvir',
        database: 'u168368074_ccvir',
        password: '&bQ9XGtH{)GCcRS:S!&K&p<+xERLq[RY'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './src/database/migrations',
        tableName: 'knex_migrations'
      }
      /*
      client: 'sqlite3',
      connection: {
        filename: './src/database/db.sqlite'
      },
      migrations: {
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
      */
    },
  
    test: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/test.sqlite'
      },
      migrations: {
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'mysql',
      connection: {
        host: '185.28.21.241', //sql37.main-hosting.eu
        user:     'u168368074_ccvir',
        database: 'u168368074_ccvir',
        password: '&bQ9XGtH{)GCcRS:S!&K&p<+xERLq[RY'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  