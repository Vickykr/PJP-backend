const mongoose = require('mongoose');

//connection
mongoose.connect("mongodb://localhost:27017/PJPDb",{ useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true
}).then(() => console.log(`Connection Established`)).catch((err) => console.log(err));


