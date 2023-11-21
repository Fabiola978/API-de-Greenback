import firestore from "./database";


abstract class AccountModel {
    static async createNew(accountData: any) {
        const { amount, tags, transactionInfo } = accountData;
        const timestamp = new Date().toISOString();

        const account = { timestamp, transactionInfo, amount, tags }
    
return firestore.collection('accounts').add(account);
  

    }
    static async getAll() {
        const result = [] as any;
        const accountsRef = firestore.collection('accounts');
        const snapshot = await accountsRef.get();
        snapshot.forEach(doc => {
            const { timestamp, transactionInfo, amount, tags } = doc.data();
            result.push({ transactionInfo, amount, tags,timestamp });
        });
        return result;
    }
    
}

 
export default AccountModel;
