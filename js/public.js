function $(ele){
	var ele=document.querySelectorAll(ele);
	if(ele.length==1){
		return ele[0];
	}else{
		return ele;
	}
}

function next(){
	index++;
	app_box.style.transition="top 0.01s"
	app_box.style.top=(-index*app_height)+"px";
}


function musicPlay(flag,music,src){
	if(flag){
		music.src=''
		music.pause()
	}else{
		music.src=src
		music.play()
	}
}


function show(ele){
	ele.style.visibility='visible'
}


function hide(ele){
	ele.style.visibility='hidden'
}


function opacity(ele,num){
	ele.style.opacity=num
	
}


function toggleClass(ele,cla){
	if(ele.classList.contains(cla)){
		ele.classList.remove(cla)
	}else{
		ele.classList.add(cla)
	}
}


function removeEle(ele){
	ele.parentNode.removeChild(ele)
}