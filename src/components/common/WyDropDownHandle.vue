<template>
    <div class="wy-drop-down-handle">
        <template v-if="type === 'text'">
            <div @click="toggleMenu()">
                <span v-text="text"></span><i class="el-icon-caret-top text"></i>
            </div>
        </template>
        <template v-if="type === 'button'">
            <el-button-group>
                <el-button type="primary" @click.native="buttonClick()"><span v-text="text"></span></el-button>
                <el-button type="primary" @click.native="toggleMenu()"><i class="el-icon-caret-top"></i></el-button>
            </el-button-group>

        </template>
    </div>
</template>
<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
	export default{
        name: 'WyDropDownHandle',
		data(){
			return {

			}
		},
		components: {ElButton},
        props: {
			type: {
				type: String,
                default: 'text'
            },
            text: {
				type: String,
                required: true
            }
        },
        methods: {
            toggleMenu(){
				this.dispatch('WyDropDown','toggle');
            },
            buttonClick(){
                this.dispatch('WyDropDown','handle-click');
            }
        }
	}
</script>
<style scoped>
    .wy-drop-down-handle:hover .el-icon-caret-top{
        transform: rotate(180deg);
        cursor: pointer;
    }
    .wy-drop-down-handle {
        cursor: pointer;
    }
    .el-icon-caret-top {
        color: #ccc;
        transition: all ease .3s;
    }
    .el-icon-caret-top.text {
        margin-left: 5px;
    }
</style>
