<template>
    <div id="login-box">
        <h1>Login</h1>
        <div class="account-input-box">
            <input type="text" placeholder="id">
            <input type="password" placeholder="pw">
        </div>
        <button class="account-btn">Login</button>
        <a href="#">forget id or pw?</a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#login-box{
    transform: translate(-50%, -70%);
    position: absolute;
    top: 50%;
    left: 50%;
}

#login-box h1 {
    font-family: inherit;
    text-align: center;
    font-size: 36px;

    margin-bottom: 14px;
}
.account-input-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.account-input-box input{
    font-family: inherit;

    outline: 0;
    border: 0;
    background-color: #eeeeee;
    border-radius: 7px;

    padding: 7px 12px 7px 12px;
}

.account-btn {

    margin-top: 8px;
    width: 100%;
    background-color: black;
    color: white;

    border-radius: 7px;

    padding: 7px;
    transition: 0.2s;
}
.account-btn:hover {
    color: black;
    background-color: #fff;
}
#login-box a{
    text-decoration: underline;
    color:black;
    font-size: 10px;
    margin-top: 5px;
    display: block;
    text-align: right;
}
</style>