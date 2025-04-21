import mongoose from "mongoose";

const connectDb = (uri: string) => {
	mongoose
		.connect(uri, { dbName: "node-starter" })
		.then((res) => {
			console.log(
				`database connected successfully \nhost : ${res.connection.host}  \nport : ${res.connection.port}`
			);
		})
		.catch((err) => {
			console.log("database connection failed : ", err);
			process.exit(1);
		});
};

export default connectDb;
