import { initializeApp } from "firebase/app";

import { firebaseConfig } from '../../Secrets';
import { getDatabase } from "firebase/database";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
