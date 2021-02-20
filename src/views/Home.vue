<template>
  <div class="home-container">
    <div class="content1" id="Home">
      <div class="container">
        <h1 class="title1 ballTitle">{{$t("home.content1.title1")}}</h1>
        <h2 class="title2">{{$t("home.content1.title2")}}</h2>
        <div class="button-divs">
          <div
            class="button-div-left button-div"
            @click="goeth"
          >
            <img :src="ethsvg" alt="">  {{$t("home.content1.btn")}}
          </div>
          <div
            class="button-div-right button-div"
            @click="gohuobi"
          >
            <img :src="huobisvg" alt="">  {{$t("home.content1.btn")}}
          </div>
        </div>
        <div class="live">
          <span>Live on:</span>
          <img class="eth" :src="ethPng">
          <img :src="huobiPng">
        </div>
        <div class="pools">
          <div class="pool">
            <!-- <div class="value">{{HTInVolume | formatNumber}}</div> -->
            <div class="value">
              <countTo :startVal='startVal' :endVal='HTInVolume' :duration='1000'></countTo>
            </div>
            <div class="label">{{$t("home.content1.des1")}}</div>
          </div>
          <div class="line"></div>
          <div class="pool">
            <!-- <div class="value">{{pool | formatNumber}}</div> -->
            <div class="value">
              <countTo :startVal='startVal' :endVal='hecopool' :duration='1000'></countTo>
            </div>
            <div class="label">{{$t("home.content1.des3")}}</div>
          </div>
          <div class="line"></div>
          <div class="pool">
            <!-- <div class="value">{{pool | formatNumber}}</div> -->
            <div class="value">
              <countTo :startVal='startVal' :endVal='ethpool' :duration='1000'></countTo>
            </div>
            <div class="label">{{$t("home.content1.des2")}}</div>
          </div>
        </div>
        <!-- move ball -->
        <div class="cursor" v-if="!this.isMobile">
          <div class="cursor__ball cursor__ball--big ">
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="50" stroke-width="0"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="content4" id="Application">
      <div v-if="!isMobile" class="container">
        <div class="item">
          <div class="item-info">
            <h4 class="title1">{{$t("home.application1.title1")}}</h4>
            <!-- <h4 class="title1">01</h4> -->
            <h4 class="title2">01 \ {{$t("home.application1.title2")}}</h4>
            <h4 class="title3">{{$t("home.application1.title3")}}</h4>
            <p class="des">{{$t("home.application1.des")}}</p>
          </div>
          <img
            :src="blockOverPng"
            alt=""
            class="item-img"
          />
        </div>
        <div class="item">

          <img
            :src="transtionPng"
            alt=""
            class="item-img"
          />
          <div class="item-info">
            <h4 class="title1">{{$t("home.application2.title1")}}</h4>
            <!-- <h4 class="title1">02</h4> -->
            <h4 class="title2">02 \ {{$t("home.application2.title2")}}</h4>
            <h4 class="title3">{{$t("home.application2.title3")}}</h4>
            <p class="des">{{$t("home.application2.des")}}</p>
          </div>
        </div>
      </div>
      <div class="container-2">
        <div class="content" v-if="isMobile">
          <h4 class="title1">{{$t("home.application1.title1")}}</h4>
          <h4 class="title2">01 \ {{$t("home.application1.title2")}}</h4>
          <h4 class="title3">{{$t("home.application1.title3")}}</h4>
          <p class="des">{{$t("home.application1.des")}}</p>
          <img :src="blockOverPng" alt="" class="item-img">
        </div>
        <div class="content" v-if="isMobile">
          <h4 class="title1">{{$t("home.application2.title1")}}</h4>
          <h4 class="title2">02 \ {{$t("home.application2.title2")}}</h4>
          <h4 class="title3">{{$t("home.application2.title3")}}</h4>
          <p class="des">{{$t("home.application2.des")}}</p>
          <img :src="transtionPng" alt="" class="item-img">
        </div>
        <div class="content">
          <h4 class="title1">{{$t("home.application3.title1")}}</h4>
          <!-- <h4 class="title1">03</h4> -->
          <h4 class="title2">03 \ {{$t("home.application3.title2")}}</h4>
          <h4 class="title3">{{$t("home.application3.title3")}}</h4>
          <p class="des">{{$t("home.application3.des")}}</p>
          <img :src="showcasePng" alt="" class="item-img">
        </div>
      </div>
    </div>
    <div class="FAQ" id="FAQ">
      <div class="container">
        <div class="title">{{$t("home.faq.title")}}</div>
        <el-collapse accordion>
          <el-collapse-item v-for="(i,index) in faq" :key="index" :name="index">
            <template slot="title">
              <span class="num">{{(index+1) < 10 ? '0'+(index+1) : index+1}}</span>
              <span>{{i.title}}</span>
            </template>
            <div class="answer">{{i.answer}}<a :href="i.link" v-if="index == 3 || index == 8" target="_blank">{{i.link}}</a></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="bottom" id="Contact">
      <div class="container">
        <div class="logo">
          <img :src="logo" alt="">
        </div>
        <div class="menu">
          <div class="menu-item" @click="jump('Home')">{{$t("menu.home")}}</div>
          <div class="spot"></div>
          <div class="menu-item" @click="jump('Application')">{{$t("menu.application")}}</div>
          <div class="spot"></div>
          <div class="menu-item" @click="jump('FAQ')">{{$t("menu.faq")}}</div>
          <div class="spot"></div>
          <div class="menu-item" @click="jump('Contact')">{{$t("menu.contact")}}</div>
        </div>
        <div class="out-link">
          <a href="https://twitter.com/TokenSwap001" target="_blank"><img :src="twitter" alt=""></a>
          <a href="https://medium.com/me/stories/public" target="_blank"><img :src="medium" alt=""></a>
          <a href="https://t.me/tokenswapen" target="_blank"><img :src="telegram" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import countTo from 'vue-count-to';
