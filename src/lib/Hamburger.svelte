<script>
    let open = false;
    function mobileToggle() {
        open = !open;
        console.log('clicked' + open);
        
        
    }
</script>
<button class="line-wrap" 
    on:click={mobileToggle}
    class:open={open}
>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</button>

<style lang="scss">
    * { display: none;}
    .line-wrap {
        display: none;
        @media(min-width: 720px){
            display: none;
        }
    }
    .line {
        
        width: 35px;
        height: 5px;
        background-color: black;
        margin: 6px 0;
    }
    .open {
        display: block;
    }
</style>