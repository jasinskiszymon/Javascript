window.onload = function() {
	const canvas = document.getElementById('snow');
	const ctx = canvas.getContext('2d');
	const W = window.innerWidth ;
	const H = window.innerHeight;
	canvas.height = H;
    canvas.width = W;

	// sniezki
	const maxF = 300; //liczba sniezek
	let flakes = [];
	
	for (let i = 0; i < maxF; i++) {
		flakes.push({
			x: Math.random() * W,
			y: Math.random() * H,
			// Min=2,jako wylosowana = 0
			// Max=7, jako wylosowana = 1
			r: Math.random() * 5 + 2,
			// gestosc i predkosc pladkow
			d: Math.random() + 0.5
		});
	}
	
	// narysuj płatki w canvas'ie 
	function drawFlakes() {
		ctx.clearRect(0, 0, W, H);
		ctx.fillStyle = 'white';
		ctx.beginPath();
		
		for(let i = 0; i < maxF; i++) {
			let f = flakes[i];
			ctx.moveTo(f.x, f.y);
			//  zacznij od 0 do 2 obreczy, narysuj pełne koło...
			ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
		}
		ctx.fill();
		moveFlakes();
	}
	
	let angle = 0;
	
	function moveFlakes() {
		angle += 0.01;
		
		for(let i = 0; i < maxF; i++) {
			//przechowywać aktualny płatek sniegu, tzn --> flakes
			let f = flakes[i];
			// zaktualizuj współrzędne X i Y każdego płatka śniegu
			// podniesienie gęstości do kwadratu ^2
			f.y += Math.pow(f.d, 2) + 1; //wieksza gestosc --> zamienic 2 w nawiasie na 3 itd..
			f.x += Math.sin(angle) * 2;
			// Jeśli płatek śniegu dotrze do dołu, wyślij nowy na górę
			if(f.y > H) {
				flakes[i] = {
					x: Math.random() * W,
					y: 0,
					r: f.r,
					d: f.d
				};
			}
			
		}
		
	}
	
	setInterval(drawFlakes, 10);
	
}