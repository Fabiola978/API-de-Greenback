DESARROLLO DE API REST CON DB NO-SQL

Armado de la API de Greenback.io, una app para administrar la economía y finanzas personales. La app permite el registro de usuarios, los cuales pueden llevar un registro de sus gastos y sus ingresos semanalmente, almacenar todos los movimientos en una DB, tiene acceso a un historial con fechas y detalles de cada gasto, etc.

Un usuario puede:
Registrarse
Login | Logout
Ingresar un nuevo movimiento, el cual puede ser un ingreso o egreso de dinero.
Acceder a la información de su cuenta.
La base de datos consta de 3 entidades principales:

USERS: Cada usuario registrado tiene asociado un id único, nombre completo, email y password.
MOVEMENTS: Cada movimiento registrado en la app tiene asociado un id unico, un timestamp en formato ISO, transactionInfo: 'income' | 'outcome', amount que es un valor numérico decimal y tags: string[] con un valor de máximo 3 tags (['food', 'supermarket', 'dessert'] por ejemplo).
ACCOUNT: La cual tiene asociada el historial de movimientos de un usuario en history: object[], y el balance de la cuenta en balance que es un numero decimal que refleja la plata disponible o que debe.

EJERCICIO

Sistema de autenticacion de usuarios con auth mediante tokens.
CRUD a Firestore.
CRUD a PostgreSQL con Sequelize.
PASOS

Adjuntar un ERD de la DB al proyecto con drawSQL.
Endpoint de ping que devuelve estado del servidor y versión.
Hasheo de password al registrar usuario.
Utilizar middleware para validar el token. Enviar el token desde el cliente en el header que corresponda.
Crear y configurar archivo de configuración y carga de variables de entorno.



