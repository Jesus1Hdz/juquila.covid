const { Router } = require('express');
const router = Router();

// DATA COVID
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	//const response = await fetch('https://www.juquila.info/api/v1/data');
	const response = await fetch('/api/v1/data');
	const dataCovid = await response.json();
	//console.log(dataCovid);
    //res.json(dataCovid);
    
    // Funcion datos positivos x municipio
			var negativoxMunicipio = dataCovid.filter(item =>{
				return item.RESULTADO_LAB === '2';
            });
            res.json(negativoxMunicipio);
				//console.log("Casos Positivos: " + Object.keys(positivoxMunicipio).length);
					//casosPositivosStr=JSON.stringify(Object.keys(positivoxMunicipio).length);
						//var tblRow = "<span>" + casosPositivosStr + "</span>"
							//$(tblRow).appendTo("#printCasosPositivos");

});

router.get('/total', async (req, res) => {
	//const response = await fetch('https://www.juquila.info/api/v1/data');
	const response = await fetch('http://localhost:8080/api/v1/data');
	const dataCovid = await response.json();

			var positivoxMunicipio = dataCovid.filter(item =>{
				return item.RESULTADO_LAB === '2';
            });
			res.json(positivoxMunicipio.length);
			//res.json(positivoxMunicipio.id)
});

module.exports = router;