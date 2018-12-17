# create a collection with some test data
use test;

for (i=0; i<1000; i++) {
    db.users.insertOne(
        {
             "i" : i, 
             "username" : "user"+i,
             "age" : Math.floor(Math.random()*120), 
             "created" : new Date()
        }
    );
}

# create an index for sharding purpose
db.users.createIndex({'username': 1})

# enable the sharding on the database level
sh.enableSharding('test')

# shard the collection by sharding key
sh.shardCollection('test.users', {'username': 1})
