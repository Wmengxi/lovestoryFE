<template>
  <div class="left-bar-root">
    <user-info-box></user-info-box>
    <div class="seprator"></div>
    <div class="menu-list">
      <div class="menu-box">
        <div class="title">
          <span class="icon icon-people"></span>
          <span>交&nbsp;友&nbsp;记&nbsp;录</span>
        </div>
        <div class="item">谁看过我</div>
        <div class="item">我看过谁</div>
        <div class="item">谁关注我</div>
        <div class="item">我关注谁</div>
      </div>
      <div class="menu-box">
        <div class="title">
          <span class="icon icon-assignment"></span>
          <span>完&nbsp;善&nbsp;资&nbsp;料</span>
        </div>
        <div class="item">基本资料</div>
        <div class="item">内心独白</div>
        <div class="item">我的相册</div>
        <div class="item">详细资料</div>
        <div class="item">择偶条件</div>
      </div>
      <div class="menu-box">
        <div class="title">
          <span class="icon icon-settings"></span>
          <span>我&nbsp;的&nbsp;账&nbsp;号</span>
        </div>
        <div class="item">密码修改</div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfoBox from './UserInfoBox'

export default {
  components: { UserInfoBox }

}
</script>

<style lang="less">
.left-bar-root{
  width: 100%;
  background: white;
  .seprator{
    margin: 5px;
    height: 0;
    border-bottom: 1px solid #ddd;
  }
  .menu-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 15px;
    .menu-box{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
      .title{
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .icon{
          margin-left: -20px;
          width: 20px;
          font-size: 20px;
          margin-right: 10px;
        }
      }
      .item{
        font-size: 14px;
        margin-top: 6px;
        margin-bottom: 2px;
        margin-left: 7px;
        cursor: pointer;
      }
    }
  }
}
</style>
