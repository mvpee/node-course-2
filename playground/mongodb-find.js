//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect.');

  }
  console.log('Succesfully connected.');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a313b9041a8b729399849a0")
  // }).toArray().then((docs) => {
  //     console.log('Todos:');
  //
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     Console.log('error', err);
  // });


  db.collection('Todos').find().count().then((count) => {
      console.log(`Counts : ${count}`);
  }, (err) => {
      Console.log('error', err);
  });

  //db.close();
});
