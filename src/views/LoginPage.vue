<template>
    <div id="login-box">
        <h1>Login</h1>
        <div id="login-input-box">
            <input type="text" placeholder="id">
            <input type="password" placeholder="password">
        </div>
        <button id="login-btn">Login</button>
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
#login-input-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
#login-input-box input{
    font-family: inherit;

    outline: 0;
    border: 0;
    background-color: #eeeeee;
    border-radius: 7px;

    padding: 7px 12px 7px 12px;
}

#login-btn {

    margin-top: 8px;
    width: 100%;
    background-color: black;
    color: white;

    border-radius: 7px;

    padding: 7px;
    transition: 0.2s;
}
#login-btn:hover {
    color: black;
    background-color: #fff;
}
</style>