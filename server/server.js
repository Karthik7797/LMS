    import express from 'express';
    import cors from 'cors'
    import 'dotenv/config'
    import connectDB from './mongodb.js';
    import {clerkWebhooks} from './controllers/webhooks.js'

    const app = express();

    await connectDB();
    
    app.use(cors());

    app.get('/', (req,res) => res.send("api working"));
    app.post('/clerk', express.json(), clerkWebhooks)

    const PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
        console.log(`server is running port ${PORT}`)
    }) 