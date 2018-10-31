<template>
    <header>
        <ul>
            <li v-for="(item, index) in items" :key="index"
                :class="{ active: selected && selectedIndex === index }">{{ item }}</li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            items: ['AAA', 'BBB', 'CCC', 'DDD'],
            selected: false,
            selectedIndex: 0
        };
    },
    methods: {
        select() {
            this.selected = true;
        },
        deselect() {
            this.selected = false;
        },
        moveLeft() {
            const length = this.items.length;
            const nextIndex = (length + this.selectedIndex - 1) % length;
            this.selectedIndex = nextIndex;
        },
        moveRight() {
            const length = this.items.length;
            const nextIndex = (this.selectedIndex + 1) % length;
            this.selectedIndex = nextIndex;
        },
        moveDown() {
            this.$emit('moveDown', 'itemList');
        }
    }
}
</script>

<style>
header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
header li {
    font-size: 20px;
    float: left;
    width: 50px;
    margin-right: 50px;
    box-sizing: border-box;
}
header li.active {
    border: 5px solid rgb(231, 177, 0);
}
</style>
