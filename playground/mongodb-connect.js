//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect.');

  }
  console.log('Succesfully connected.');
  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  //
  // }, (err, result) => {
  //
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //

  // db.collection('Users').insertOne({
  //   name : 'Mike',
  //   age : 29,
  //   location: 'Jersey'
  // }, (err, result) => {
  //   if(err)
  //   {
  //     return console.log('There was an error', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.close();
});
