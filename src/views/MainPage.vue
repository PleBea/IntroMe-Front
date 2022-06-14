<template>
    <!-- 헤더 부분 ( 로그인 , 회원 가입 )  -->
    <div id="header">
        <p id="header-title">IntroMe</p>
        <div id="login">
            <a href="#">Log In</a>
            <a href="#">Sign In</a>
        </div>
    </div>
    
    <!-- 설명 텍스트 부분 -->
    <div id="">

    </div>
</template>

<script>
export default {

}
</script>

<style>
#header {
    padding-left: 172px;
    padding-right: 172px;

    display: flex;
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

    transition: 0.1s;
}

#header a:hover{
    text-decoration: underline;
}

#header a:active{
    transform: translate(0, 1px);
}

#login {
    display: flex;
    gap: 15px;

    align-items: center;
}
</style>