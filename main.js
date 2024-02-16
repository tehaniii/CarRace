function drawCar(x, y, color, no, windowColor1, windowColor2) {
    // draw bar
    ctx.fillStyle = color;
    ctx.fillRect(x + 45, y, 25, 20);

    // body
    ctx.fillStyle = color;
    ctx.fillRect(x, y + 20, 110, 20);

    // draw windows
    ctx.fillStyle = windowColor1;
    ctx.beginPath();
    ctx.moveTo(x + 70, y);
    ctx.lineTo(x + 110, y + 20);
    ctx.lineTo(x + 70, y + 20);
    ctx.fill();

    ctx.fillStyle = windowColor2;
    ctx.beginPath();
    ctx.moveTo(x + 45, y);
    ctx.lineTo(x + 10, y + 20);
    ctx.lineTo(x + 45, y + 20);
    ctx.fill();

    // box
    ctx.strokeStyle = "white";
    ctx.strokeRect(x + 45, y + 15, 20, 20);

    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(no, x + 45, y + 30);

    // draw wheels
    ctx.beginPath();
    ctx.arc(x + 30, y + 40, 15, 0, 2 * Math.PI, true);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x + 80, y + 40, 15, 0, 2 * Math.PI, true);
    ctx.fillStyle = "blue";
    ctx.fill();
}

function createCar() {
    y1 = 100;
    while (cars.length < 4) {
        c = new Car({
            x: 1100,
            y: y1,
            color: "#" + colors[cars.length],
            no: random(1, 99)
        });

        // Generate random window colors for each car
        let windowColorIndex1 = random(0, colors.length - 1);
        let windowColorIndex2;
        do {
            windowColorIndex2 = random(0, colors.length - 1);
        } while (windowColorIndex1 === windowColorIndex2);

        let windowColor1 = "#" + colors[windowColorIndex1];
        let windowColor2 = "#" + colors[windowColorIndex2];

        c.drawCar(c.x, c.y, c.color, c.no, windowColor1, windowColor2);
        cars.push(c);
        y1 += 100;
    }
}


function selectColor(cols) {
    for (i = 0; i < cols.length; i++) {
        let color = cols[i].hex;
        if (color != "000000" && color != "") {
            colors.push(color);
        }
    }
}




