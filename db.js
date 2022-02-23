let connect = function() {
 if (global.connection) {
   return global.connection.connect();
 }

  const{ Pool } = require("pg");
  const pool = new Pool({
    connectionString:"postgres://lxhiaypu:uOgfI6wwBbC9FSLbAKG-PmkbLzNTGTTP@kashin.db.elephantsql.com/lxhiaypu"
  });
  global.connection = pool;
  return pool.connect();
}

module.exports = { connect}