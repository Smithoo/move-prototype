<template>
    <div class="focusable">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots.default[0].componentInstance);
    }
}
</script>
