const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const routes=require('./routes/main')
const Detail = require("./models/detail")
app.use('/static',express.static("public"))
app.use('', routes);
app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials("views/partials")
mongoose.connect("mongodb://127.0.0.1/dynm_web",  {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.log(error));
Detail.create({
    brandName: "Info tecnical solution",
    brandIconUrl: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    links: [{
        label: "Home",
        url: "/"
    },
    {
        label: "Gallery",
        url: "/gallery"
    },
    {
        label: "About",
        url: "/about"
    },
    {
        label: "Contact us",
        url: "/contact-us"
    }

    ]
});
app.listen(process.env.PORT | 9878, () => {
    console.log("server started");
})