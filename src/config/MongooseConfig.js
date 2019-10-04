const mongoose = require('mongoose');

module.exports = {
    
    config(){
        mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    }

}


