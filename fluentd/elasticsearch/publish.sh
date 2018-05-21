#!/bin/bash

TAG_NAME=ziru/fluentd-elasticsearch

docker build -t ${TAG_NAME} . && docker push ${TAG_NAME}
