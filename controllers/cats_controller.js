const connection = require('../config/connection');

// GET ALL CATS
const getCats = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM cats', (err, catData) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .then()
        return reject(err);
      }
      resolve(catData);
    });
  });
};

// create a cat
/*accepts object parameter => {cat_name: "Mr. Mustaphales"} */
const createCat = catObj => {
  connection.query('INSERT INTO cats SET ? ', catObj, (err, catData) => {
    if (err) {
      console.log(err);
      // THIS WILL GO TO PROMISE'S .then()
      return reject(err);
    }
    resolve(catData);
  });
};

const updateCat = (catObj, catId) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE FROM cats SET ? WHERE id = ?', [catObj, catId], (err, catData) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (catData.affectedRows === 0) {
        return resolve({ message: "Couldn't find a cat with that id!" });
      }

      resolve({ message; 'Cat updated successfully!' });
    });
  });
};

// DELETE A CAT
const deleteCat = (catId) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM cats SET ? WHERE id = ?', [catId], (err, catData) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (catData.affectedRows === 0) {
        return resolve({ message: "Couldn't find a cat with that id!" });
      }

      resolve({ message; 'Cat deleted successfully!' });
    });
  });
};

module.exports = { getCats, createCat, updateCat, deleteCat };
