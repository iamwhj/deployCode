<template>
    <div class="content">
        <div class="content-box">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .content{
        .content-box{
            ul{
                li{
                    display: inline-block;
                    border: 1px solid red;
                    width: 48%;
                    height: 400px;
                }
            }
        }
    }    

    @media screen and (max-width: 767px){
        .content{
            .content-box{
                ul{
                    padding: 0;
                    li{
                        display: inline-block;
                        float: left;
                        border: 1px solid red;
                        width: 98%;
                        height: 400px;
                        margin: 10px 0;
                    }
                }
            }
        }
    }
</style>