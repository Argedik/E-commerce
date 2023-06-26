import axios from 'axios';

axios
	.get('http://localhost:3000/images/all-images')
	.then(function (response) {
		// istek başarılı olduğunda burası çalışır
		console.log(response.data); // bu, resim URL'lerini konsola yazdırır
	})
	.catch(function (error) {
		// istek hata verdiğinde burası çalışır
		console.log('Hata oluştu:', error);
	});
console.log('deneme', 'front-end/index.ts calisti');

axios
	.get('http://localhost:3000/messages/header-messages')
	.then(function (response) {
		// istek başarılı olduğunda burası çalışır
		console.log(response.data); // bu, istenilen objeyi konsola yazdırır
	})
	.catch(function (error) {
		// istek hata verdiğinde burası çalışır
		console.log('Hata oluştu2:', error);
	});
