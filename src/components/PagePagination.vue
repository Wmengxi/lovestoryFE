<template>
  <div class="page-pagination-box">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="Number(paginationData.size)"
      :total="Number(paginationData.total) || 1"
      @current-change="handlePageChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    paginationData: {
      type: Object,
      default: () => {
        return {
          current: 1,
          total: 1,
          size: 4
        }
      }
    }
  },
  methods: {
    handlePageChange (page) {
      this.$emit('change', page)
    }
  },
  mounted: function () {
    console.log(this.paginationData)
  }
}
</script>

<style lang="less">
.page-pagination-box {
  width: 400px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #F1356F;
    border: none;
  }
  .el-pagination.is-background .el-pager li:not(.disabled) {
    border: 1px solid grey;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):not(.active):hover {
    color: #F1356F;
  }
  .el-pagination {
    .btn-prev, .btn-next {
      border: 1px solid grey;
      box-sizing: border-box;
      width: 60px;
      background-color: white;
    }
    .el-icon-arrow-left:before, .el-icon-arrow-right:before {
      display: none;
    }
    .btn-prev:before {
      content: "上一页";
    }
    .btn-next:before {
      content: "下一页";
    }
  }
}

</style>
