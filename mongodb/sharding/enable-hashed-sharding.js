# create a collection with some test data
use test-hashed;

for (i=0; i<1000000; i++) {
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
db.users.createIndex({'username': "hashed"})

# enable the sharding on the database level
sh.enableSharding('test-hashed')

# shard the collection by sharding key
sh.shardCollection('test-hashed.users', {'username': 'hashed'})

# get db shard distribution
db.users.getShardDistribution()

# check shard status
sh.status()

# switch to config database and check the chunks status
use config
db.chunks.find()
