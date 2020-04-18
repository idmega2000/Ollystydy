
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
// });

app.get('/', (req, res)=> {
    res.render('login')
})
 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening to Port ${PORT}....`);
});