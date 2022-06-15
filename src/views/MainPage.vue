<template>
    <!-- 헤더 부분 ( 로그인 , 회원 가입 )  -->
    <div id="header" class="container">
        <p id="header-title">IntroMe</p>
        <div id="login">
            <a href="/login">Log In</a>
            <a href="#">Sign In</a>
        </div>
    </div>
    
    <!-- 설명 텍스트 부분 -->
    <div id="body-box" class="container">
        <div id="body-text">
            <h1>IntroMe is a website<br/> where you can easily introduce yourself</h1>
            <p>You can show anyone the link to your profile site.<br/>For example, Facebook, Instagram, etc</p>
        </div>
        <div style="display:flex;align-items:center;flex-direction:column;">
            <img src="../assets/user.png" alt="3d이미지" id="img3d">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#header {
    display: flex;

    color: var(--main-color1);
}

#header-title {
    padding-top: 30px;
    padding-bottom: 30px;

    font-size: 36px;
    font-weight: bold;

    flex: 1 1 auto;
}

#header a{
    text-decoration: none;
    color: black;

    transition: 0.2s;
}

#header a:hover{
    text-decoration: underline;
    color: rgb(108, 108, 108);
}

#header a:active{
    transform: translate(0, 2px);
}

#login {
    display: flex;
    gap: 15px;

    align-items: center;
}

#body-box{
    background-color: var(--gray);
    color: rgb(77, 77, 77);
    
    display: flex;
}
#body-box h1{
    padding-top: 70px;
    padding-bottom: 12px;
    font-size: 42px;

    color: black;
}

#body-box p{
    font-size: 18px;
    padding-bottom: 70px;
}

#body-text {
    flex: 1 1 auto;
}

#img3d {
    margin-top: 38px;
    width: 256px; 
    height: 256px;
    
    transition: 0.2s;
}

#img3d:hover {
    transform: scale(1.03);
}

@media screen and (max-width: 768px) {
    .container {
        padding-left: 45px;
        padding-right: 45px;
    }

    #body-box {
        flex-direction: column-reverse;
    }
    #body-box img{ 
        width: 128px;
        height: 128px;
    }
    #body-box h1 {
        font-size: 28px;
        padding-top: 20px;
    }
    #header-title {
        padding-top: 25px;
        padding-bottom: 25px;

        font-size: 32px;
        font-weight: bold;

        flex: 1 1 auto;
    }
    #header a {
        font-size: 14px;
    }
    
    #body-box p{
        font-size: 14px;
        padding-bottom: 70px;
    }
}
</style>
