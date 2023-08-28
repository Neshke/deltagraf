<template>
    <div class="page-loader" v-if="!isloaded">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isloaded: false
        }
    },
    mounted(){
        document.onreadystatechange = () => {
            if(document.readyState == "complete"){
                this.isloaded = true;
            }
        }
        
    }
}
</script>

<style>
.page-loader{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #010600;
    z-index: 999;
}

.loader{
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-image: url("../../assets/logo-deltagraf.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    border: 3px solid #ba9a31;
    animation: spin 5s infinite linear;
}
@keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);}   
}
</style>