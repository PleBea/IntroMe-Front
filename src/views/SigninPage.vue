<template>
    <div id="register-box">
        <h1>Sign In</h1>
        <div class="account-input-box">
            <input type="text" placeholder="id">
            <input type="text" placeholder="email">
            <hr style="margin:3px 0 3px 0;">
            <input type="password" placeholder="pw">
            <input type="password" placeholder="pw check">
        </div>
        <button class="account-btn">Sign In</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#register-box {
    transform: translate(-50%, -70%);
    position: absolute;
    top: 50%;
    left: 50%;
}
#register-box h1 {
    font-family: inherit;
    text-align: center;
    font-size: 36px;

    margin-bottom: 14px;
}
</style>