import logo from "@/assets/logo.svg";
import ethPng from "@/assets/eth.png";
import huobiPng from "@/assets/huobi.png";
import mousePng from "@/assets/mouse.svg";
import blockOverPng from "@/assets/block-over.png";
import transtionPng from "@/assets/transtion.png";
import showcasePng from "@/assets/showcase.jpg";
import medium from "@/assets/medium.png";
import telegram from "@/assets/telegram.png";
import twitter from "@/assets/twitter.png";
import ethsvg from "@/assets/1.svg";
import huobisvg from "@/assets/2.svg";
import {TweenMax} from "gsap";
export default {
  name: "Home",
  data() {
    return {
      logo,
      ethPng,
      huobiPng,
      mousePng,
      blockOverPng,
      transtionPng,
      showcasePng,
      medium,
      telegram,
      twitter,
      huobisvg,
      ethsvg,
      startVal:0,
      HTInVolume:0,
      hecopool:0,
      ethpool:0,
      isMobile: !!navigator.userAgent.match(/iPad|iPhone|Android/),
    };
  },
  components:{
    countTo
  },
  methods: {
    goeth() {
      window.open("https://app.tokenswap.finance/")
    },
    gohuobi() {
      window.open("https://ht.tokenswap.finance/")
    },
    moveBall() {
      const $bigBall = document.querySelector('.cursor__ball--big');
      const $hoverables = document.querySelectorAll('.ballTitle');

      // Listeners
      document.body.addEventListener('mousemove', onMouseMove);
      for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener('mouseenter', onMouseHover);
        $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
      }

      // Move the cursor
      function onMouseMove(e) {
        TweenMax.to($bigBall, .4, {
          x: e.pageX - 50,
          y: e.pageY - 50
        })
      }

      // Hover an element
      function onMouseHover() {
        TweenMax.to($bigBall, .3, {
          scale: 2
        })
      }
      function onMouseHoverOut() {
        TweenMax.to($bigBall, .3, {
          scale: 1
        })
      }
    },
    jump(val) {
      let toElement = document.getElementById(`${val}`);
      toElement.scrollIntoView(true);
    },
    getData() {
      axios.get("https://api.tokenswap.finance/circulation").then(res=> {
        if (res.status == 200) {
          this.HTInVolume = res.data
        } else {
          this.HTInVolume = 0
        }
      }).catch(error=> {

      })
      axios.get("https://api.tokenswap.finance/poolcount/heco").then(res=> {
        if (res.status == 200) {
          this.hecopool = res.data
        } else {
          this.hecopool = 0
        }
      }).catch(error=> {

      })
      axios.get("https://api.tokenswap.finance/poolcount/eth").then(res=> {
        if (res.status == 200) {
          this.ethpool = res.data
        } else {
          this.ethpool = 0
        }
      }).catch(error=> {

      })
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale;
    },
    faq(){
      const result = [
        {
          title: this.$t("home.faq.title1"),
          answer: this.$t("home.faq.answer1")
        },
        {
          title: this.$t("home.faq.title2"),
          answer: this.$t("home.faq.answer2")
        },
        {
          title: this.$t("home.faq.title3"),
          answer: this.$t("home.faq.answer3")
        },
        {
          title: this.$t("home.faq.title4"),
          answer: this.$t("home.faq.answer4"),
          link: this.$t("home.faq.link4")
        },
        {
          title: this.$t("home.faq.title5"),
          answer: this.$t("home.faq.answer5")
        },
        {
          title: this.$t("home.faq.title6"),
          answer: this.$t("home.faq.answer6")
        },
        {
          title: this.$t("home.faq.title7"),
          answer: this.$t("home.faq.answer7")
        },
        {
          title: this.$t("home.faq.title8"),
          answer: this.$t("home.faq.answer8")
        },
        {
          title: this.$t("home.faq.title9"),
          answer: this.$t("home.faq.answer9"),
          link: this.$t("home.faq.link9")
        }
      ];
      return result;
    }
  },
  mounted() {
    this.getData();
    if (!this.isMobile) {
      this.moveBall();
    }
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  font-family: Manrope3-ExtraBold, Manrope3;
  width: 100%;
  > .content1 {
    position: relative;
    padding-top: 250px;
    > .container {
      > .title1 {
        text-align: center;
        font-size: 60px;
        font-weight: 500;
        background-image: linear-gradient(90deg, #D8E4E2 0%, #00D9C7 100%);
        color:transparent;
        -webkit-background-clip:text;
        line-height: 70px;
      }
      > .title2 {
        text-align: center;
        font-size: 32px;
        font-weight: 500;
        background-image: linear-gradient(90deg, #D8E4E2 0%, #00D9C7 100%);
        color:transparent;
        -webkit-background-clip:text;
        line-height: 50px;
        margin: 60px auto 81px;
      }
      > .button-divs {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        >.button-div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 210px;
          height: 62px;
          border-radius: 6px;
          text-align: center;
          line-height: 62px;
          margin: 0 40px;
          cursor: pointer;
          font-size: 20px;
          box-shadow: 0px 2px 10px 4px rgba(0, 217, 199, 0.2);
          >img {
            margin-right: 10px;
          }
        }
        > .button-div-left {
          color: #fff;
          background: #00D9C7;
        }
        > .button-div-right {
          background: transparent;
          color:#00D9C7;
          border: 1px solid #00D9C7;
        }
      }
      >.live {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 46px;
        >span {
          font-size: 20px;
          font-weight: 400;
          color: #FFFFFF;
        }
        >img.eth {
          height: 33px;
          margin: 0 40px;
        }
        >img {
          height: 26px;
        }
      }
      >.pools {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 148px auto 140px;
        >.pool {
          >.value {
            text-align: center;
            font-size: 36px;
            font-weight: 500;
            background-image: linear-gradient(90deg, #D8E4E2 0%, #00D9C7 100%);
            color:transparent;
            -webkit-background-clip:text;
            height: 50px;
            line-height: 50px;
          }
          >.label {
            text-align: center;
            font-size: 20px;
            color:#fff;
            font-weight: 400px;
          }
        }
        >.line {
          width: 1px;
          height: 80px;
          background: #555555;
          margin: 0 100px;
        }
      }
    }
  }
  > .content4 {
    .title1 {
      font-size: 20px;
      font-weight: 600;
      color: #FFFFFF;
      margin-bottom: 20px;
    }
    .title2 {
      font-size: 40px;
      font-weight: 800;
      color: #00D9C7;
      margin-bottom: 30px;
      line-height: 56px;
    }
    .title3 {
      font-size: 18px;
      color: #FFFFFF;
      margin-bottom: 20px;
      line-height: 25px;
    }
    .des {
      line-height: 21px;;
      font-size: 15px;
      color: #00D9C7;
      line-height: 21px;
      opacity: .7;
    }
    .item-img {
      width: 360px;
      height: 280px;
    }
    > .container {
      max-width: 1170px;
      padding: 60px 10px 0;
      margin: 0 auto;
      padding-bottom: 60px;
      > .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 210px;
        > .item-info {
          >.des {
            width: 670px;
          }
          width: 670px;
          font-family: Manrope3-Semibold, Manrope3;
        }
      }
    }
    >.container-2 {
      >.content {
        max-width: 1170px;
        text-align: center;
        margin:0 auto 200px;
        .item-img {
          width: 509px;
          height: 300px;
          margin-top: 100px;
        }
      }
    }
  }
  >.FAQ {
    >.container {
      max-width: 1170px;
      margin: 200px auto 129px;
      >.title {
        text-align: center;
        font-size: 40px;
        font-weight: 800;
        color: #FFFFFF;
        margin-bottom: 100px;
      }
    }
  }
  >.bottom {
    >.container {
      max-width: 1170px;
      margin: 200px auto 129px;
      padding-bottom: 100px;
      border-bottom: 1px solid #555555;
      >.logo {
        text-align: center;
        >img {
          width: 170px;
        }
      }
      >.menu {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 60px auto;
        >div {
          margin: 0 20px;
          color: #fff;
          font-size: 15px;
          font-family: Manrope3-Medium, Manrope3;
          font-weight: 500;
        }
        >.spot {
          width: 5px;
          height: 5px;
          border-radius: 5px;
          background: #fff;
        }
        .menu-item {
          cursor: pointer;
        }
      }
      >.out-link {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 20px;
          margin: 0 80px;
          cursor: pointer;
        }
      }
    }
  }
}

