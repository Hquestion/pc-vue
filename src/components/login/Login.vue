<template>
    <div class="login">
        <div class="box">
            <el-input placeholder="请输入登录名" v-model="userName">
                <template slot="prepend">用户名</template>
            </el-input>
            <el-input placeholder="请输入密码" v-model="pwd">
                <template slot="prepend">密码</template>
            </el-input>
            <el-button @click="doLogin()">登录</el-button>
        </div>
    </div>
</template>
<script>
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    import api from '../../api';
	export default{
		data(){
			return {
				userName: '',
                pwd: ''
			}
		},
		components: {
            ElButton,
            ElInput
		},
        methods: {
			doLogin () {
                api.login(this.userName, this.pwd);
            }
        }
	}
</script>
<style scoped>

</style>
