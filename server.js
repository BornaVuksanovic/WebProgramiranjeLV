const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

console.log("Test porta:", process.env.PORT);
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Pozdrav sa Railway servera!');
});
app.listen(PORT, () => {
    console.log('Server pokrenut na portu ${PORT}');
});
