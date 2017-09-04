let canvas = document.getElementById("hangman")


canvas.width=innerWidth;
canvas.height=innerHeight;


let context=canvas.getContext('2d');
// context.fillStyle="red";
// context.fillRect(100,100,100,100);
// context.fillStyle="green";
// context.fillRect(200,200,100,100);
//body



context.beginPath();
context.moveTo(300,330);
context.lineTo(300,500);

context.strokeStyle="black"
context.stroke()
//head
context.beginPath()
context.arc(100,100,30,0, Math.PI*2, false);
context.stroke();
//left arm
context.beginPath();
context.moveTo(300,350);
context.lineTo(250,450);
context.strokeStyle="black"
context.stroke();
//right arm
context.beginPath();
context.moveTo(300,350);
context.lineTo(350,450);
context.strokeStyle="black"
context.stroke()



//left leg
context.beginPath();
context.moveTo(300,500);
context.lineTo(350,550);
context.strokeStyle="black"
context.stroke();
//right leg
context.beginPath();
context.moveTo(300,500);
context.lineTo(250,550);
context.strokeStyle="black"
context.stroke();


//gallow tall piece
context.beginPath();
context.moveTo(100,100);
context.lineTo(100,650);
context.strokeStyle="black"
context.stroke();

//gallow bottom
context.beginPath();
context.moveTo(20,650);
context.lineTo(300,650);
context.strokeStyle="black"
context.stroke();

//gallow top
context.beginPath();
context.moveTo(100,100);
context.lineTo(300,100);
context.strokeStyle="black"
context.stroke()

//hang
context.beginPath();
context.moveTo(300,100);
context.lineTo(300,271);
context.strokeStyle="black"
context.stroke()




// context.clearRect(0, 0, canvas.width, canvas.height);


