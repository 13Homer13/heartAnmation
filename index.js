const bodyEl = document.body;


bodyEl.addEventListener("mousemove", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.top = y + "px";
    spanEl.style.left = x + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    
    setTimeout(()=>{
        spanEl.remove()
    }, 4000)

})

function genColor() {
	var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random()*16)];
	}
	return color;
};