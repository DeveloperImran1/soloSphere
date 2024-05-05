const express = require("express");
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 9000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express()

// middleware
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(express.json())






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0aipf7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const jobsCollections = client.db('soloSphere').collection("jobs")
        const bidsCollection = client.db("soloSphere").collection("bids")


        // get all jobs in db
        app.get("/jobs", async (req, res) => {
            const result = await jobsCollections.find().toArray()
            res.send(result)
        })

        // single job get korbo
        app.get("/job/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await jobsCollections.findOne(query);
            res.send(result)
        })



        // bid data post korbo
        app.post("/bid", async(req, res)=> {
            const bidData = req.body;
            console.log(bidData)
            const result = await bidsCollection.insertOne(bidData)
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("Server Choloseeee")
})

app.listen(port, () => {
    console.log(`Server is runnning in ${port}`)
})