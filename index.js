
for(var i=0;i<7;i++)
{
	document.getElementsByClassName("drum")[i].addEventListener("click",function()
		{
			var bttn=this.innerHTML;
			sound(bttn);
			bttn_animation(bttn);
		});
}

document.addEventListener("keypress",function(event)
	{
		key=event.key;
		sound(key);
		bttn_animation(key);
	});

function sound(content)
{
	//alert("listening..");
	var audio;
	switch(content)
	{
		case 'w':
			audio=new Audio('sounds/tom-1.mp3');
			audio.play();
			break;
		case 'a':
			audio=new Audio('sounds/tom-2.mp3');
			audio.play();
			break;
		case 's':
			audio=new Audio('sounds/tom-3.mp3');
			audio.play();
			break;
		case 'd':
			audio=new Audio('sounds/tom-4.mp3');
			audio.play();
			break;
		case 'j':
			audio=new Audio('sounds/snare.mp3');
			audio.play();
			break;
		case 'k':
			audio=new Audio('sounds/crash.mp3');
			audio.play();
			break;
		case 'l':
			audio=new Audio('sounds/kick-bass.mp3');
			audio.play();
			break;
		default:
			console.log(content);
			break;
	}
}

function bttn_animation(bttn)
{
	var active_bttn=document.querySelector("."+bttn);
	active_bttn.classList.add("pressed");
	setTimeout(function(){active_bttn.classList.remove("pressed")},100);
}