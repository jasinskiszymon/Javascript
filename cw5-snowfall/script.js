window.onload = function() {
	const canvas = document.getElementById('snow');
	const ctx = canvas.getContext('2d');
	const W = window.innerWidth ;
	const H = window.innerHeight;
	canvas.height = H;
    canvas.width = W;

	
	const maxF = 300;
	let flakes = [];
	
	for (let i = 0; i < maxF; i++) {
		flakes.push({
			x: Math.random() * W,
			y: Math.random() * H,
			r: Math.random() * 10,
			d: Math.random() + 1
			
		});
	}
	
	
	function drawFlakes() {
		ctx.beginPath();
		ctx.clearRect(0, 0, W, H);
		ctx.fillStyle = 'white';
		
		
		for(let i = 0; i < maxF; i++) {
			let f = flakes[i];
			ctx.moveTo(f.x, f.y);
			ctx.arc(f.x, f.y, f.r, 10, Math.PI, true);
		}
		ctx.fill();
		moveFlakes();
	}
	
	function moveFlakes() {
		for(let i = 0; i < maxF; i++) {
			let f = flakes[i];
			f.y += Math.pow(f.d, 4) + 1;
			if(f.y > H) {
				flakes[i] = {
					x: f.x,
					y: 0,
					r: f.r,
					d: f.d
				};
			}
			
		}
		
	}
	setInterval(drawFlakes, 20);
	
}