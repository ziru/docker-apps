Step 1: Start config servers

- connect to one config server
- run commands in `start-config-svr.js`

Step 2: Start shard servers

- connect to one server in shard 1, and run commands in `start-s1.js`
- connect to one server in shard 2, and run commands in `start-s2.js`

Step 3: Add shards to config servers

- connect to mongos
- run commands in `add-shards.js`

Step 4: Test sharded cluster

- connect to mongos
- run commands in `enable-sharding.js`
