<template>
    <ul class="item-list">
        <li v-for="(value, index) in 12" :key="index"
            :class="{ active: selected && index === selectedIndex }">{{ value }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            selected: false,
            selectedIndex: 0
        }
    },
    methods: {
        select() {
            this.selected = true;
        },
        deselect() {
            this.selected = false;
        },
        moveLeft() {
            if (this.selectedIndex === 0) {
                return;
            }

            this.selectedIndex = this.selectedIndex - 1;
        },
        moveRight() {
            if (this.selectedIndex === 11) {
                return;
            }

            this.selectedIndex = this.selectedIndex + 1;
        },
        moveUp() {
            const row = parseInt(this.selectedIndex / 4);
            if (row === 0) {
                this.$emit('moveUp', 'headerMenu');
                return;
            }

            this.selectedIndex = this.selectedIndex - 4;
        },
        moveDown() {
            const row = parseInt(this.selectedIndex / 4);
            if (row === 2) {
                // this.$emit('moveDown');
                return;
            }

            this.selectedIndex = this.selectedIndex + 4;

        }
    }
}
</script>

<style>
.item-list {
    position: absolute;
    top: 50px;
    background-color: rgb(182, 255, 182);
    width: 60%;
    padding: 20px;
}
.item-list li {
    display: inline-block;
    text-align: center;
    line-height: 120px;
    width: 20%;
    height: 120px;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 1px solid #555;
    box-sizing: border-box;
}
.item-list li.active {
    border: 5px solid rgb(231, 177, 0);
}
</style>
