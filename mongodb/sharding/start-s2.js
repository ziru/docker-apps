rs.initiate(
  {
    _id: "s2",
    members: [
      { _id : 0, host : "s2-n1:27017" },
      { _id : 1, host : "s2-n2:27017" },
      { _id : 2, host : "s2-n3:27017" }
    ]
  }
)
