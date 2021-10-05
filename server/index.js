import express from 'express';

const app = express();
const PORT = 5000;

const callback = () => {
    console.log(`Server started at http://localhost:{PORT}`);
}

app.get('/', (req, res) => {
    res.send('<h1>Hello from GDSC IIEST</h1>');
});

app.listen(PORT, callback);