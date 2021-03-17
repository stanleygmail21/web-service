const app = require('./app');

mongoose.connect(process.env.DATABASE_LOCAL, { 
    useNewUrlParser: true,  
    useUnifiedTopology: true, 
    useFindAndModify: false})
.then(()=>{
    console.log('connection to database successful');
});

app.listen('8000', () => {
    console.log('server successfully started')
})

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: ' is here'
    })
})

