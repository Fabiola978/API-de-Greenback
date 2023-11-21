import firestore from "./database";
import { getSHA512ofpassword } from "../utils/password-hasher";

abstract class UserModel {
    static async createNew(userData: any) {
        const { fullName, email, password } = userData;
        const hashedPassword = getSHA512ofpassword(password);

        const res = await firestore.collection('users').add({
            fullName,
            email,
            password: hashedPassword,
            movements: [],
            balance: 0,
        });

        return { message: `User ${fullName} created successfully`, id: res.id };
    }
    static async getAll() {
        const result = [] as any;
        const usersRef = firestore.collection('users');
        const snapshot = await usersRef.get();
        
        snapshot.forEach(doc => {
            const { fullName, email } = doc.data();
            result.push({ fullName, email });
        });
        return result;
    }
    
}

 
export default UserModel;

