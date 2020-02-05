var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/master');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    //     "userEmail" : String,
    //     "userPassword" : String
    // };
        id: 1,
        name : "string",
        username : "string",
        email : "string",
        address : {
        street : "string",
        suite : "string",
        city : "string",
        zipcode : "int",
        geo : {
        lat : "-37.3159",
        lng: "81.1496"
              }
                 },
        phone: "int",
        website: "string",
        company: {
          name: "string",
          catchPhrase: "string",
          bs: "string"}
        };

// create model if not exists.
module.exports = mongoose.model('master',userSchema);