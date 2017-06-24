<template>
    <div>
        我是首页
        <el-button type="primary">默认按钮</el-button>
        <wy-drop-down>
            <wy-drop-down-handle text="文字" slot="handle" type="button" :handle-click="handleClick"></wy-drop-down-handle>
            <wy-drop-down-item itemId="1">菜单1</wy-drop-down-item>
        </wy-drop-down>
    </div>
</template>
<script>
    import WyDropDown from '../common/WyDropDown.vue';
    import WyDropDownHandle from '../common/WyDropDownHandle.vue';
    import WyDropDownItem from '../common/WyDropDownItem.vue';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            WyDropDown,
            WyDropDownHandle,
            WyDropDownItem
        },
        methods: {
            handleClick(){
            	alert('handle');
            }
        }
    }
</script>
<style scoped>

</style>
