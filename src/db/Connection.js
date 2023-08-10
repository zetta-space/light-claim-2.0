import * as SQLite3 from "expo-sqlite";

export function connection() {
  const database = SQLite3.openDatabase("app.sqlite");
  return database;
}
