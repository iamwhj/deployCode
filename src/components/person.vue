<template>
    <div class="wrap">
        <div class="mover"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .wrap{
        display: inline-block;
        position: relative;
        $bgColor: rgb(210, 250, 33);
        @mixin border-style{
            content: '';
            display: block;
            width: 2px;
            height: 2px;
            position: absolute;
            transition: width 2s, height 2s;
            background: $bgColor;
        }
        &::before{
            @include border-style;
        }
        &::after{
            @include border-style;
            top: 0;
            left: 0;
        }
        &:hover::before{
            width: 200px;
            background: $bgColor;
        }
        &:hover::after{
            height: 200px;
            background: $bgColor;
        }
        .mover{
            width: 200px;
            height: 200px;
            background: red;
            &::before{
                @include border-style;
                bottom: 0;
                right: 0;
            }
            &::after{
                @include border-style;
                bottom: 0;
                right: 0;
            }
            &:hover::before{
                background: $bgColor;
                height: 200px;
            }
            &:hover::after{
                background: $bgColor;
                width: 200px;
            }
        }
    }
    
    
    
</style>