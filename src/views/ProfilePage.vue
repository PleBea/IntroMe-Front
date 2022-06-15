<template>
    <div id="profile-box">
        <div id="description-box">
            <div style="display:flex;align-items:center;flex-direction: column;">
                <img src="../assets/user.png" alt="프로필 이미지">
            </div>
            <div id="description-text-box">
                <p id="profile-name">김성빈</p>
                <p id="description-text">안녕하세요 선린고등학교에 재학중인 김성빈이라고 합니다.</p>
            </div>
        </div>
        <div id="profile-btn-box">
            <button class="url_btn">Instagram</button>
            <button class="url_btn">Facebook</button>
            <button class="url_btn">Github</button>
            <button class="url_btn">shangus</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#profile-btn-box {
    padding-top: 55px;
    box-sizing: border-box;
}

.url_btn {
    width: 100%;
    height: 38px;
    margin-bottom: 10px;

    font-family: inherit;

    border-radius: 7px;
    border: 2px solid var(--main-color1);

    background-color: var(--main-color1);
    color: white;

    cursor: pointer;
    outline: none;

    transition: 0.2s;
}

.url_btn:hover {
    color: var(--main-color1);
    background-color: #fff;
}

#profile-box {
    width: 600px;
    max-width: 80%;
    
    transform: translate(-50%, 0);
    
    position: absolute;
        top: 8%;
        left: 50%;
}

#profile-box img {
    width: 128px;
    height: 128px;

    padding: 10px;

    border-radius: 50%;

    background-color: #eeeeee;
}

#description-box {
    display: flex;
}

#profile-name {
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

@media screen and (max-width: 768px) {
    #description-box {
        flex-direction: column;
    }

    #description-text-box{
        margin-left: 0;
        padding: 0 12px 0 12px;
        box-sizing: border-box;
    }

    #profile-box img{
        width: 100px;
        height: 100px;
    }

    #profile-name {
        font-size: 18px;
    }

    #description-text {
        font-size: 14px;
    }
    
    #profile-btn-box {
        padding-top: 30px;
    }
}
</style>