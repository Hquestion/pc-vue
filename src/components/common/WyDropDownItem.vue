<template>
    <li class="wy-dropdown-item" @click.stop.prevent="itemClick">
        <slot></slot>
    </li>
</template>
<script>
	export default{
        name: 'WyDropDownItem',
		data(){
			return {
				msg: 'hello vue'
			}
		},
		components: {},
        props: {
			itemId: {
				type: String,
                required: true
            }
        },
        methods: {
			itemClick(){
				this.$emit('dropdown-item-click');
            }
        }
	}
</script>
<style scoped>
    .wy-dropdown-item {
        color: #666;
    }
    .wy-dropdown-item:hover {
        color: #1d7060;
        background: #fff;
    }
</style>
