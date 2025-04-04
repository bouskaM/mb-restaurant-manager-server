DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS managers;

CREATE TABLE managers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE restaurants (
  id INTEGER PRIMARY KEY,
  managerId INTEGER,
  address TEXT NOT NULL,
  inProduction INTEGER NOT NULL,
  FOREIGN KEY (managerId) REFERENCES managers(id)
);
