rs.initiate(
  {
    _id: "s1",
    members: [
      { _id : 0, host : "s1-n1:27017" },
      { _id : 1, host : "s1-n2:27017" },
      { _id : 2, host : "s1-n3:27017" }
    ]
  }
)
