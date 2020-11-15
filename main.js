var hashLetterToColor = function(hashLetter)
{
	switch (hashLetter) {
		case "0":
			return "#ccffffff";
		case "1":
			return "#7affffff";
		case "2":
			return "#33ffffff";
		case "3":
			return "#00d6d6ff";
		case "4":
			return "#ccf1ffff";
		case "5":
			return "#7adcffff";
		case "6":
			return "#29c6ffff";
		case "7":
			return "#009dd6ff";
		case "8":
			return "#cce4ffff";
		case "9":
			return "#7ab8ffff";
		case "a":
			return "#298cffff";
		case "b":
			return "#0064d6ff";
		case "c":
			return "#ccd6ffff";	
		case "d":
			return "#7a95ffff";
		case "e":
			return "#2954ffff";
		case "f":
			return "#002bd6ff";
	}	
}

var hashToColors = function(hashString)
{
	var colorsArr = [];
	for (var i = 0; i < hashString.length; i++) {
		colorsArr.push(hashLetterToColor(hashString[i]));
	}
	return colorsArr;
}

var arrToMatrix = function(inArr)
{
	var readyMatrix = [];
	for (var i = 0; i < 64; i = i + 8) {
		readyMatrix.push([
			inArr[i],
			inArr[i + 1],
			inArr[i + 2],
			inArr[i + 3],
			inArr[i + 4],
			inArr[i + 5],
			inArr[i + 6],
			inArr[i + 7]
		]);
	}
	return readyMatrix;
}

function getHash()
{
	var textToHash = document.getElementById("textToHash").value;
	var myHash = sha3_256(textToHash);
	var myColouredHash = hashToColors(myHash);
	var myColouredMatrix = arrToMatrix(myColouredHash);
	var c = document.getElementById("myCanvas");

	var ctx = c.getContext("2d");
	var barH = 32; 
	var crX, crY
 
	for (var i = 0; i < myColouredMatrix.length; i++) {
		for (var j = 0; j < myColouredMatrix[0].length; j++) {
			ctx.beginPath();
			crX = i * barH;
			crY = j * barH;
			ctx.rect(crX, crY, barH, barH);
			ctx.fillStyle = myColouredMatrix[i][j];
			ctx.fill();
		}
	}
	/*
	c.toBlob(function(blob) {
	    var newImg = document.createElement('img'),
		    url = URL.createObjectURL(blob);

	    newImg.onload = function() {
		    // no longer need to read the blob so it's revoked
		    URL.revokeObjectURL(url);
	    };

	    newImg.src = url;
	    document.body.appendChild(newImg);
    })*/
}
