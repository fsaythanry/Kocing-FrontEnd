<template>
    <div>
        <div class="covid">
            <h2 class="update mb-0">Seluruh Kasus Indonesia</h2>
            <p class="mb-1">Update Terakhir </p>
        </div>
        <div class="mb-1 d-flex justify-content-between">
            <div class="box-positif position-relative">
                <p>Positif</p>
                <p>{{ indonesiaData.cases }}</p>
            </div>
            <div class="box-sembuh position-relative">
                <p>Sembuh</p>
            </div>
        </div>
        <div class="mb-1 d-flex justify-content-between">
                <div class="box-perawatan position-relative">
                    <p>Dalam Perawatan</p>
                </div>
                <div class="box-meninggal position-relative">
                    <p>Meninggal</p>
                </div>
        </div>
        <div class="covid">
            <h2 class="update mt-3 mb-0">Peta Penyebaran Per Provinsi</h2>
        </div>
        <div class="peta">

        </div>
        <div class="covid">
            <h2 class="update mt-3 mb-0">Tabel Data Per Provinsi</h2>
        </div>
        <div class="tabel-provinsi">

        </div>
    </div>

</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const APICovid = 'https://corona.lmao.ninja/v2/';

export default {
    name: 'tabs-indonesia',
    data: () => ({
        countriesData: '',
        countryData: '',
        indonesiaData: []
    }),
    created() {
        this.getCountries();
    },
    watch: {
        countriesData() {
            this.indonesiaData = this.countriesData.filter(
            country => country.countryInfo.iso2 == 'ID'
            );
        }
    },
    methods: {
        changeByCountry() {
            this.countryData = this.countriesData.filter(
            country => country.countryInfo.iso2 == event.target.value
            );
        },
        getCountries() {
            axios
            .get(APICovid + 'countries/')
            .then(res => {
                if (res.status == '200') this.countriesData = res.data;
                if (res.status != '200') throw new Error('Bad Server');
            })
            .catch(error => console.log(error));
        }
    }

}
</script>
<style scoped>
.update {
    font-size: 16px;
    font-weight: bolder;
}
.covid p {
    font-size: 14px;
}
.box-positif {
    float: left;
    margin-top: 20px;
    margin-left: 0px;
    width: 187px;
    height: 103px;
    background: #FBEFBF 0% 0% no-repeat padding-box;
    border-radius: 8px;
}
.box-sembuh {
    float: left;
    margin-top: 20px;
    margin-left: 60px;
    width: 187px;
    height: 103px;
    background: #D6E8E2 0% 0% no-repeat padding-box;
    border-radius: 8px;
}
.box-perawatan {
    float: left;
    margin-top: 20px;
    margin-left: 0px;
    width: 187px;
    height: 103px;
    background: #BFC9FB 0% 0% no-repeat padding-box;
    border-radius: 8px;
}
.box-meninggal {
    float: left;
    margin-top: 20px;
    margin-left: 60px;
    width: 187px;
    height: 103px;
    background: #F9E0E0 0% 0% no-repeat padding-box;
    border-radius: 8px;
}

</style>