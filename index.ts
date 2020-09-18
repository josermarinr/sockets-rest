import Server from './classes/server';
import router  from './routes/router';
import bodyParse from 'body-parser'
import cors from 'cors'

const server = Server.instance;


//BodyParser

server.app.use(bodyParse.urlencoded({extended:true}))
server.app.use(bodyParse.json())

//CORS
server.app.use(cors({origin: true, credentials: true}))

//routes
server.app.use('/', router);





server.start( () => {
    console.log(`your fu*** server is running in port ${ server.port}`)
})