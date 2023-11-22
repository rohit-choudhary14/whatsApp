const { MongoClient,ObjectId } = require("mongodb");
const uri = "mongodb+srv://kartikjaat5765:b3sUEcy91SW1Zu0i@cluster0.nii9s5d.mongodb.net/?retryWrites=false&w=majority";

let database;

async function connect() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        database = client.db("Chatapplication");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error);
    }
}

function getDatabase() {
    return database;
}

module.exports = { connect, getDatabase,ObjectId  };
