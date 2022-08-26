<template>
  <page-container>
    <el-card shadow="always">
      <template #header>
        数据筛选
      </template>
      <el-form
        :inline="true"
        ref="form"
        :model="listPS"
        :disabled="listLoading"
        @submit.prevent="handleQuery"
      >
        <el-form-item label="状态">
          <el-select
            v-model="listPS.status"
            placeholder="请选择"
            clearable
          >
            <el-option
              label="全部"
              value=""
            />
            <el-option
              label="显示"
              :value="1"
            />
            <el-option
              label="不显示"
              :value="0"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="管理员名称">
          <el-input
            v-model="listPS.name"
            clearable
            placeholder="请输入身份昵称"
          />
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card shadow="always">
      <template #header>
        <el-button
          type="primary"
        >
          添加管理员
        </el-button>
      </template>
      <el-table
        :data="adminList"
        stripe
        style="width: 100%"
        v-loading="listLoading"
      >
        <el-table-column
          prop="id"
          label="ID"
        />
        <el-table-column
          prop="real_name"
          label="姓名"
        />
        <el-table-column
          prop="account"
          label="账号"
        />
        <el-table-column
          prop="roles"
          label="身份"
          min-width="180"
        >
          <template #default="scope">
            <el-space wrap>
              <el-tag
                class="role-tag"
                v-for="(item) in scope.row.roles.split(',')"
                :key="item"
              >
                {{ item }}
              </el-tag>
            </el-space>
          </template>
        </el-table-column>
        <el-table-column
          label="最后一次登录时间"
          prop="last_time"
        />
        <el-table-column
          label="最后一次登录IP"
          prop="last_ip"
        />
        <el-table-column label="状态">
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              :loading="scope.row.statusLoading"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          min-width="100"
          align="center"
        >
          <template #default="scope">
            <el-button
              v-model="scope.row.status"
              type="text"
            >
              编辑
            </el-button>
            <el-popconfirm
              title="确认删除吗？"
            >
              <template #reference>
                <el-button type="text">
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        v-model:page="listPS.page"
        v-model:limit="listPS.limit"
        :total="listCount"
        :disabled="listLoading"
      />
    </el-card>
  </page-container>
  <admin-form />
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { getAdminList } from '@/api/admin'
import type { IGetAdminListPs, IAdmin } from '@/api/types/adminTypes'

// loading 状态
const listLoading = ref(true)

/** 管理员查询 */
const handleQuery = async () => {
  listPS.page = 1
  loadAdmminList()
}

/** 展示管理员列表 */
const adminList = ref<IAdmin[]>([])
const listCount = ref(0)
const listPS: IGetAdminListPs = reactive({
  page: 1,
  limit: 10,
  name: '',
  roles: '',
  status: ''
})
// 请求管理员列表信息
const loadAdmminList = async () => {
  const { data } = await getAdminList(listPS)
  adminList.value = data.list
  // 修改 loading 状态
  listLoading.value = false
  // 修改 listCount
  listCount.value = data.count
}

onMounted(() => {
  // 调用 loadAdminList
  loadAdmminList()
})
</script>

<style lang="less" scoped>
  .el-select {
    width: 100%;
  }
</style>
