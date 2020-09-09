

module.exports = {
    PORT: process.env.PORT || 8000,
    MONGODB_URL: 'mongodb+srv://djplomo:Ariel2323@cluster0.vsj1c.mongodb.net/template?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    

};

/* mongodb+srv://<username>:<password>@cluster0.vsj1c.mongodb.net/<dbname>?retryWrites=true&w=majority */

/* 'mongodb://localhost/template', */