\echo 'Delete and recreate jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE jobly2;
CREATE DATABASE jobly2;
\connect jobly2

\i jobly-schema.sql
\i jobly-seed.sql

\echo 'Delete and recreate jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE jobly2_test;
CREATE DATABASE jobly2_test;
\connect jobly2_test

\i jobly-schema.sql
