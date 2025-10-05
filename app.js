const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

app.get('/', (req, res) => {
    res.render('routes/index', {
        title: "Mini Messageboard",
        messages: messages
    })
});

app.get('/new', (req, res) => {
    res.render('routes/newMessage' , {
        title: 'New Message'
    });
})

app.post('/new', (req, res) => {
    const messageText = req.body.text;
    const userName = req.body.name;

    messages.push({
        text: messageText,
        user: userName,
        added: new Date()
    });

     res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});