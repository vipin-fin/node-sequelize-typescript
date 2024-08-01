import express, { Application } from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';

dotenv.config();
// create Express APP
const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRoutes);

//Synch Database
sequelize.sync().then(() => {
    console.log('Database & tables are created!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// export default app
