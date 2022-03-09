let connect = function() {
 if (global.connection) {
   return global.connection.connect();
 }

  const{ Pool } = require("pg");
  const pool = new Pool({
    connectionString:"postgres://hvelzlvy:mytjY9IH_CThsOF2H5qw3uDX80uU6MOF@kashin.db.elephantsql.com/hvelzlvy"
  });
  global.connection = pool;
  return pool.connect();
}

module.exports = { connect}