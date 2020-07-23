<template>
    <div class="axis">
        <div class="avatar">
            <div class="left">
                <svg id="left1" height="49%" width="100%">
                   <polygon points="0 0, 1300 0, 1100 392, 0 392, 0 0" class="left1" fill="transparent"/>
                </svg>
                <div class="divider" style="z-index: 100;"></div>
                <svg id="left2" height="49%" width="100%">
                    <polygon points="0 0, 1090 0, 900 392, 0 392, 0 0" class="pp" fill="transparent"/>
                </svg>
            </div>
            <div class="right">
                <div class="right-box">
                    <svg class="right1" height="49%" width="100%" style="overflow: visible;">
                        <pattern id="avatar1" width="100%" height="100%" patternContentUnits="objectBoundingBox">
                            <image width="1.5" height="1" xlink:href="../../assets/img/thumb (11s).jpg"/>
                        </pattern>
                        <polygon points="200 0, 850 0, 850 392, 0 392" class="p1" fill="url(#avatar1)"/>
                    </svg>
                    <div class="divider" style="width: 160%"></div>
                    <svg class="right2" height="49%" width="100%" style="overflow: visible;">
                        <pattern id="avatar2" width="100%" height="100%" patternContentUnits="objectBoundingBox">
                            <image width="1.5" height="1.1" xlink:href="../../assets/img/thumb (12).jpg"/>
                        </pattern>
                        <polygon points="200 0, 1050 0, 1050 392, 0 392" class="p2" fill="url(#avatar2)"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .avatar {
        height: 800px;
        font-size: 0px;
        overflow: hidden;
        .divider {
            box-sizing: content-box;
            width: 100%;
            height: 1%;
            border-top: 7px solid white;
            border-bottom: 7px solid white;
            z-index: 10;
            background: red;
        }
        .left {
            position: relative;
            height: 100%;
            width: 69%;
            display: inline-block;
            &::after {
                position: absolute;
                top: 0;
                right: 0;
                content: '';
                display: block;
                height: 100%;
                width: 1%;
                z-index: 10;
                border-left: 7px solid white;
                border-right: 7px solid white;
                background: linear-gradient(to bottom,  #00f260, #0575e6);
                transform: translateX(-199px) skewX(-26.5deg);
            }
            #left1 {
                background: url('../../assets/img/thumb (1s).jpg');
                background-position: center center;
            }
            #left2 {
                background: url('../../assets/img/thumb (4s).jpg');
                background-position: center center;
            }
        }
        .right {
            float: right;
            height: 100%;
            width: 30%;
            .right-box {
                transform: translateX(-235px);
                height: 100%;
                .right2 {
                    width: 100%;
                    height: 49%;
                    transform: translateX(-200px);
                }
            }
        }
    }
</style>