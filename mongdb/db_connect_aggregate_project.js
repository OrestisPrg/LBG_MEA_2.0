// Connect to a database directly
db = connect( "mongodb://localhost/products")

db.catalogue.aggregate(
    [
        {$project: {"Items Sold":1}},
        {$out: {db: "demo", coll:"sampleData"}}
    ])