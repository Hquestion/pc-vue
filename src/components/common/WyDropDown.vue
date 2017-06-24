<template>
    <div class="wy-dropdown">
        <div class="handle">
            <slot name="handle"></slot>
        </div>
        <transition>
            <ul name="dropdown-menu" v-show="visible">
                <slot></slot>
            </ul>
        </transition>
    </div>
</template>
<script>
	export default{
		name: 'WyDropDown',
		data(){
			return {
                visible: false
			}
		},
		components: {},
        props: {
			text: String,
            type: {
				type: String,
                default: 'button'    //'text'、'button'
            },
            trigger: {
				type: String,
                default: 'hover'
            }
        },
        methods: {
            toggleMenu(){
                this.visible = !this.visible;
            }
        },
        mounted(){
			let self = this;
			if(this.trigger === 'hover') {
                this.$el.addEventListener('mouseover', function(){
                    self.visible = true;
                });
                this.$el.addEventListener('mouseout', function(){
                    self.visible = false;
                });
            }else if(this.trigger === 'click'){

            }
        }
	}
</script>
<style scoped>
    .wy-dropdown {
        font-size: 14px;
    }
    ul {
        transition: all ease .5s;
    }
    ul.v-enter {
        height: 10px;
        opacity: 0;
    }
    ul.v-enter-active {
        height: auto;
        opacity: 1;
    }
    ul.v-leave {
        height: auto;
        opacity: 1;
    }
    ul.v-leave-to {
        height: 0;
        opacity: 1;
    }
</style>
