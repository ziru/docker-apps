#!/bin/sh

# Change the admin password
/opt/splunk/bin/splunk edit user admin -password admin -role admin -auth admin:changeme

# Create a new admin user: u1
/opt/splunk/bin/splunk add user u1 -password 123456 -role admin -tz "America/Los_Angeles" -auth admin:admin

# Create a new token for HTTP Event Collector, named "app-token"
/opt/splunk/bin/splunk http-event-collector create app-token "For App to use" -index main -uri "https://localhost:8089"

# Enable HTTP Event Collector
/opt/splunk/bin/splunk http-event-collector enable -uri https://localhost:8089

# Test command to check HTTP Event Collector
# curl -k  https://localhost:8088/services/collector/event -H "Authorization: Splunk 256F2808-0D81-4DFA-8ADE-8B7B0831E2E8" -d '{"event": "hello world"}'
