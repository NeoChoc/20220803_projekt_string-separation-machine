const trennung = (zeichenKette, trennungsPosition, trenner) => {
	const vordererTeil = document.getElementById('firstPart');
	const hintererTeil = document.getElementById('lastPart');

	const zK = zeichenKette;
	const tP = trennungsPosition;
	const tr = trenner;

	const zKl = zK.length;
	const tPStartI = zK.indexOf(tP);
	const tPEndI = zK.indexOf(tP) + tP.length;
	let vT = 0;
	let hT = 0;

	console.log(zKl);
	console.log(tPStartI);
	console.log(tPEndI);

	console.log(zK);
	console.log(tP);

	if (tPStartI === -1) {
		vT = 'Das Zeichen konnte leider nicht gefunden werden';
		hT = zKl;
	} else {
		switch (tr) {
			case tr === true:
				vT = zK.slice(0, tPStartI);
				hT = zK.slice(tPStartI);
				break;
			case tr === false:
				vT = zK.slice(0, tPEndI);
				hT = zK.slice(tPEndI);
				break;
			default:
				console.log('Fehler');
		}
	}

	vordererTeil.innerHTML = vT;
	hintererTeil.innerHTML = hT;
};

const validate = () => {
	const zeichenKette = document.getElementById('longEntry').value;
	const trennungsPosition = document.getElementById('shortEntry').value;
	const trenner = document.getElementById('lot_davor').checked;

	if ((zeichenKette && trennungsPosition && trenner) || (zeichenKette && trennungsPosition && !trenner)) {
		trennung(zeichenKette, trennungsPosition, trenner);
	} else {
		console.log('Missing input.');
	}
};
