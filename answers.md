1. Explain the difference between `RDBMS` and `SQL`.

SQL, the Structured Query Language, is a language (or a family of closely related languages or dialects) which is typically used to query the RDBMS. If you want to work with SQL, you just learn SQL and maybe a tiny bit of relational model theory for background.

So: the RDBMS is the system, and SQL is the language used to interact with the system. In principle you could have an RDBMS that uses some other language for access, and in principle you could use SQL to interact with some other kind of database system, though in practice the two are closely coupled.

1. Why do tables need a `primary key`?

Tables in SQL needs primary key since every row should be unique to do queries.
This also does not allow repetition in the tables.

1. What is the name given to a table column that references the primary key on another table.
Foreign Key

1. What do we need in order to have a _many to many_ relationship between two tables.

We need a third table.