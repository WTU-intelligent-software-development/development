import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';
import Home_ma from '../views/manager_views/home_ma.vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },

    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
           { 
                path: '/user_message',
                name: 'user_message',
                meta: {
                    title: '用户信息管理',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/user_message.vue'),
            },
            {
                path: '/user_task',
                name: 'user_task',
                meta: {
                    title: '用户任务管理',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/user_task.vue'),
            },
            {
                path: '/picture_task',
                name: 'picture_task',
                meta: {
                    title: '数据管理',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/picture_task.vue'),
            },
            {
                path: '/charts',
                name: 'basecharts',
                meta: {
                    title: '图表',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '表单',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
            {
                path: '/tabs',
                name: 'tabs',
                meta: {
                    title: '论坛',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
            },
            {
                path: '/donate',
                name: 'donate',
                meta: {
                    title: '鼓励作者',
                    permiss: '14',
                },
                component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传插件',
                    permiss: '6',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
            },
            {
                path: '/chat',
                name: 'chat',
                meta: {
                    title: '私信',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "chat" */ '../views/chat.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
            },
            {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器',
                    permiss: '9',
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/markdown.vue'),
            },
            {
                path: '/export',
                name: 'export',
                meta: {
                    title: '导出Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
            },
            {
                path: '/import',
                name: 'import',
                meta: {
                    title: '导入Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/import.vue'),
            },
        ],
    },
    {
        path: '/manager_views/',
        redirect: '/manager_views/dashboard_ma',
        meta: {
            title: '审核员',
        },
    },
    {
        path: '/manager_views/',
        name: 'Home_ma',
        component: Home_ma,
        children: [
            {
                path: '/manager_views/dashboard_ma',
                name: 'dashboard_ma',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard_ma" */ '../views/manager_views/dashboard_ma.vue'),
            },
            { 
                path: '/manager_views/pull_task',
                name: 'pull_task',
                meta: {
                    title: '任务发布',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "pull_task" */ '../views/manager_views/pull_task.vue'),
            },
            {
                path: '/manager_views/tabs',
                name: 'tabs_ma',
                meta: {
                    title: '论坛',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/manager_views/tabs_ma.vue'),
            },
            {
                path: '/manager_views/chat',
                name: 'chat_ma',
                meta: {
                    title: '私信',
                    permiss: '4',
                },
                component: () => import(/* webpackChunkName: "chat" */ '../views/manager_views/chat_ma.vue'),
            },
            {
                path: '/manager_views/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/manager_views/user.vue'),
            },
        ]
    },

    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } 
     else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done()
})

export default router;
