<template>
    <div>
        <div class="covid">
            <p class="update font-weight-bold mb-2">Cara Pencegahan</p>
        </div>
        <div >

        </div>
        <div class="covid">
            <p class="update font-weight-bold mb-2">Link Terkait</p>
        </div>
        <div class="">
            <div class="card p-3 mb-2 border-0">
                <a href="">
                    <p class="link float-left m-0">Covid-19 Indonesia</p>
                    <img class="float-right" src="../../assets/Icon awesome-external-link-alt.svg" alt="">
                </a>
            </div>
            <div class="card p-3 mb-2 border-0">
                <a href="">
                    <p class="link float-left m-0">Kawal Covid-19</p>
                    <img class="float-right" src="../../assets/Icon awesome-external-link-alt.svg" alt="">
                </a>
            </div>
            <div class="card p-3 mb-2 border-0">
                <a href="">
                    <p class="link float-left m-0">Corona Tracker</p>
                    <img class="float-right" src="../../assets/Icon awesome-external-link-alt.svg" alt="">
                </a>
            </div>
            <div class="card p-3 mb-2 border-0">
                <a href="">
                    <p class="link float-left m-0">WHO Internasional</p>
                    <img class="float-right" src="../../assets/Icon awesome-external-link-alt.svg" alt="">
                </a>
            </div>
        </div>

    </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
    name: 'tabs-info-lain'
}
</script>
<style scoped>
.update {
    font-size: 16px;
}
.card {
    background: #F1F1F1 0% 0% no-repeat padding-box;
}
.card a .link {
    color:#1E1E1E;
    font-size: 14px;
    font-weight: bold;
}

</style>