// //////
.cursor {
  pointer-events: none;
} 
.cursor__ball {
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 1000;
}
circle {
  fill: #fff;
}
@include responsive($sm) {
  .home-container {
    >.content1 {
      position: relative;
      padding-top: 150px;
      > .container {
        > .title1 {
          font-size: 25px;
          line-height: 40px;
        }
        > .title2 {
          font-size: 18px;
          margin: 30px auto 50px;
        }
        > .button-divs {
          display: block;
          >.button-div {
            margin: 0 auto;
          }
          > .button-div-left { 
            margin-bottom: 20px;
          }
        }
        >.live {
          display:flex;
          justify-content: center;
          align-items: center;
          margin-top: 46px;
          >span {
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
          }
          >img.eth {
            height: 20px;
            margin: 0 16px;
          }
          >img {
            height: 13px;
          }
        }
        >.pools {
          margin-top: 50px;
          >.pool {
            >.value {
              font-size: 20px;
              height: 30px;
              line-height: 30px;
            }
            >.label {
              font-size: 14px;
            }
          }
          >.line {
            width: 1px;
            height: 80px;
            background: #555555;
            margin: 0 10px;
          }
        }
        >.mouse {
          text-align: center;
          margin: 73px auto 100px;
          >img {
            width: 17px;
            height: 24px;
          }
        }
      }
    }
    > .content4 {
      .title1 {
        font-size: 20px;
      }
      .title2 {
        font-size: 30px;
      }
      .title3 {
        font-size: 16px;
      }
      .des {
        font-size: 14px;
      }
      >.container-2 {
        >.content {
          max-width: 1170px;
          text-align: center;
          margin:0 auto 100px;
          .item-img {
            width: 350px;
            height: 215px;
            margin-top: 100px;
          }
        }
      }
    }
    >.FAQ {
      >.container {
        max-width: 1170px;
        margin: 200px auto 129px;
        padding: 0 4px;
        >.title {
          font-size: 30px;
          margin-bottom: 70px;
        }
      }
    }
    >.bottom {
      >.container {
        max-width: 1170px;
        margin: 100px auto 69px;
        padding-bottom: 50px;
        border-bottom: 1px solid #555555;
        >.logo {
          text-align: center;
          >img {
            width: 270px;
          }
        }
        >.menu {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 40px auto;
          >div {
            margin: 0 6px;
            color: #fff;
            font-size: 15px;
            font-family: Manrope3-Medium, Manrope3;
            font-weight: 500;
          }
          >.spot {
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background: #fff;
          }
          .menu-item {
            cursor: pointer;
          }
        }
        >.out-link {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 20px;
            margin: 0 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
