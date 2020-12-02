<template>
  <div class="yiyan">
    <div class="header" :style="{ backgroundColor: `${header}` }">
      <div class="title">
        <img :src="$config.ICON" />
        <span>{{$config.TITLE}}</span>
      </div>
    </div>
    <div class="hitokoto">
      <span>{{ hitokoto }}</span>
      <div>{{ froms }}&nbsp;&nbsp;&nbsp;{{ from_who }}</div>
    </div>
    <el-button :type="button" class="update" @click="handleUpdate"
      >下一个</el-button
    >
  </div>
</template>

<script>
function randomNum(minNum, maxNum) {
  //随机函数
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
import axios from "axios";
export default {
  data() {
    return {
      header: "", //头部颜色
      button: "", //按钮颜色
      lastTime: 0, //上一次点击的时间,默认为0
      hitokoto: "", //正文
      from: "", //出处
      froms: "", //
      from_who: "", //作者
    };
  },
  watch: {
    from() {
      this.froms = "—" + "《   " + this.from + "   》";
    },
  },
  methods: {
    axios() {
      //请求
      const loading = this.$loading({
        lock: true,
        text: "",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.4)",
      });
        axios.get(this.$api.bing).then((res) => {
          const data = res.data;
          this.hitokoto = data.hitokoto;
          this.from = data.from;
          this.from_who = data.from_who;
            loading.close();
        });
    },
    bing() {
      //函数节流
      const now = new Date().valueOf();
      if (this.lastTime == 0) {
        this.axios();
        this.lastTime = now;
      } else {
        if (now - this.lastTime > 500) {
          this.lastTime = now;
          this.axios();
        } else {
          console.log("高频点击");
        }
      }
    },
    handleUpdate() {
      this.bing();
    },
  },
  mounted(){
    document.title=this.$config.TITLE+"     |    "+"Song-QiEn";
  },
  created() {

    this.axios();
    this.header = this.$config.HEADER[
      randomNum(0, this.$config.HEADER.length - 1)
    ];
    this.button = this.$config.BUTTON[
      randomNum(0, this.$config.BUTTON.length - 1)
    ];
  },
};
</script>

<style lang="scss" scoped>
.yiyan {
  .header {
    width: 100vw;
    height: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    .title {
      width: 70vw;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
      span {
        position: absolute;
        width: 100vw;
        left: 0;
        display: flex;
        justify-content: center;
        color: white;
        font-size: 1.3rem;
      }
    }
  }
  .hitokoto {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      width: 75%;
      text-indent: 2rem;
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
    }
    div {
      width: 80%;
      margin-top: 4rem;
      display: flex;
      justify-content: flex-end;
    }
  }
  .update {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    height: 40px;
  }
}
</style>