rs.initiate(
  {
    _id: "configRS",
    configsvr: true,
    members: [
      { _id : 0, host : "config-1:27017" },
      { _id : 1, host : "config-2:27017" },
      { _id : 2, host : "config-3:27017" }
    ]
  }
)
