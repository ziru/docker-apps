### Generate reassignment

```
kafka-reassign-partitions --zookeeper localhost:2181 --topics-to-move-json-file topics-to-move.json --broker-list "0,1,2" --generate
```

### Execute reassignment

```
kafka-reassign-partitions --zookeeper localhost:2181 --reassignment-json-file reassignment.json --execute
```
