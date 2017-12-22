#!/bin/sh

### System Configuration

# allow for memlock
ulimit -l unlimited
# lift the max number of open files descriptors
ulimit -n 65536
# increase the limit on mmap counts
sysctl -w vm.max_map_count=262144

# Continue to run the original entrypoint script
exec /docker-entrypoint.sh $@
