---
title: PostgreSQL Reference Guide
description: A comprehensive guide to PostgreSQL, covering basic concepts, SQL commands, and advanced features.
category: Databases
---

# PostgreSQL Reference Guide

## Basic Concepts in PostgreSQL

### Database

- A database is a container that holds schemas, tables, views, functions, and other objects.
- Created using: `CREATE DATABASE database_name;`

### Schema

- A namespace within a database that organizes objects (tables, views, etc.).
- Like folders within a filesystem.
- `CREATE SCHEMA schema_name;`

### Table

- A structured set of rows and columns used to store data.
- Created with `CREATE TABLE`.

### Index

- Speeds up queries by allowing fast lookup on specified columns.
- `CREATE INDEX index_name ON table_name (column_name);`

### View

- A saved SQL query treated as a virtual table.
- `CREATE VIEW view_name AS SELECT ...`

### Materialized View

- Like a view but stores actual data, not just a query.
- Needs to be refreshed to stay up-to-date.
- `REFRESH MATERIALIZED VIEW view_name;`

### Function

- Reusable blocks of code written in SQL or PL/pgSQL.
- Can take parameters, return values, modify data, etc.

### Trigger

- An action that automatically executes in response to an event on a table.
- E.g., after insert/update/delete.

### Constraint

- Rules applied to table columns to enforce data integrity.
  - **Primary Key**: Uniquely identifies each row.
  - **Foreign Key**: Enforces referential integrity between tables.
  - **Unique**: Prevents duplicate values.
  - **Check**: Enforces custom conditions.

### Sequence

- Auto-incrementing numbers, often used for primary keys.
- `SELECT nextval('sequence_name');`

### Temporary Table

- Only exists during the session/transaction.
- Ideal for intermediate results or caching.

### Partitioning

- Divides a table into smaller pieces (partitions) based on column values.
- Helps with performance and scalability.

### Policy (Row-Level Security)

- Controls access to individual rows in a table based on user identity or session.
- Must be enabled on a table.

### Foreign Table / Foreign Data Wrapper

- Access tables from other PostgreSQL or external databases.
- Requires `CREATE FOREIGN DATA WRAPPER`, `CREATE SERVER`, and `CREATE FOREIGN TABLE`.

### Role

- Represents a user or a group of users.
- Can be granted permissions to access database objects.

## PostgreSQL CLI Commands (`psql`)

### Login to PostgreSQL

```bash
psql -v ON_ERROR_STOP=1 -U postgres
```

- `psql`: PostgreSQL interactive terminal (CLI).
- `-v ON_ERROR_STOP=1`: Stop execution on the first error.
- `-U postgres`: Connect using the `postgres` user.

### Create a User

Creates a new PostgreSQL user with a password.

```sql
CREATE USER username WITH PASSWORD 'password';
```

### Create a Database

Creates a new database.

```sql
CREATE DATABASE database_name;
```

### Grant Privileges

Gives the specified user full access to the database.

```sql
GRANT ALL PRIVILEGES ON DATABASE database_name TO username;
```

### List All Databases

Displays all databases with additional details.

```bash
\l+
```

### to a Database

Switches connection to the specified database.

```bash
\c database_name
```

### List Tables in Current Database

Lists all tables with additional metadata.

```bash
\dt+
```

### List Users (Roles)

Shows all roles/users and their attributes.

```bash
\du+
```

### List Schemas

Lists all schemas in the current database.

```bash
\dn+
```

### List Sequences

Lists all sequences (used for auto-incrementing IDs).

```bash
\ds+
```

### Data Types in PostgreSQL

#### **Numeric Types**

- `SMALLINT`, `INTEGER`, `BIGINT`, `DECIMAL`, `NUMERIC`, `REAL`, `DOUBLE PRECISION` – for integer and floating-point numbers.

#### **Character Types**

