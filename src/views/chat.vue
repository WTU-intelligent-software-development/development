<template>
	<div class="main-left">
		<div class="container">
			<div class="search">
				<input type="text" class="searchInput" placeholder="请输入关键字..." onfocus="this.placeholder=''" onblur="this.placeholder='请输入关键字...'"/>
			</div>
			<div class="option">
				<div class="userList"><a href="#">用户列表</a></div>
				<div class="news"><a href="#">用户列表</a></div>
			</div>
		</div>
	<ul>
		<li>
			<div class="summarizing"></div>
			<div class="client">隔壁老王</div>
			<div class="dialogue">你好啊！！！</div>
		</li>
		<li>
			<div class="summarizing"></div>
			<div class="client">楼下老张</div>
			<div class="dialogue">您现在可以试试看了</div>
		</li>
		<li>
			<div class="summarizing"></div>
			<div class="client">对楼刘女士</div>
			<div class="dialogue">我应该很快就能完成了</div>
		</li>
		<li>
			<div class="summarizing"></div>
			<div class="client">kiity</div>
			<div class="dialogue">你好啊！！！</div>
		</li>
		<li>
			<div class="summarizing"></div>
			<div class="client">sunny</div>
			<div class="dialogue">你好啊！！！</div>
		</li>
		<li>
			<div class="summarizing"></div>
			<div class="client">money</div>
			<div class="dialogue">你好啊！！！</div>
		</li>
		<li>
			<div class="summarizing"></div>
			<div class="client">honey</div>
			<div class="dialogue">你好啊！！！</div>
		</li>
	</ul>
	</div>
	<div class="chatInterface">
		<div class="head">
			<div class="avatar-top"></div>
			<div class="nickname">昵称示例</div>
			<div class="offline">离线--3小时前查看</div>
		</div>
		<div class="picture">
			<div class="a">&nbsp;&nbsp;嗨zsy你怎么了?</div>
			<div class="b">&nbsp;&nbsp;这个图标注的对吗</div>
			<div class="c">&nbsp;&nbsp;我有点担心...</div>
			<div class="d">&nbsp;&nbsp;我记得所有的事情，您就放心吧</div>
		</div>
		<div class="conversation">
			<input type="text" class="enter" placeholder="在这里输入信息..." onfocus="this.placeholder=''" onblur="this.placeholder='在这里输入信息...'"/>
			<div class="font">
			<i class="iconfont">&#xe63b;</i>
		    <i class="iconfont">&#xe610;</i>
		    <i class="iconfont ">&#xe6e1;</i>
		    <i class="iconfont ">&#xe652;</i>
            </div>
		</div>
	    
	</div>
	<div class="main-right">
		<div class="avatar-right"></div>
		<div class="name">名称</div>
		<div><a href="#" class="introduction">群简介</a></div>
		<div class="app">
			<i class="iconfont-app weixin">&#xe66c;</i>
			<i class="iconfont-app douyin">&#xe600;</i>
			<i class="iconfont-app weibo">&#xe66b;</i>
		</div>
		<table>
			<tr>
				<td>电话</td>
				<td>+(86)45550110</td>
			</tr>
			<tr>
				<td>Email</td>
				<td>info@undesigner.im</td>
			</tr>
			<tr>
				<td>DOB</td>
				<td>14.05.1992</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* Project id 4481360 */
  src: url('//at.alicdn.com/t/c/font_4481360_xl4hcv02gdq.woff2?t=1711450585113') format('woff2'),
       url('//at.alicdn.com/t/c/font_4481360_xl4hcv02gdq.woff?t=1711450585113') format('woff'),
       url('//at.alicdn.com/t/c/font_4481360_xl4hcv02gdq.ttf?t=1711450585113') format('truetype');
}
.container{
	width: 250px;
	height: 5dvh;
	position: relative;
}
.search{
	position: absolute;
	top:10px;
	left: 10px;
}
.searchInput{
	width: 285px; 
	height: 30px; 
	color: rgb(62, 62, 62);
	border: rgb(181, 185, 185); 
    border-style: solid;
	outline: none;
}
.option{
	position: absolute;
	top: 55px;
}
.userList{
    float: left;	
	width: 90px;
	height: 26px;
	border-style:solid ;
	border-color: rgb(189, 213, 189);
	text-align:cconversation;
	line-height: 26px;
	padding-left: 30px;
}
.userList:active{
	background-color: rgb(189, 213, 189);
}
.userList:hover{
	background-color: rgb(189, 213, 189);
}
.news{
	float: left;
	width: 90px;
	height: 26px;
	border-style:solid ;
	border-color: rgb(189, 213, 189);
	text-align:cconversation;
	line-height: 26px;
	padding-left: 30px;
}
.news:hover{
	background-color: rgb(189, 213, 189);
}
ul{ 
	list-style-type: none;
}
li:hover{
	background-color: rgb(199, 218, 237);
	border-left-style:solid ;
	border-left-color: rgb(16, 27, 194);
}
.main-left{
	width: 320px;
	height: 606px;
	background-color: rgb(255, 255, 255);
	float: left;
}
ul li{
   height: 70px;
   width: 320px; 
   border-bottom-style:solid;
   border-bottom-color: rgb(200, 205, 205);
   position: relative;
}
.summarizing{
	background-image: url("image3.png");
	width: 40px;
	height: 40px;
	position: absolute;
	top: 15px;
	left: 20px;
}
.client{
	position: absolute;
	left: 80px;
	top:17px;
}
.dialogue{
	position: absolute;
	left: 80px;
	top:40px;
	font-size: small;
}
.chatInterface{
	float: left;
}
.enter{
	width: 500px; 
	height: 30px; 
	color: rgb(38, 39, 39);
	border: rgb(226, 228, 228); 
	background-color: rgb(219, 221, 222);
    border-style: solid;
	border-radius: 15px;
	outline: none;
}
.head{
	background-color: rgb(255, 255, 255);
	width: 797px;
	height: 60px;
	position: relative;
	border-bottom-style:solid ;
	border-bottom-color:rgb(221, 212, 212) ;
}
.avatar-top{
	background-image: url("image3.png");
	width: 40px;
	height: 40px;
	position: relative;
	top: 8px;
	left: 20px;
}
.nickname{
	position: absolute;
	left:70px;
	top:7px;
}
.offline{
	position:absolute;
	top:30px;
	left: 70px;
	font-size: xx-small;
	color: rgb(142, 142, 143);
}
.picture{
	background-color: white;
	width: 797px;
	height: 520px;
	position: relative;
}

