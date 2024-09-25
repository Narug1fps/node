//const {Person} = require("./person")
const dotenv = require("dotenv")
require("./src/database/connect")


dotenv.config()

require("./src/database/connect")

//require("./modules/path")

//require("./modules/fs")

//const person = new Person(Math.PI)

//console.log(person.sayMyName())

//require("./http")

require("./express")