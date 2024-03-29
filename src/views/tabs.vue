<template>
	<div class="container">
		<el-tabs v-model="message">
			<el-tab-pane :label="`未读消息(${state.unread.length})`" name="first">
				<el-table :data="state.unread" :show-header="false" style="width: 100%">
					<el-table-column>
						<template #default="scope">
							<span class="message-title">{{ scope.row.title }}</span>
						</template>
					</el-table-column>
					<el-table-column prop="date" width="180"></el-table-column>
					<el-table-column width="120">
						<template #default="scope">
							<el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div class="handle-row">
					<el-button type="primary">全部标为已读</el-button>
				</div>
			</el-tab-pane>
			<el-tab-pane :label="`已读消息(${state.read.length})`" name="second">
				<template v-if="message === 'second'">
					<el-table :data="state.read" :show-header="false" style="width: 100%">
						<el-table-column>
							<template #default="scope">
								<span class="message-title">{{ scope.row.title }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="date" width="180"></el-table-column>
						<el-table-column width="120">
							<template #default="scope">
								<el-button type="danger" size="small" @click="handleDel(scope.$index)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<div class="handle-row">
						<el-button type="danger">删除全部</el-button>
					</div>
				</template>
			</el-tab-pane>
			<el-tab-pane :label="`回收站(${state.recycle.length})`" name="third">
				<template v-if="message === 'third'">
					<el-table :data="state.recycle" :show-header="false" style="width: 100%">
						<el-table-column>
							<template #default="scope">
								<span class="message-title">{{ scope.row.title }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="date" width="180"></el-table-column>
						<el-table-column width="120">
							<template #default="scope">
								<el-button size="small" @click="handleRestore(scope.$index)">还原</el-button>
							</template>
						</el-table-column>
					</el-table>
					<div class="handle-row">
						<el-button type="danger">清空回收站</el-button>
					</div>
				</template>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts" name="tabs">
import { ref, reactive } from 'vue';

// 获取导航栏
const tab = document.querySelectorAll('.tab a')
// 获取切换内容的数组
// const pane = document.querySelectorAll('.tab-content .item')
for (let i = 0; i < tab.length; i++) {
	tab[i].addEventListener('mouseenter', function () {
		// 排他思想（移除类+添加类）
		document.querySelector('.tab .active').classList.remove('active')
		this.classList.add('active')
		document.querySelector('.tab-content .active').classList.remove('active')
		// 对应序号显示
		document.querySelector(`.tab-content .item:nth-child(${i + 1})`).classList.add('active')
	})
}

import TableEdit from '../components/tabs-table.vue';
import { ref, reactive } from 'vue';
let idx: number = -1;
const visible = ref(false);
const idEdit = ref(false);
const rowData = ref({});
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

const message = ref('first');
const state = reactive({
	unread: [
		{
			date: '2018-04-19 20:00:00',
			title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
		},
		{
			date: '2018-04-19 21:00:00',
			title: '今晚12点整发大红包，先到先得'
		}
	],
	read: [
		{
			date: '2018-04-19 20:00:00',
			title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
		}
	],
	recycle: [
		{
			date: '2018-04-19 20:00:00',
			title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
		}
	]
});

const handleRead = (index: number) => {
	const item = state.unread.splice(index, 1);
	state.read = item.concat(state.read);
};
const handleDel = (index: number) => {
	const item = state.read.splice(index, 1);
	state.recycle = item.concat(state.recycle);
};
const handleRestore = (index: number) => {
	const item = state.recycle.splice(index, 1);
	state.read = item.concat(state.read);
};
</script>

<style>
.message-title {
	cursor: pointer;
}

.handle-row {
	margin-top: 30px;
}
</style>
