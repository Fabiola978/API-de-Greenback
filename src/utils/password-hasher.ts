import { createHash } from 'node:crypto';

const getSHA512ofpassword = (password: string) => createHash('sha512').update(password).digest('hex');

export { getSHA512ofpassword }; //en este caso no ponemos default porque exportamos una funcion puntual
