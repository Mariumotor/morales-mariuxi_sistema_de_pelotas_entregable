class Pelota {
	constructor() {
		this.posX = random(50, windowWidth - 50);
		this.posY = random(10, 130);
		this.velX = random(-20, 20);
		this.velY = 0.0;
		this.acelY = 0.98;
		this.diam = int(random(5, 50));
		this.rad = this.diam / 2;
		this.isCircle = true; // Variable para determinar si es un círculo o un cuadrado
		this.colorin = this.generateRandomColor(); // Genera un color aleatorio inicial
	}

	update(_piso) {
		if (this.posY + this.rad <= _piso) {
			this.velY += this.acelY;
			this.posY += this.velY;
		} else {
			this.velY *= -1.0;
			this.posY += this.velY;
			this.colorin = this.generateRandomColor(); // Cambiar de color al rebotar
			this.isCircle = !this.isCircle; // Cambiar de forma al rebotar
		}

		if (this.posX > windowWidth) {
			this.velX *= -1;
		}
		if (this.posX < 0) {
			this.velX *= -1;
		}
		this.posX += this.velX;
	}

	display() {
		fill(this.colorin);
		if (this.isCircle) {
			circle(this.posX, this.posY, this.diam);
		} else {
			rect(this.posX - this.rad, this.posY - this.rad, this.diam, this.diam);
		}
	}

	generateRandomColor() {
		return color(20, random(100, 255), random(0, 150));
	}
}