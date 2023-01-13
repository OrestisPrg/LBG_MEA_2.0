// It will attempt to perform he aggregate function on which ever db you are currectly connected to in the shell
db.sampleData.aggregate(
    [
        {$project: {"Items Sold":1}},
        {$out: {db: "demo", coll:"sampleData"}}
    ])