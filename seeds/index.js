const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Cafe = require('../models/cafe');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Cafe.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Cafe({
            //YOUR USER ID
            author: '5f5c330c2cd79d538f2c66d9',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Good Place!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
    {
      url: 'https://res.cloudinary.com/drspqsmbw/image/upload/v1605639557/Taste/mgmnynvg2xm6kfbhbnot.jpg',        
      filename: 'Taste/mgmnynvg2xm6kfbhbnot'
    },
    {
      url: 'https://res.cloudinary.com/drspqsmbw/image/upload/v1605639586/Taste/syw55ang5cn5ndqqb7nf.jpg',
      filename: 'Taste/syw55ang5cn5ndqqb7nf'
    }
  ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
