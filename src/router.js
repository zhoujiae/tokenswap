import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      redirect: "/home",
      meta: {
        title: 'TokenSwap',
        keyword: 'TokenSwap、DeFi、区块链、去中心化金融、区块链金融、分布式金融、公链、区块链投资、区块链交易。'
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: 'TokenSwap-Home',
        keyword: 'TokenSwap、DeFi、区块链、去中心化金融、区块链金融、分布式金融、公链、区块链投资、区块链交易。'
      }
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
      meta: {
        title: 'TokenSwap-404',
        keyword: 'TokenSwap、DeFi、区块链、去中心化金融、区块链金融、分布式金融、公链、区块链投资、区块链交易。'
      }
    }
  ]
});
router.beforeEach((to, _, next) => {
  if (to.meta) {
    const head = document.getElementsByTagName('head')[0];
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement('meta');
      keywords.setAttribute('name', 'keywords');
      head.appendChild(keywords);
    }
    keywords.setAttribute('content', to.meta.keyword);

  }
  next();
});
export default router;