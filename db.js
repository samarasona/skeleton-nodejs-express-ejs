let connect = function() {
 if (global.connection) {
   return global.connection.connect();
 }

  const{ Pool } = require("pg");
  const pool = new Pool({
    connectionString:"postgres://hvelzlvy:mytjY9IH_CThsOF2H5qw3uDX80uU6MOF@kashin.db.elephantsql.com/hvelzlvy"
  });
let connect = function( ){
if ( global.connection){
return global.connection.connect();
}

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: "postgres://hewuvcqo:8PYle4spl4TneXR9QoDWObRim-4EUJ32@heffalump.db.elephantsql.com/hewuvcqo"

});

global.connection = pool
  return pool.connect();
  
}

module.exports = { connect }