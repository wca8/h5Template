var app=$('#app')
var app_box=$('#app_box')
var app_height=app.offsetHeight
var app_child=app_box.children
var count=app_child.length
// 设置全局页数索引
var index=1
// 设置节流阀
var flag=true

for(var i=0;i<count;i++){
    app_child[i].style.height=app_height+'px'
}
app_box.style.height=count*app_height+'px'
app_box.style.top=-index*app_height+'px'

var startY,moveY,differenceY
app_box.addEventListener('touchstart',function(e){
	startY=e.targetTouches[0].clientY
})

app_box.addEventListener('touchmove',function(e){
		if(flag){
			moveY=e.targetTouches[0].clientY
			differenceY=moveY-startY
			this.style.transition='none'
			this.style.top=(-index*app_height+differenceY)+'px'
		}
		
})

app_box.addEventListener('touchend',function(e){
	

		flag=false
		if(Math.abs(differenceY)>100){
			if(differenceY>0){
				index--
			}else{
				index++
			}
			this.style.transition='all 0.5s'
			this.style.top=(-index*app_height)+'px'
			
		}else if(Math.abs(differenceY)>0){
			
			this.style.transition='all 0.5s'
			this.style.top=(-index*app_height)+'px'
		
		}
		
		startY=0
		moveY=0
		differenceY=0
	
	
	
	
})

app_box.addEventListener('webkitTransitionEnd',function(){
	
	if(index>=count-1){
		index=1
		this.style.transition='none'
		this.style.top=(-index*app_height)+'px'
	}else if(index<0){
		index=count-2
		this.style.transition='none'
		this.style.top=(-index*app_height)+'px'
	}
	
	setTimeout(()=>{
		flag=true
	},200)
		
	
})

window.onresize=function(){
	app_height=app.offsetHeight
	for(var i=0;i<count;i++){
	    app_child[i].style.height=app_height+'px'
	}
	app_box.style.height=count*app_height+'px'
	app_box.style.top=-index*app_height+'px'
}

app_box.addEventListener('click',function(){
	console.log('click')
	flag=true
})

