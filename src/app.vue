<template>
    <div id="app">
        <header-menu ref="headerMenu"
            @moveUp="onMoveUp"
            @moveDown="onMoveDown"
            @moveLeft="onMoveLeft"
            @moveRight="onMoveRight"/>
        <item-list ref="itemList"
            @moveUp="onMoveUp"
            @moveDown="onMoveDown"
            @moveLeft="onMoveLeft"
            @moveRight="onMoveRight"/>
    </div>
</template>

<script>
import HeaderMenu from './components/header-menu';
import ItemList from './components/item-list';
import Events from './events';

export default {
    mounted() {
        this.events = new Events();
        this.events.addArrowEvent();
        this.events.setRefs(this.$refs);
        this.events.setSelected('headerMenu');
    },
    components: {
        HeaderMenu,
        ItemList
    },
    methods: {
        onMoveUp(target) {
            this.events.moveUp(target);
        },
        onMoveDown(target) {
            this.events.moveDown(target);
        },
        onMoveLeft(target) {
            this.events.moveLeft(target);
        },
        onMoveRight(target) {
            this.events.moveRight(target);
        }
    }
}
</script>

<style>
html, body, #app {
    position: relative;
    width: 100%;
    height: 100%;
}
li {
    list-style: none;
}
</style>
