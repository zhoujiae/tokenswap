<template>
  <div
    class="header-container"
    :class="[routeName, scrollPage]"
  >
    <div class="header">
      <div class="logo">
        <a href="/">
          <img :src="logo" />
        </a>
      </div>
      <div class="header-right">
        <el-menu
          v-if="!isMobile"
          mode="horizontal"
          :default-active="routeName"
          :class="routeName"
          @select="goPage"
        >
          <el-menu-item
            index="Home"
          >{{$t("menu.home")}}</el-menu-item>
          <el-menu-item
            index="Application"
          >{{$t("menu.application")}}</el-menu-item>
          <el-menu-item
            index="FAQ"
          >{{$t("menu.faq")}}</el-menu-item>
          <el-menu-item
            index="Contact"
          >{{$t("menu.contact")}}</el-menu-item>
        </el-menu>
        <div
          :class="routeName"
          class="language"
        >
          <div class="lng">
            <el-popover
              placement="bottom"
              trigger="hover"
            >
              <ul class="language-ul">
                <li
                  v-for="item in options"
                  :key="item.value"
                  @click="selectLanguage(item.value)"
                >{{ item.label }}</li>
              </ul>
              <div
                slot="reference"
                style="cursor: pointer;"
              >
                <img
                  :src="lang == 'zh' ? zhSvg : enSvg"
                  style="margin-right: 5px;"
                />
                <span style="color: #00D9C7;">{{ lang == 'zh' ? '中文' : 'English' }}</span>
              </div>
            </el-popover>
          </div>
          <img v-if="isMobile" @click="drawer = true" class="menuIcon" :src="menuWhite" alt="" />
        </div>
      </div>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :modal="true"
      :append-to-body="true"
    >
      <el-menu
        :default-active="routeName"
        @select="goPage"
      >
        <el-menu-item
          v-for="(item, index) in menuList"
          :disabled="item.disabled"
          :key="index"
          :index="item.link"
          :class="item.link == routeName ? `selected${routeName}` : ''"
        >{{ item.name }}</el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>
<script>
import logo from "@/assets/logo.svg";
import zhSvg from "@/assets/zh.svg";
import enSvg from "@/assets/en.svg";
import menuWhite from "@/assets/menu-white.svg";
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      logo,
      zhSvg,
      enSvg,
      menuWhite,
      selected: 0,
      isMobile: !!navigator.userAgent.match(/iPad|iPhone|Android/),
      scrollPage: "",
      options: [
        { value: "zh", label: "简体中文" },
        { value: "en", label: "English" }
      ],
      ln: this.$i18n.locale,
      menuList:[
        {name:this.$t("menu.home"),link:'Home'},
        {name:this.$t("menu.application"),link:'Application'},
        {name:this.$t("menu.faq"),link:'FAQ'},
        {name:this.$t("menu.contact"),link:'Contact'}
      ]
    };
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    lang() {
      return this.$i18n.locale;
    }
  },
  methods: {
    goPage(path) {
      console.log(path)
      this.drawer = false;
      let toElement = document.getElementById(`${path}`);
      toElement.scrollIntoView(true);
    },
    getScroll() {
      const scrollY = document.documentElement.scrollTop;
      if (scrollY > 0) {
        if (this.scrollPage == this.$route.name) return;
        this.scrollPage = `scroll-${this.$route.name}`;
      } else {
        this.scrollPage = "";
      }
    },
    selectLanguage(val) {
      this.$i18n.locale = val;
      localStorage.setItem("hash_lang", val);
      // window.location.reload();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScroll);
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  background: transparent;
  z-index: 1000;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  .header {
    max-width: 1170px;
    padding: 0 10px;
    margin: 0 auto;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        height: 33px;
      }
    }
    .header-right {
      display: flex;
    }
    .language {
      width: 100px;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      div {
        display: flex;
        align-items: center;
      }
      img {
        height: 20px;
      }
      > .menuIcon {
        cursor: pointer;
        margin-left: 10px;
      }
    }
  }
}
.language-ul {
  > li {
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;
    padding-left: 10px;
  }
}
.scroll-home {
  background: linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, #000000 100%);
  transition: 0.5s linear;
}
.mobile-menu {
  font-size: 16px;
  width: 150px;
  height: 30px;
  margin-left: 20px;
}
.selected {
  color: #00D9C7;
}
</style>
<style lang="scss">
.el-drawer {
  width: auto !important;
}
</style>
