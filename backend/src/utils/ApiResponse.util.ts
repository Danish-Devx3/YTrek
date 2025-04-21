class ApiResponse {
	constructor(
		public statusCode: number,
		public success: boolean,
		public message: string,
		public data: any = []
	) {}
}
export default ApiResponse;
