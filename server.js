// EXTERNAL PACKAGES REQUIRED FOR FUNCTIONALITY
// DOCUMENTATION > BCRYPT (https://www.npmjs.com/package/bcrypt)
// DOCUMENTATION > DOTENV (https://www.npmjs.com/package/dotenv)
// DOCUMENTATION > EXPRESS (https://expressjs.com/en/starter/installing.html)
// DOCUMENTATION > EXPRESS HANDLEBARS (https://www.npmjs.com/package/express-handlebars)
// DOCUMENTATION > EXPRESS SESSION (https://www.npmjs.com/package/express-session)
// DOCUMENTATION > HANDLEBARS (https://handlebarsjs.com/installation/)
// DOCUMENTATION > MYSQL2 (https://www.npmjs.com/package/mysql2)
// DOCUMENTATION > SEQUELIZE (https://www.npmjs.com/package/sequelize)
// DOCUMENTATION > CONNECT SESSION SEQUELIZE (https://www.npmjs.com/package/connect-session-sequelize)
// DOCUMENTATION > JEST (https://jestjs.io/docs/getting-started)
// DOCUMENTATION  > PATH (https://www.npmjs.com/package/path)
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// APP AND PORT
const app = express();
const PORT = process.env.PORT || 3001;

// REVISIT - ADD IN SECRET LATER
const sess = {
    secret: 'Secret Tech Blog',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// HANDLEBARS
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// APP > USE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

// PORT > LISTEN
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening.'));
});
