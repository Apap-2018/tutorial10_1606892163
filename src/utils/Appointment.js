const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {
	getAllPasien() {
		return fetch(`${cors}${baseUrl}/1/getAllPasien`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		.then(jsonResponse => {
			return jsonResponse
		})
	},
	getDetailPasien(idPasien) {
		/** 
		 * TODO: Fetch detail data pasien
		 * @param idPasien
		 * @return detailPasien
		 */
	},
	updateStatusPasien(requestBody) {
		/** 
		 * TODO: POST data baru pasien ke SI-Appointment
		 * @param requestBody
		 * @return responseRequest
		 */
	}
}