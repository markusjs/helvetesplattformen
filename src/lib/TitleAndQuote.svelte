<script>
    let textColor = '#003B49';
    import QuoteIcon from '$lib/QuoteIcon.svelte';
</script>
<div class="title-and-quote">
    <h1>Helvetesplattformen</h1>
    <div class="quote-wrap" style="--text-color: {textColor}">
        <div>
            <QuoteIcon class="quote-icon"></QuoteIcon>
        </div>
        <div class="quote-box">
            <a href="https://www.nrk.no/trondelag/helseplattformen-skaper-problemer-pa-legevakta-i-trondheim_-_-vi-kaller-det-for-_helvetesplattformen-1.15993007">
                <p class="link">Nytt IT-system skaper store problemer:</p>
                <p class="quote">– Vi kaller det for <span class="helvetesplattformen">«Helvetes&shy;plattformen»</span> <span>– Nils Ivar Leerand (lege)</span></p>
            </a>
            
        </div>
    </div>
</div>

<style lang="scss">
    h1 {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 0;
    }
    a {
        text-decoration: none;
        color: var(--text-color);
        .link {
            text-decoration: underline;
        }
        &:hover, &:focus {
            text-decoration: underline;
        }
    }
    .quote {
        padding: 0 0 8px;
        margin-top: 8px;
        font-size: 1.5rem;
        font-weight: 400;
        .helvetesplattformen {
            font-weight: 600;
        }
    }
    .link {
        font-size: 2.5rem;
        margin-bottom: 0;
        margin-top: 0;
        font-style: italic;
        font-weight: 500;
    }
    @media only screen and (min-width: 0px) and (max-width: 400px) { 
        h1 {
            font-size: 2rem;
        }
        .link {
            font-size: 1.5rem;
        }
        .quote {
            font-size: 1.3rem;
        }
    }
    .quote-wrap {
        display: flex;
        text-decoration: none;        
        margin-bottom: 16px;
        align-items: normal;
    }




</style>