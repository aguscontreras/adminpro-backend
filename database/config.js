const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CNN);
		console.log('DataBase online');
	} catch (error) {
		console.log(error);
		throw new Error('Error al iniciar la base de datos');
	}
};

module.exports = {
	dbConnection,
};
