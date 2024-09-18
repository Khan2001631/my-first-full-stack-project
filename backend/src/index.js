import connectDatabase from "../db/index.js";
import dontenv  from 'dotenv'

dontenv.config({ path: './environment/.env' });


connectDatabase();