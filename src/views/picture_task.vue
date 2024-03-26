<template>
  <div>
    <div class="container">
      <div class="search-box">
        <el-input v-model="query.name" placeholder="项目名称" class="search-input mr10" clearable></el-input>
        <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
        <!-- <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true">新增</el-button> -->
      </div>
      <div style="width: 30%; float:left">
        <div style="display: flex; justify-content: center; align-items: center; margin:40px;">
          <i class="iconfont icon-wenjian" style="font-size: 30px; font-weight: 500" />
          <p style="font-size: 15px;" @click="buttonEvent">所有文件</p>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin:40px;">
          <i class="iconfont icon-wenjianjia" style="font-size: 30px; font-weight: 500" />
          <p style="font-size: 15px;" @click="buttonEvent">图像文件</p>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin:40px;">
          <i class="iconfont icon-tupian" style="font-size: 30px; font-weight: 500" />
          <p style="font-size: 15px;" @click="buttonEvent">修复文件</p>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin:40px;">
        <button class="sbutton">新建文件架</button>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin:40px;">
        <button class="sbutton">创建文件架</button>
        </div>
      </div>
      <div style="width: 70%; float:right">
        <p id="floder_name" style="font-size: x-large">图像文件</p>
        <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
          <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
          <el-table-column prop="name" label="文件名" align="center"></el-table-column>
          <el-table-column label="状态" align="center">
            <template #default="scope">{{ scope.row.money }}</template>
          </el-table-column>
          <el-table-column prop="date" label="上传时间" align="center"></el-table-column>
          <el-table-column prop="address" label="文件大小" align="center"></el-table-column>

          <el-table-column label="图片信息（查看图）" align="center">
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
        </el-table>
        <div class="pagination" style="display: flex; justify-content: center; align-items: center">
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

    </div>
  </div>
</template>

<script setup lang="ts" name="basetable">
import '../assets/icons/iconfont/iconfont.css'    // 引入阿里云字体图标css
import {ref, reactive} from 'vue';
import {Delete, Search} from '@element-plus/icons-vue';
import echarts from "echarts";
function buttonEvent(e) {
  const myInput = document.getElementById('floder_name');
  myInput.innerText=e.target.innerText;
  console.log(myInput.innerText);
  console.log(e.innerText);
}
interface TableItem {
  id: number;
  name: string;
  thumb: string;
  money: number;
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
const getData = async () => {
  // 模拟获取数据
  const mockData = [
    {
      id: 1,
      name: '项目01',
      thumb: 'src\\pic\\1.jpg',
      money: "未发布",
      date: '2024-03-22',
      address: '1.0MB'
    },
    {
      id: 2,
      name: '项目02',
      thumb: 'src\\pic\\2.jpg',
      money: "已发布",
      date: '2024-03-20',
      address: '1.0MB'
    },
    {
      id: 3,
      name: '项目03',
      thumb: 'src\\pic\\3.jpg',
      money: "未发布",
      date: '2024-03-18',
      address: '1.0MB'
    },
    {
      id: 4,
      name: '项目04',
      thumb: 'src\\pic\\4.jpg',
      money: "审核通过",
      date: '2024-03-15',
      address: '1.0MB'
    },
    {
      id: 5,
      name: '项目05',
      thumb: 'src\\pic\\1.jpg',
      money: "审核通过",
      date: '2024-03-12',
      address: '1.0MB'
    },
    {
      id: 6,
      name: '项目06',
      thumb: 'src\\pic\\2.jpg',
      money: "审核通过",
      date: '2024-03-10',
      address: '1.0MB'
    },
    {
      id: 7,
      name: '项目07',
      thumb: 'src\\pic\\2.jpg',
      money: "审核通过",
      date: '2024-03-10',
      address: '1.0MB'
    },
    {
      id: 8,
      name: '项目08',
      thumb: 'src\\pic\\2.jpg',
      money: "审核通过",
      date: '2024-03-10',
      address: '1.0MB'
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

.sbutton {
  width: 50%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  //background-color: transparent;
  color: #ffffff;
  font-size: 1.0em;
  cursor: pointer;
  background: #45bd27;

}
</style>
