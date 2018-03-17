const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const connectionString = '';

massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) ); 



// Middleware
// const checkForSession = require('./middlewares/checkForSession');

// Controllers
const properties_controller = require('./controllers/properties_controller');
// const auth_controller = require( './controllers/auth_controller');
// const cart_controller = require('./controllers/cart_controller');
// const search_controller = require('./controllers/search_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.get('/api/users/:id', function(req, res, next){
    req.app.get('db').get_user_by_id(req.params.id).then( response => {
        res.status(200).send(response);
    })
})
// app.use( checkForSession );

// app.use( express.static( `${__dirname}/build` ) );

// properties
app.get( '/api/select_all', properties_controller.select_all );
app.get( '/api/filter', properties_controller.filter );
app.delete( '/api/delete', properties_controller.delete );

app.post( '/api/step1', properties_controller.step1 );
app.post( '/api/step2', properties_controller.step2 );
app.post( '/api/step3', properties_controller.step3 );
app.post( '/api/step4', properties_controller.step4 );
app.post( '/api/step5', properties_controller.step5 );




// // Auth
// app.post( '/api/login', auth_controller.login );
// app.post( '/api/register', auth_controller.register );
// app.post( '/api/signout', auth_controller.signout );
// app.get( '/api/user', auth_controller.getUser );

// // Cart 
// app.post( '/api/cart', cart_controller.add );
// app.post( '/api/cart/checkout', cart_controller.checkout );
// app.delete( '/api/cart', cart_controller.delete );

// // Search
// app.get( '/api/search', search_controller.search );

const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`);  } );