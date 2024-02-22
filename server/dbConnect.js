const mongoose = require("mongoose");

module.exports = async () => {
    // const mongoUri =
    //     "mongodb+srv://nituspj032001:aZ4vxmVwl5gnetUm@cluster0.oq1boxa.mongodb.net/?retryWrites=true&w=majority";

    const mongoUri = "mongodb+srv://nituspj032001:sETBAx2Zo3vQfwZ5@cluster0.grdk4di.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