- `CHAR(n)`, `VARCHAR(n)`, `TEXT` – for fixed-length, variable-length, and unlimited-length strings.

#### **Boolean Type**

- `BOOLEAN` – stores `TRUE`, `FALSE`, or `NULL`.

#### **Date/Time Types**

- `DATE`, `TIME`, `TIMESTAMP`, `TIMESTAMPTZ`, `INTERVAL` – for temporal data and durations.

#### **Binary Type**

- `BYTEA` – stores binary data (e.g. files, images).

#### **JSON Types**

- `JSON`, `JSONB` – for storing structured data as JSON; `JSONB` is a binary, indexable format.

#### **Array Types**

- `ARRAY` – allows storage of multiple values of the same type in a single column.

#### **UUID Type**

- `UUID` – stores universally unique identifiers.

#### **Geometric Types**

- `POINT`, `LINE`, `LSEG`, `BOX`, `PATH`, `POLYGON`, `CIRCLE` – for geometric data.

#### **Network Address Types**

- `CIDR`, `INET`, `MACADDR` – for IP addresses and MAC addresses.

#### **XML Type**

- `XML` – stores XML data.

#### **Composite Types**

- Custom user-defined types that group multiple fields into one structure.

#### **Range Types**

- `INT4RANGE`, `INT8RANGE`, `NUMRANGE`, `TSRANGE`, `TSTZRANGE`, `DATERANGE` – represent continuous ranges of values.

#### **HSTORE Type**

- `HSTORE` – stores sets of key-value pairs.

#### **Full-Text Search Types**

- `TSVECTOR`, `TSQUERY` – used for indexing and querying textual content.

#### **Enumerated Type**

- `ENUM` – defines a static list of acceptable values.

#### **Bit String Types**

- `BIT`, `BIT VARYING` – for storing bit masks and sequences.

## SQL Commands in PostgreSQL

### Table Management

```sql
CREATE TABLE table_name (...);
ALTER TABLE table_name ADD/DROP/RENAME COLUMN ...;
DROP TABLE table_name;
```

### Data Manipulation

```sql
INSERT INTO table_name (...) VALUES (...);
SELECT * FROM table_name WHERE ...;
UPDATE table_name SET column = value WHERE ...;
DELETE FROM table_name WHERE ...;
```

### Indexing

```sql
CREATE INDEX index_name ON table_name (column);
DROP INDEX index_name;
```

### Views

```sql
CREATE VIEW view_name AS SELECT ...;
DROP VIEW view_name;
```

### Functions

```sql
CREATE FUNCTION name(params) RETURNS type AS $$ ... $$ LANGUAGE plpgsql;
SELECT function_name(...); -- calling
```

Function attributes:

- `IMMUTABLE`: Always returns the same result for the same input.
- `STABLE`: Does not modify DB and returns same result in same transaction.
- `VOLATILE`: Can return different results even for same input.
- `SECURITY DEFINER`: Runs with function creator’s privileges.
- `SECURITY INVOKER`: Runs with caller’s privileges.
- `PARALLEL SAFE/RESTRICTED/UNSAFE`: Whether it can be run in parallel queries.

### Triggers

```sql
CREATE TRIGGER trigger_name AFTER INSERT ON table_name FOR EACH ROW EXECUTE FUNCTION function_name();
DROP TRIGGER trigger_name ON table_name;
```

### Schemas

```sql
CREATE SCHEMA schema_name;
DROP SCHEMA schema_name;
```

### Constraints

```sql
-- Foreign key
ALTER TABLE child_table ADD CONSTRAINT fk FOREIGN KEY (...) REFERENCES parent_table(...);
-- Unique
ALTER TABLE table_name ADD CONSTRAINT name UNIQUE (...);
-- Check
ALTER TABLE table_name ADD CONSTRAINT name CHECK (condition);
-- Drop any
ALTER TABLE table_name DROP CONSTRAINT name;
```

### Materialized Views

