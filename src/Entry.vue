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
                    <el-menu :default-active="activeMenu" class="nav-content" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="HOME">首页</el-menu-item>
                        <el-submenu index="BANK">
                            <template slot="title">题库</template>
                            <el-menu-item index="Q_BANK">题库</el-menu-item>
                            <el-menu-item index="P_BANK">卷库</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="EVALUATE">评测</el-menu-item>
                    </el-menu>
                </div>
            </nav>
        </header>
        <transition>
            <keep-alive>
                <router-view class="entry"></router-view>
            </keep-alive>
        </transition>
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
                }
			}
		},
		components: {},
        methods: {
            handleSelect: function(key){
            	alert(key);
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
    .nav-container .logo img{
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
        background: #fff;
        margin: 15px auto 0;
    }
</style>
