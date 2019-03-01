import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

//使用Vue.mixin的方法拦截了路由离开事件，并在该拦截方法中实现了销毁页面缓存的功能。
Vue.mixin({
  beforeRouteLeave:function(to, from, next){
    //此处判断是如果返回上一层，你可以根据自己的业务更改此处的判断逻辑，酌情决定是否摧毁本层缓存。
    if (from && from.meta.rank && to.meta.rank && from.meta.rank>to.meta.rank) {
      
      if (this.$vnode && this.$vnode.data.keepAlive) {
        if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
          if (this.$vnode.componentOptions)
          {
            var key = this.$vnode.key == null
              ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '')
              : this.$vnode.key;
            var cache = this.$vnode.parent.componentInstance.cache;
            var keys  = this.$vnode.parent.componentInstance.keys;
            if (cache[key]) {
              if (keys.length) {
                var index = keys.indexOf(key);
                if (index > -1) {
                  keys.splice(index, 1);
                }
              }
              delete cache[key];
            }
          }
        }
      }
      this.$destroy();
    }
    next();
  },
});

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index'),
    meta: {title: '首页' }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/project/index'),
    meta: {title: '项目', rank: 1 }
  },
  {
    path: '/project/list',
    name: 'projectList',
    component: () => import('@/views/project/list'),
    meta: {title: '项目列表', rank: 2 }
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('@/views/collect/index'),
    meta: {title: '藏品', rank: 1 }
  },
  {
    path: '/digital',
    name: 'digital',
    component: () => import('@/views/digital/index'),
    meta: {title: '数字资产', rank: 1 }
  },
  
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,   // 在左侧sidebar中不显示
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  }
]

export const asyncRouterMap = [
  // {
  //   path: '/project',
  //   component: Layout,
  //   redirect: '/project/index',
  //   name: 'project',
  //   meta: { title: '项目' },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/project/index'),
  //       meta: { title: '项目' }
  //     }
  //   ]
  // },
  {
    path: '/list',
    component: Layout,
    redirect: '/list/index',
    name: 'List',
    meta: { title: '公开资料列表', icon: 'table' },
    children: [
      {
        path: 'index',
        name: 'ListIndex',
        component: () => import('@/views/list/index'),
        meta: { title: '列表', icon: 'table', rank: 1 },
      },
      {
        path: 'detail',
        name: 'ListDetail',
        component: () => import('@/views/list/detail'),
        meta: { title: '详情', icon: 'form', rank: 2 },
        // hidden: true
      },
      {
        path: 'edit',
        name: 'ListEdit',
        component: () => import('@/views/list/edit'),
        meta: { title: '编辑', icon: 'form', rank: 2 },
        // hidden: true
      },
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/index',
    name: 'formAbout',
    meta: { title: '表单相关', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    children: [
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树', icon: 'tree', roles: ['admin'] }  // 角色 admin
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '多级菜单',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '外链', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
