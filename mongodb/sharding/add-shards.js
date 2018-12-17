# connect to mongos

use admin;

sh.addShard("s1/s1-n1:27017,s1-n2:27017,s1-n3:27017");

sh.addShard("s2/s2-n1:27017,s2-n2:27017,s2-n3:27017");

sh.status()
