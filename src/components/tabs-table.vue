<template>
  <div class="edit-container">
    <el-form style="padding: 1rem;" :model="form" label-width="4rem" :rules="rules" ref="ruleFormRef">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" />
      </el-form-item>
      <!-- 问题： -->
      <!-- 选择标签无数据 -->
      <el-form-item label="标签" prop="tagId">
        <el-select v-model="form.tagId" style="width: 10rem;" placeholder="请选择标签">
          <el-option v-for="item in tagInfo" :key="item._id" :value="item._id" :label="item.name" />
        </el-select>
      </el-form-item>
      <el-form-item class="editor-container" label="内容" style="text-align: left;">
        <wangEditor @getContent="getContent" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitFormAdd(ruleFormRef)">立即创建</el-button>
        <!-- <el-button @click="$router.push('/')">返回</el-button> -->
      </el-form-item>
    </el-form>

  </div>

</template>

<script lang="ts" setup>
  import { ElMessage } from 'element-plus';
  import wangEditor from '@/components/wangEditor.vue'
  import { ref } from 'vue';
  import { ElMessageBox } from 'element-plus';
  import { userStore } from '@/store/userStore.ts'
  import { storeToRefs } from 'pinia';
  import { reactive, toRaw } from "vue";
  import { postStore } from '@/store/postStore.ts'
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const storePost = postStore()
  const { tagInfo } = storeToRefs(storePost)
  const storeUser = userStore()
  const { userHeaderInfo } = storeToRefs(storeUser)
  let editor;
  let form = reactive({
    title: '',
    content: '',
    tagId: '',
    authorId: userHeaderInfo.value._id
  })
  const rules = reactive({
    title: [
      { required: true, message: '请输入标题', trigger: 'blur' },
      { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
    ],
    tagId: [
      { required: true, message: '请勾选标签', trigger: 'change' }
    ]
  })
  const ruleFormRef = ref()
  const submitFormAdd = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        publish()
      } else {
        return false
      }
    })
  }
  async function publish() {
    try {
      form.authorId = userHeaderInfo.value._id
      await storePost.addPost(toRaw(form))
      ElMessage({
        message: '发表成功！',
        type: 'success',
      })
      router.replace(`/blank?redirect=/`)
    } catch (error) {
      ElMessage({
        message: error,
        type: 'error',
      })
    }

  }
  // 自定义事件 用于从editor子组件获取数据
  function getContent(val) {
    editor = val
    form.content = editor.getHtml()
  }

</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  .avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
</style>