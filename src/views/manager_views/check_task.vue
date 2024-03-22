<template>
	<div>
		<div class="container">
			<div class="search-box">
				<el-input v-model="query.name" placeholder="用户名" class="search-input mr10" clearable></el-input>
				<el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
				<!-- <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true">新增</el-button> -->
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
				<el-table-column prop="name" label="修复人员" align="center"></el-table-column>
				<el-table-column label="修复人员账号" align="center">
					<template #default="scope">{{ scope.row.money }}</template>
				</el-table-column>
				<el-table-column label="任务信息（查看图）" align="center">
					<template #default="scope">
						<el-image
							class="table-td-thumb"
							:src="scope.row.thumb"
							:z-index="10"
							:preview-src-list="[scope.row.thumb]"
							preview-teleported
						>
						</el-image>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="是否提交" align="center"></el-table-column>
				<el-table-column label="审核情况" align="center">
					<template #default="scope">
						{{ scope.row.state }}
					</template>
				</el-table-column>

				<el-table-column prop="date" label="截止时间" align="center"></el-table-column>
				<el-table-column label="操作" width="280" align="center">
					<template #default="scope">
						<el-button type="warning" size="small" :icon="View" @click="handleView(scope.row)">
							审核
						</el-button>
						<el-button
							type="primary"
							size="small"
							:icon="Edit"
							@click="handleEdit(scope.$index, scope.row)"
							v-permiss="15"
						>
							<!-- 编辑
						</el-button>
						<el-button
							type="danger"
							size="small"
							:icon="Delete"
							@click="handleDelete(scope.$index)"
							v-permiss="16"
						> -->
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					layout="total, prev, pager, next"
					:current-page="query.pageIndex"
					:page-size="query.pageSize"
					:total="pageTotal"
					@current-change="handlePageChange"
				></el-pagination>
			</div>
		</div>
		<el-dialog
			:title="idEdit ? '编辑用户' : '新增用户'"
			v-model="visible"
			width="500px"
			destroy-on-close
			:close-on-click-modal="false"
			@close="closeDialog"
		>
			<TableEdit :data="rowData" :edit="idEdit" :update="updateData" />
		</el-dialog>
		<el-dialog title="查看用户详情" v-model="visible1" width="700px" destroy-on-close>
			<TableDetail :data="rowData" />
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="basetable">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Delete, Edit, Search, CirclePlusFilled, View } from '@element-plus/icons-vue';
import { fetchData } from '../../api/index';
import TableEdit from '../../components/task-edit.vue';
import TableDetail from '../../components/task-detail.vue';

interface TableItem {
	id: number;
	name: string;
	thumb: string;
	money: number;
	state: string;
	date: string;
	address: string;
}

const query = reactive({
	address: '',
	name: '',
	pageIndex: 1,
	pageSize: 10
});
const tableData = ref<TableItem[]>([]);
const pageTotal = ref(0);
// 获取表格数据
// const getData = async () => {
// 	const res = await fetchData();
// 	tableData.value = res.data.list;
// 	pageTotal.value = res.data.pageTotal || 50;
// };
const getData = async () => {
    // 模拟获取数据
    const mockData = [
        {
            id: 1,
            name: '邓x',
            thumb: 'src\\pic\\1.jpg',
            money: 100,
            state: '已通过',
            date: '2024-03-22',
            address: '已提交'
        },
        {
            id: 2,
            name: '邓x',
            thumb: 'src\\pic\\2.jpg',
            money: 100,
            state: '未审核',
            date: '2024-03-20',
            address: '未提交'
        },
        {
            id: 3,
            name: '李幸x',
            thumb: 'src\\pic\\3.jpg',
            money: 200,
            state: '已通过',
            date: '2024-03-18',
            address: '已提交'
        },
        {
            id: 4,
            name: '李幸x',
            thumb: 'src\\pic\\4.jpg',
            money: 200,
            state: '返修中',
            date: '2024-03-15',
            address: '已提交'
        },
        {
            id: 5,
            name: '邹xx',
            thumb: 'src\\pic\\1.jpg',
            money: 300,
            state: '已通过',
            date: '2024-03-12',
            address: '已提交'
        },
        {
            id: 6,
            name: 'other',
            thumb: 'src\\pic\\2.jpg',
            money: 350,
            state: '未审核',
            date: '2024-03-10',
            address: '未提交'
        }
    ];

    // 将模拟数据赋值给表格数据和总数
    tableData.value = mockData;
    pageTotal.value = mockData.length;
};
getData();

// 查询操作
const handleSearch = () => {
	query.pageIndex = 1;
	getData();
};
// 分页导航
const handlePageChange = (val: number) => {
	query.pageIndex = val;
	getData();
};

// 删除操作
const handleDelete = (index: number) => {
	// 二次确认删除
	ElMessageBox.confirm('确定要删除吗？', '提示', {
		type: 'warning'
	})
		.then(() => {
			ElMessage.success('删除成功');
			tableData.value.splice(index, 1);
		})
		.catch(() => {});
};

const visible = ref(false);
let idx: number = -1;
const idEdit = ref(false);
const rowData = ref({});
const handleEdit = (index: number, row: TableItem) => {
	idx = index;
	rowData.value = row;
	idEdit.value = true;
	visible.value = true;
};
const updateData = (row: TableItem) => {
	idEdit.value ? (tableData.value[idx] = row) : tableData.value.unshift(row);
	console.log(tableData.value);
	closeDialog();
};

const closeDialog = () => {
	visible.value = false;
	idEdit.value = false;
};

const visible1 = ref(false);
const handleView = (row: TableItem) => {
	rowData.value = row;
	visible1.value = true;
};
</script>

<style scoped>
.search-box {
	margin-bottom: 20px;
}

.search-input {
	width: 200px;
}

.mr10 {
	margin-right: 10px;
}
.table-td-thumb {
	display: block;
	margin: auto;
	width: 40px;
	height: 40px;
}
</style>