```sql
CREATE MATERIALIZED VIEW name AS SELECT ...;
REFRESH MATERIALIZED VIEW name;
DROP MATERIALIZED VIEW name;
```

### Sequences

```sql
CREATE SEQUENCE name START WITH 1 INCREMENT BY 1;
SELECT nextval('name');
DROP SEQUENCE name;
```

### Temporary Tables

```sql
CREATE TEMP TABLE temp_name (...);
DROP TABLE temp_name;
```

### Partitioned Tables

```sql
CREATE TABLE name (...) PARTITION BY RANGE (column);
CREATE TABLE part_name PARTITION OF name FOR VALUES FROM (...) TO (...);
DROP TABLE part_name;
```

### Roles & Permissions

```sql
CREATE ROLE name WITH LOGIN PASSWORD '...';
GRANT role_name TO username;
REVOKE role_name FROM username;
```

### Row-Level Security

```sql
CREATE POLICY policy_name ON table_name FOR SELECT USING (condition);
ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;
ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;
```

### Foreign Tables & Remote Access

```sql
-- Setup
CREATE FOREIGN DATA WRAPPER wrapper_name HANDLER ... VALIDATOR ...;
CREATE SERVER server_name FOREIGN DATA WRAPPER wrapper_name OPTIONS (...);

-- Usage
CREATE FOREIGN TABLE foreign_table (...) SERVER server_name OPTIONS (...);
DROP FOREIGN TABLE foreign_table;
```

### Replication (Logical)

```sql
CREATE PUBLICATION pub_name FOR TABLE table_name;
CREATE SUBSCRIPTION sub_name CONNECTION '...' PUBLICATION pub_name;
DROP PUBLICATION pub_name;
DROP SUBSCRIPTION sub_name;
```

### Other Object Types

- **Collation**:
  ```sql
  CREATE COLLATION name (locale = '...', provider = '...');
  DROP COLLATION name;
  ```
- **Extension**:
  ```sql
  CREATE EXTENSION name;
  DROP EXTENSION name;
  ```
- **Custom Type**:
  ```sql
  CREATE TYPE name AS (attr1 type, attr2 type);
  DROP TYPE name;
  ```
- **Domain**:
  ```sql
  CREATE DOMAIN name AS type CHECK (...);
  DROP DOMAIN name;
  ```
- **Aggregate Function**:
  ```sql
  CREATE AGGREGATE name (SFUNC = ..., STYPE = ...);
  DROP AGGREGATE name;
  ```

### Full-Text Search

- **Create Index**:

```sql
CREATE INDEX idx_name ON table_name USING gin(to_tsvector('english', column_name));
```

- **Query**:

```sql
SELECT * FROM table_name WHERE to_tsvector('english', column_name) @@ plainto_tsquery('english', 'search_term');
```

### JSONB Operations

- **Create Table with JSONB**:

```sql
CREATE TABLE table_name (id SERIAL PRIMARY KEY, data JSONB);
```

- **Insert JSONB Data**:

```sql
INSERT INTO table_name (data) VALUES ('{"key": "value"}');
```

- **Query JSONB**:

```sql
SELECT * FROM table_name WHERE data->>'key' = 'value';
```

### Common Functions

- **String Functions**:

```sql
SELECT CONCAT('Hello, ', 'World!'); -- Concatenation
SELECT LENGTH('Hello'); -- Length of string
SELECT UPPER('hello'); -- Convert to uppercase
SELECT LOWER('HELLO'); -- Convert to lowercase
```

- **Date/Time Functions**:

```sql
SELECT NOW(); -- Current timestamp
SELECT CURRENT_DATE; -- Current date
SELECT EXTRACT(YEAR FROM NOW()); -- Extract year
SELECT DATE_TRUNC('month', NOW()); -- Truncate to month
```

- **Mathematical Functions**:

