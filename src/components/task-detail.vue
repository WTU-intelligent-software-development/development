<template>
	<el-descriptions title="" :column="2" border>
		<el-descriptions-item>
			<template #label> 用户ID </template>
			{{ data.id }}
		</el-descriptions-item>
		<el-descriptions-item>
			<template #label> 用户名 </template>
			{{ data.name }}
		</el-descriptions-item>
		<el-descriptions-item>
			<template #label> 用户账号</template>
			{{ data.money }}
		</el-descriptions-item>
		<el-descriptions-item>
			<template #label> 是否提交 </template>
			{{ data.state ? '是' : '否' }}
		</el-descriptions-item>
		<el-descriptions-item :span="2">
			<template #label> 是否审核 </template>
			{{ data.address ? '审核' : '未审核'}}
		</el-descriptions-item>
		<el-descriptions-item>
			<template #label> 截止日期 </template>
			{{ data.date }}
		</el-descriptions-item>
		<el-descriptions-item>
			<template #label> 图片 </template>
			<img :src="data.thumb" style="width: 120px" alt="" />
		</el-descriptions-item>
	</el-descriptions>
</template>

<script lang="ts" setup>
const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});
</script>
