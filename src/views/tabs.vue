<template>

	<!-- 
		未完成：
		问题页码
		点击文章标题进入文章页面
		点击搜索进行搜索
		点击搜索词和标签进行搜索

		问题：
		放大缩小时盒子位置出现问题
	 -->

	<div class="container">
		<!-- 顶部绿框 -->
		<div class="header">
			<!-- 样式在main.css -->
			论坛
			<div>
				<p>
					<i class="iconfont">&#xe622;</i>
					<input type="text" name="search" id="search" placeholder="请输入关键字">
					<button>搜索</button>
				</p>

				<ul>
					<li>搜索词：</li>
					<li><a href="#">知识管理</a></li>
					<li><a href="#">知识</a></li>
					<li><a href="#">指引</a></li>
					<li><a href="#">小技能</a></li>
					<li><a href="#">手册</a></li>
				</ul>
				<ul>
					<li>标签:</li>
					<li><a href="#">财务</a></li>
					<li><a href="#">项目</a></li>
					<li><a href="#">营销</a></li>
					<li><a href="#">研发</a></li>
					<li><a href="#">管理</a></li>
				</ul>
			</div>

		</div>

		<!-- 中间主体 -->
		<div class="discuss" style="height: 100%;">
			<span class="title">问答专区</span>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="最新" name="first">
					<div class="tab-content">
						<ul class="item active">
							<div>
								<li>
									<a href="#">如何提高项目交付质量</a>
									<p>梁晓峰</p>
									<span>2024-03-05</span>
								</li>
							</div>
							<div>
								<li>
									<a href="#">这个图怎么画</a>
									<p>李三</p>
									<span>2024-03-20</span>
								</li>

							</div>
							<div>
								<li>
									<a href="#">图片的标注方法？</a>
									<p>王芳</p>
									<span>2024-02-28</span>
								</li>

							</div>
						</ul>
					</div>
				</el-tab-pane>
				<el-tab-pane label="最热" name="second">
					<div class="tab-content">

						<ul class="item active">
							<li>如何交付项目</li>
							<li>怎么画图</li>
							<li>标注方法？</li>
						</ul>
					</div>
				</el-tab-pane>
			</el-tabs>

			<div class="line"></div>
		</div>
		<!-- 分页导航 -->
		<div class="block" style="margin-bottom: 20px;">
			<!-- <span class="demonstration">页数较少时的效果</span> -->
			<el-pagination layout="prev, pager, next" :total="50">
			</el-pagination>
		</div>

		<!-- 问题发布 -->
		<el-button type="warning" @click="visible = true">提问</el-button>
		<el-dialog v-model="visible" width="900px" destroy-on-close :close-on-click-modal="false" @close="closeDialog">
			<TableEdit :data="rowData" :edit="idEdit" :update="updateData" />
		</el-dialog>

	</div>

</template>
<script setup lang="ts" name="tabs">
import TableEdit from '../components/tabs-table.vue';
import { ref } from 'vue';
let idx: number = -1;
const visible = ref(false);
const idEdit = ref(false);
const rowData = ref({});
const activeName = 'first';
interface TableItem {
	id: number;
	name: string;
	// thumb: string;
	money: number;
	state: string;
	date: string;
	address: string;
	partment: string;
}
const tableData = ref<TableItem[]>([]);
const updateData = (row: TableItem) => {
	idEdit.value ? (tableData.value[idx] = row) : tableData.value.unshift(row);
	console.log(tableData.value);
	closeDialog();
};
const closeDialog = () => {
	visible.value = false;
	idEdit.value = false;
};

const handleClick = (tab, event) => {
	console.log(tab, event);
};

</script>
<style>
@font-face {
	font-family: 'iconfont';
	/* Project id 4478572 */
	src: url('http://at.alicdn.com/t/c/font_4478572_e4j3kqcy526.woff2?t=1711152681558') format('woff2'),
		url('http://at.alicdn.com/t/c/font_4478572_e4j3kqcy526.woff?t=1711152681558') format('woff'),
		url('http://at.alicdn.com/t/c/font_4478572_e4j3kqcy526.ttf?t=1711152681558') format('truetype');
}

.iconfont {
	font-family: "iconfont" !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.container .header {
	display: flex;
	width: 100%;
	height: 200px;
	color: #fff;
	font-weight: 700;
	font-size: 24px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #d3ddd4;
}

.container .header p {
	width: 550px;
	height: 40px;
	display: flex;
	margin-top: 15px;
	margin-bottom: 15px;
	background-color: #fff;
	font-size: 20px;
	border-radius: 5px;
	line-height: 30px;
	position: relative;
}

.container .header p i {
	width: 40px;
	/* background-color: #27cba9; */
	color: #b2b2b2;
	font-size: 25px;
	text-align: center;
	border-radius: 5px;
	line-height: 40px;
	/* margin-left: 10px; */
}

.container .header p input {
	width: 100%;
	border: none;
	/* border-radius: 10px; */
	color: #757575;
	/* padding-left: 10px; */
	border-radius: 5px;
	outline: none;
}

.container .header p button {
	border: none;
	width: 120px;
	background-color: #27cba9;
	color: #fff;
	text-align: center;
	border-radius: 0 5px 5px 0;

}

.container .header ul {
	display: flex;
	justify-content: center;
}

.container .header ul li {

	padding: 0 15px;
	list-style-type: none;
	font-size: 16px;
	font-weight: 400;
}

.container .header ul li a {
	color: #fff;
}

.discuss {
	/* height: 330px; */
	display: flex;
	width: 100%;
	flex-direction: column;
}



span {
	width: 100%;
	height: 35px;
	margin-top: 20px;
	margin-bottom: 10px;
}

.title {
	border-bottom: 1px solid #b2b2b2;
}

.tab {
	width: 100%;
	height: 30px;
	line-height: 30px;
	display: flex;
	justify-content: space-between;
	font-size: 24px;
	font-weight: normal;
}

.tab ul {
	list-style: none;
	display: flex;
	justify-content: flex-end;
}

.tab ul li a {
	margin: 0 15px;
	font-size: 14px;
	cursor: pointer;
	text-decoration: none;
	color: #000;
	border-bottom: 3px solid transparent;
}

.tab ul li a.active {
	/* font-weight: 700; */
	border-color: #27cba9;
	color: #27cba9;
}


.tab-content {
	margin-top: 10px;
	margin-bottom: 20px;
}

.tab-content .item {
	display: none;
}

.tab-content .item.active {
	display: block;
}

.tab-content .item li {
	display: flex;
	align-items: center;
	line-height: 20px;
	height: 20px;
	position: relative;
	width: 100%;
	margin: 10px;

}

.tab-content .item li a {
	position: absolute;
	left: 0;
	color: #000;
}

.tab-content .item li p,
.tab-content .item li span {
	position: absolute;
	color: #b2b2b2;
	border: none;
	width: 90px;
}

.tab-content .item li span {
	right: 0;
	margin-bottom: 3px;
}

.tab-content .item li p {
	right: 90px;
}
</style>