.a{
	position: absolute;
	top: 60px;
	left: 50px;
	width: 150px;
	height: 40PX;
	background-color: white;
	box-shadow: 5px 2px 5px 5px rgb(149, 146, 146);
	border-radius: 20px;
	line-height: 40px;
}
.a::before {  
  content: "";
  display: block;
  position: absolute;
  left: 2px;  
  top: 26px;   
  border-width: 7.3px;
  border-style: dashed  solid  dashed  dashed;
  border-color: white white transparent transparent;
  transform: rotate(179deg);
  box-shadow: 1px -6px 3px rgb(149, 146, 146);
}
.b{
	position: absolute;
	top: 150px;
	left: 600px;
	width: 150PX;
	height: 40PX;
	background-color: rgb(247, 116, 116);
	border-radius: 20px;
	line-height: 40px;
	box-shadow: 5px 2px 5px 5px rgb(231, 190, 190);
}
.b::before {  
  content: "";
  display: block;
  position: absolute;
  right: 2px;  
  top: 25.5px;   
  border-width: 7.7px;
  border-style: dashed  solid  dashed  dashed;
  border-color: rgb(247, 116, 116) rgb(247, 116, 116) transparent transparent;
  transform: rotate(90deg);
  box-shadow: 6px -5px 3px rgb(231, 190, 190);
}
.c{
	position: absolute;
	top: 220px;
	left: 50PX;
	width: 150PX;
	height: 40PX;
	background-color: white;
	box-shadow: 5px 2px 5px 5px rgb(149, 146, 146);
	border-radius: 20px;
	line-height: 40px;
}
.c::before {  
  content: "";
  display: block;
  position: absolute;
  left: 2px;  
  top: 26px;   
  border-width: 7.3px;
  border-style: dashed  solid  dashed  dashed;
  border-color: white white transparent transparent;
  transform: rotate(179deg);
  box-shadow: 1px -6px 3px rgb(149, 146, 146);
}
.d{
	position: absolute;
	top: 350px;
	left: 500px;
	width: 250PX;
	height: 40PX;
	background-color: rgb(247, 116, 116);
	border-radius: 20px;
	line-height: 40px;
	box-shadow: 5px 2px 5px 5px rgb(231, 190, 190);
}
.d::before {  
  content: "";
  display: block;
  position: absolute;
  right: 2px;  
  top: 25.5px;   
  border-width: 7.7px;
  border-style: dashed  solid  dashed  dashed;
  border-color: rgb(247, 116, 116) rgb(247, 116, 116) transparent transparent;
  transform: rotate(90deg);
  box-shadow: 6px -5px 3px rgb(231, 190, 190);
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  letter-spacing: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor:default;
  color: rgb(87, 86, 86);
}
.iconfont:hover{
  transform: scale(1.3);
  color: red;
  cursor:default;
  font-weight: bolder;
}
.font{
	top: 7px;
	position: absolute;
	left: 550px;
	width: 100px;
	float: right;
}
input{
	float: left;
}
.conversation{
	position: relative;
}
.main-right{
	float: right;
	width: 270px;
	height: 600px;
	background-color: rgb(255, 255, 255);
	position: relative;
}
.name{
	height: 300px;
	position: absolute;
	top:200px;
	left:125px;
	font-size: larger;
}
.avatar-right{
	background-image: url("image2.png");
	background-position: -26px;
	width: 150px;
	height: 150px;
	border: 1px solid black;
	border-radius: 100%;
	position: relative;
	top: 40px;
	left: 65px;
}
.introduction{
	position: absolute;
	top:270px;
	left:125px;
	font-size: small;
	color: black;
}
a{
	color: black;
}
.app{
	width: 140px;
	height: 70px;
	position: relative;
	top: 160px;
	left: 60px;
}
.iconfont-app{
	font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  letter-spacing: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor:default;
}
.weixin{
	color: rgb(46, 215, 12);
}
.weibo{
	color: rgb(251, 8, 8);
}
.main-right table{
	top:380px;
	left: 30px;
    color: rgb(124, 123, 123);
	width: 220px; 
	height: 100px;
	border-top-style: solid;
	border-top-color: rgb(223, 227, 229);
	border-bottom-style: solid;
	border-bottom-color: rgb(211, 214, 216);
	position: absolute;
	text-align: right;
}
</style>