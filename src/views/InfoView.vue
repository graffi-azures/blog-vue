<template>
  <!-- 个人信息 -->
  <div class="info-body">
    <div class="info-avatar">
      <img src="../assets/img/ava.jpeg" alt="" />
      <br />
      <h1>yogoazure</h1>
      <hr />
    </div>
    <div class="info-text">
      <el-card class="box-card">
        <div slot="header" class="clearfix">找工作ing</div>
        <div class="text">
          <div class="web">
            <p style="float: left">前端历程：</p>
            <br />
            <p>
              很早就对网页产生了兴趣,但年纪小贪玩,虽然断断续续了解一些,没有坚持学习,正式学习编程是从大学开始
            </p>
            <br />
            <p>
              大学所学的专业是软件工程,课程内容很杂,但个人感觉是杂而不精,就算是主课程java学到的也是十几年前的古老技术,没有什么实用性,
              现在想想可能是为了培养我们的计算机思维,让我们自己选择要专精的方向.
            </p>
          </div>
          <hr/>
          <div class="blog">
            <p style="float: left">博客介绍：</p>
            <br />
            <p>
              我是自学的Vue,不得不说,这框架内容还真多,感觉自己学的差不多了,总得搞个项目练练手检验自己学习效果,
              既然要做那就做个完整的,后端选择的是轻量级的express框架的nodejs,老实说,虽然大学主要学的是java,但仅仅是为了完成
              学校的课程,我对java也不是那么有兴趣,所以趁这个机会就试试别的技术锻炼下自己的学习能力,感谢百度,牛客,B站,掘金,力扣,
              CSDN,MDN,nodejs等社区提供的免费学习资料,文档
            </p>
            <br />
            <p>
              前端主要使用了<b>Vue2 + VueX + VueRouter + ElementUi</b>,
              后端使用的是<b>Express + Mongoose</b>,
              水平有限，功能不多,等学到更多技术后会来完善这个项目。
            </p>
            <br />
            <p>
              源码已上传Github，欢迎使用这个项目进行学习
            </p>
          </div>
          <hr />
          <div class="info">
            <p style="float: left">联系我：</p>
            <br />
            <div class="link-icon">
              <li>
                <el-tooltip
                    effect="light"
                    class="item"
                    content="我的Github"
                    placement="bottom"
                >
                  <a href="https://github.com/Cat1cry" target="_blank"
                  ><img src="../assets/img/github.png" alt=""
                  /></a>
                </el-tooltip>
              </li>
              <li>
                <el-tooltip
                    effect="light"
                    class="item"
                    content="我的知乎"
                    placement="bottom"
                >
                  <a
                      href="https://www.zhihu.com/people/liu-qing-shu-65"
                      target="_blank"
                  ><img src="../assets/img/zhihu.png" alt=""
                  /></a>
                </el-tooltip>
              </li>
              <li>
                <el-tooltip
                    effect="light"
                    class="item"
                    content="我的B站"
                    placement="bottom"
                >
                  <a href="https://space.bilibili.com/12153562" target="_blank"
                  ><img src="../assets/img/Bili.png" alt=""
                  /></a>
                </el-tooltip>
              </li>
              <li>
                <el-tooltip
                    effect="light"
                    class="item"
                    content="我的微博"
                    placement="bottom"
                >
                  <a href="https://www.weibo.com/u/5285438322" target="_blank"
                  ><img src="../assets/img/weibo.png" alt=""
                  /></a>
                </el-tooltip>
              </li>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoView",
  created () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.info-body {
  width: 100%;
  height: 100%;
}
.info-avatar {
  background-image: url("../assets/img/Nabaci3.jpeg");
  overflow: hidden;
  background-size: cover;
}
.info-avatar > img {
  margin-top: 100px;
  width: 180px;
  border-radius: 180px;
  border: 2px solid rgb(65, 226, 247);
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.info-avatar > h1 {
  text-align: center;
}
.info-text {
  text-align: center;
  margin-top: 50px;
}
.box-card {
  z-index: 1 !important;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 30px;
  margin-bottom: -150px;
  width: 1000px;
  height: 800px;
}
.clearfix {
  font-size: 25px;
}
.text {
  font-size: 18px;
  font-family: "Courier New", Courier, monospace;
}
.web {
  margin-bottom: 10px;
}
.blog {
  margin-top: 10px;
  margin-bottom: 30px;
}
.info {
  margin-top: 30px;
}
.link-icon {
  position: absolute;
  left: 50%;
  top: 78%;
  transform: translate(-50%);
}
.link-icon > li {
  float: left;
  list-style-type: none;
}
.link-icon > li > a > img {
  padding-top: 10px;
  margin-left: 30px;
  margin-top: 20px;
  width: 50px;
  height: 50px;
}
</style>