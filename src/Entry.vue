<template>
    <section>
        <header>
            <div class="welcome">
                <div class="welcome-content">
                    <span v-text="user.name"></span> <span v-text="user.role"></span>,<span v-text="welcomeTxt"></span>
                    &nbsp;&nbsp;
                    <span>当前学科：</span><span v-text="user.subjectName" class="text-darkgreen"></span>
                </div>
            </div>
            <nav>
                <div class="nav-container">
                    <div class="logo">
                        <img src="./assets/logo.png">
                    </div>
                    <el-menu :default-active="activeMenu" class="nav-content" mode="horizontal">
                        <el-menu-item index="Home">
                            <router-link :to="{name:'Home'}">首页</router-link>
                        </el-menu-item>
                        <el-submenu index="BANK">
                            <template slot="title">题库</template>
                            <el-menu-item index="PaperBank">
                                <router-link :to="{name:'PaperBank'}">题库</router-link>
                            </el-menu-item>
                            <el-menu-item index="P_BANK">卷库</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="EVALUATE">评测</el-menu-item>
                    </el-menu>
                </div>
            </nav>
        </header>
        <div class="entry">
            <transition :name="transitionName">
                <keep-alive>
                    <router-view class="main"></router-view>
                </keep-alive>
            </transition>
        </div>
        <footer>
            <p>版权所有 &copy;南京伍壹教育科技有限公司 2017</p>
        </footer>
    </section>
</template>
<script>
    export default{
        data(){
            return {
                activeMenu: 'HOME',
                welcomeTxt: '早上好',
                user: {
                    name: '张三',
                    role: '老师',
                    subjectName: '数学'
                },
                transitionName: 'slide-left'
            }
        },
        components: {},
        methods: {
            handleSelect: function (key, keyPath) {
                this.$router.push({
                    name: key
                });
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
        }
    }
</script>
<style scoped>
    .welcome {
        width: 100%;
        color: #737373;
        background: #f2f1f6;
        padding: 5px;
        font-size: 12px;
    }

    .welcome-content {
        text-align: right;
        width: 1100px;
        margin: auto;
    }

    nav {
        width: 100%;
        background: #fff;
    }

    .nav-container {
        width: 1100px;
        background: #fff;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }

    .nav-container .logo,
    .nav-container .logo img {
        width: 200px;
    }

    .nav-content {
        background: #fff;
    }

    footer {
        width: 100%;
        height: 100px;
        padding-top: 60px;
        font-size: 14px;
        color: #1d7060;
    }

    .entry {
        width: 1100px;
        min-height: calc(100vh - 241px);
        margin: 15px auto 0;
        position: relative;
        overflow: hidden;
    }

    .entry .main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .slide-right-enter-active, .slide-left-enter-active  {
        transition: all ease .5s;
        opacity: 1;
    }

    .slide-left-leave-active, .slide-right-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-left-enter {
        transform: translateX(-1100px) rotate(-90deg);
        opacity: 0;
        transform-origin: 0% 0%;
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translateX(1100px) rotate(90deg);
        transform-origin: 100% 100%;
    }

    .slide-right-enter, .slide-right-leave-active {
        transform: translateX(1100px);
        opacity: 1;
        transform-origin: 0 0;
    }
</style>
