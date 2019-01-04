### Example use of schema registry


#### Produce Records
```
kafka-avro-console-producer --broker-list 127.0.0.1:9092 --topic test-avro --property schema.registry.url=http://127.0.0.1:8081 --property value.schema='{"type":"record","name":"myrecord","fields":[{"name":"f1","type":"string"}]}'

{"f1":"value1"}
{"f1":"value2"}
{"f1":"value3"}
```

#### Consume Records
```
kafka-avro-console-consumer --bootstrap-server 127.0.0.1:9092 --topic test-avro --property schema.registry.url=http://127.0.0.1:8081 --from-beginning
```