```sql
SELECT ABS(-10); -- Absolute value
SELECT ROUND(3.14159, 2); -- Round to 2 decimal places
SELECT RANDOM(); -- Random number between 0 and 1
```

- **Array Functions**:

```sql
SELECT ARRAY[1, 2, 3]; -- Create array
SELECT ARRAY_LENGTH(ARRAY[1, 2, 3], 1); -- Length of array
SELECT UNNEST(ARRAY[1, 2, 3]); -- Expand array into rows
```

- **Aggregate Functions**:

```sql
SELECT COUNT(*), SUM(column_name), AVG(column_name) FROM table_name; -- Count, sum, average
SELECT MAX(column_name), MIN(column_name) FROM table_name; -- Max, min
```

- **Conditional Expressions**:

```sql
SELECT CASE WHEN condition THEN result1 ELSE result2 END FROM table_name; -- Conditional logic
SELECT COALESCE(column_name, 'default_value'); -- Return first non-null value
```

- **Window Functions**:

```sql
SELECT column_name, ROW_NUMBER() OVER (PARTITION BY column_name ORDER BY another_column) FROM table_name; -- Row number within partition
SELECT AVG(column_name) OVER (PARTITION BY column_name) FROM table_name; -- Average within partition
```

### Performance Tuning

- **Analyze**: Collect statistics for the query planner.

```sql
ANALYZE table_name;
```

- **Vacuum**: Clean up dead tuples and reclaim space.

```sql
VACUUM table_name;
```

- **Explain**: Show the execution plan for a query.

```sql
EXPLAIN SELECT * FROM table_name WHERE condition;
```

- **Explain Analyze**: Execute the query and show the execution plan with actual run times.

```sql
EXPLAIN ANALYZE SELECT * FROM table_name WHERE condition;
```

### Backup and Restore

- **Backup**: Create a backup of the database.

```bash
pg_dump database_name > backup_file.sql
```

- **Restore**: Restore from a backup file.

```bash
psql database_name < backup_file.sql
```

### Monitoring and Logging

- **View Active Queries**:

```sql
SELECT * FROM pg_stat_activity WHERE state = 'active';
```

- **View Locks**:

```sql
SELECT * FROM pg_locks WHERE NOT granted;
```

- **View Disk Usage**:

```sql
SELECT pg_size_pretty(pg_database_size('database_name'));
```

- **View Table Size**:

```sql
SELECT pg_size_pretty(pg_total_relation_size('table_name'));
```

- **View Index Size**:

```sql
SELECT pg_size_pretty(pg_indexes_size('table_name'));
```

- **View Schema Size**:

```sql
SELECT pg_size_pretty(pg_total_relation_size('schema_name'));
```

- **View Role Privileges**:

```sql
SELECT grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'table_name';
```

### Security Best Practices (Essential Checklist)

#### **Use Roles with Least Privileges**

- Create roles with the minimum required permissions instead of using superuser accounts.

#### **Enable SSL/TLS**

- Encrypt all client-server connections using SSL/TLS.

#### **Regular Backups & Restore Testing**

- Schedule automated backups and regularly test the restore process to ensure data integrity.

#### **Keep PostgreSQL and Extensions Updated**

- Stay current with the latest security patches and updates for both PostgreSQL and installed extensions.

#### **Monitor Logs and User Activity**

- Continuously monitor logs for suspicious activity and unusual access patterns.

#### **Enforce Strong Authentication**

- Use strong password policies and enable two-factor authentication for privileged users.

#### **Harden Configuration Files**

- Secure `postgresql.conf` and `pg_hba.conf`, disable unused features, and restrict access.

#### **Encrypt Data at Rest and in Transit**

- Apply encryption to sensitive data stored on disk and during transmission.

#### **Review User Roles and Permissions Regularly**

- Audit and adjust user access periodically to align with current responsibilities.

#### **Use Connection Poolers and Resource Limits**

- Implement tools like PgBouncer and set connection limits to avoid resource exhaustion.
