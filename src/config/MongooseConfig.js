const mongoose = require('mongoose');

module.exports = {
    
    config(){
        mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ly89y.mongodb.net/omnistack?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    }

}


