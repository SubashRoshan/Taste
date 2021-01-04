# Taste - user review & recommendation service
CSPC 34 Software Engineering Project Repo

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.

Run it locally :


1. Install mongodb

2. Create a cloudinary account and mapbox account to get an API key and secret code

         git clone https://github.com/BrijeshDurai/Taste.git

         cd taste

         npm install
    
         npm install@mapbox/mapbox-sdk


Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

    MAPBOX_TOKEN='<token>'
  
    CLOUDINARY_CLOUD_NAME='<name>'
  
    CLOUDINARY_KEY='<key>'

    CLOUDINARY_SECRET='<secret>'

Run mongod in another terminal and node app.js in the terminal with the project.

Then go to localhost:3000.
