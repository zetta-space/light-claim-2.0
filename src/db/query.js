import { connection } from "./Connection";

export const DB = connection();

export const table = new Promise((resolve, reject) => {
  DB.transaction(
    function (tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS jobs (id INTEGER PRIMARY KEY NOT NULL, jobId INTEGER NOT NULL, numberPlate TEXT NOT NULL, imageUri TEXT NOT NULL, location REAL NOT NULL, note TEXT NOT NULL)"
      );
    },
    function (error) {
      reject(error.message);
    },
    function () {
      resolve(true);
      console.log("Created Table OK");
    }
  );
});

export const createJob = new Promise((resolve, reject) => {
  DB.transaction(
    function (tx) {
      tx.executeSql(
        "INSERT INTO jobs(id, jobId, numberPlate, imageUri, location, note) values(1, 1145, 'CT-12345',  'X 0102030405060708090a0b0c0d0e0f', 73.60864, 'Lorem Ipsum');"
      );
    },
    function (error) {
      reject(error.message);
    },
    function () {
      resolve(true);
      console.log("Created Record OK");
    }
  );
});

export const getJob = new Promise((resolve, reject) => {
  DB.transaction(
    function (tx) {
      tx.executeSql("SELECT * FROM jobs", [], (transaction, results) => {
        return results;
      });
    },
    function (error) {
      reject(error.message);
    },
    function () {
      resolve(true);
    }
  );
});
