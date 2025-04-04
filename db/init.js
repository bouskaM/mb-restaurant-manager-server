const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const { faker } = require('@faker-js/faker');

const dbFile = 'data.db';
if (fs.existsSync(dbFile)) fs.unlinkSync(dbFile);

const db = new sqlite3.Database(dbFile);
const schema = fs.readFileSync('./db/schema.sql', 'utf8');

db.exec(schema, (err) => {
  if (err) {
    console.error('Error executing schema:', err.message);
    process.exit(1);
  }

  console.log('Generating managers & restaurants...');

  db.serialize(() => {
    db.run('BEGIN TRANSACTION');

    const insertManager = db.prepare('INSERT INTO managers (id, name) VALUES (?, ?)');
    const insertRestaurant = db.prepare(
      'INSERT INTO restaurants (id, managerId, address, inProduction) VALUES (?, ?, ?, ?)'
    );


    // Generate between 40k - 100k managers and restaurants
    const totalCount = faker.number.int({ min: 40000, max: 100000 });
    for (let i = 1; i <= totalCount; i++) {
      insertManager.run(i, faker.person.fullName());
      const address = `${faker.person.lastName()} Street ${faker.number.int({ min: 1, max: 999 })}`;
      const inProduction = faker.datatype.boolean() ? 1 : 0;
      insertRestaurant.run(i, i, address, inProduction);
    }

    insertManager.finalize();
    insertRestaurant.finalize(() => {
      db.run('COMMIT', () => {
        console.log('Database generated ✔');
        db.close();
      });
    });
  });
});
