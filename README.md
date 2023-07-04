## CRUD with Prisma ORM

- To setup the project :

```shell
$ npm i prisma typescript ts-node @types/node --save-dev
````

```shell
$ npm i @prisma/client
````

- In the `prisma.schema` file

Change the provier according to your configuration.
Then create your firsts models

```
model student {
  id        Int     @id @default(autoincrement())
  firstname String  @db.VarChar(255)
  lastname  String  @db.VarChar(255)
  age       Int
  campus    campus? @relation(fields: [campId], references: [id])
  remote    Boolean @default(false)
  campId    Int?
}

model campus {
  id      Int       @id @default(autoincrement())
  city    String    @db.VarChar(255)
  adresse String    @db.VarChar(255)
  student student[]
}
```

- To make migration of the database :

First create a `[DATABASE_NAME]` in your db server.

- Then :

Creat a `.env` file and add the folowing line whit correct informations:

`"mysql://[DB_USER]:[DB_PASSWORD]@[SERVER_NAME]:[SERVER_PORT]/[DATABASE_NAME]?schema=public"`

- Finaly run :

```shell
$ npx prisma migrate dev --name init
```

- To run the project :

```shell
$ npm run dev
````

Now you are ready to [querying the database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/querying-the-database-typescript-postgres).