<template>
    <div id="profile-box">
        <div id="description-box">
            <img src="../assets/user.png" alt="프로필 이미지">
            <div id="description-text-box">
                <p id="profile-name">김성빈</p>
                <p id="description-text">안녕하세요 선린고등학교에 재학중인 김성빈이라고 합니다.</p>
            </div>
        </div>

        <button class="url_btn">Instagram</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#profile-box {
    width: 600px;
    
    transform: translate(-50%, 0);
    
    position: absolute;
    top: 8%;
    left: 50%; 
}

#profile-box img{
    width: 128px;
    height: 128px;

    padding: 10px;

    border-radius: 50%;

    background-color: #eeeeee;
}

#description-box {
    display: flex;
}
#description-box #profile-name {
    font-size: 20px;
    margin-bottom: 5px;
}
#description-text {
    color: #8b8b8b;
}
#description-text-box {
    margin-top: 15px;
    margin-left: 25px;
}
</style>