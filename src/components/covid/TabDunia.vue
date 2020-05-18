<template>
    <div>
        <div class="covid">
            <p class="update font-weight-bold mb-0">Lihat Kasus Berdasarkan:</p>
        </div>
        <div>
           <select @change="changeByCountry">
                <option
                    v-for="country in countriesData"
                    :key="country.countryInfo._id"
                    :value="country.countryInfo.iso2"
                    >{{ country.country }}</option
                >
            </select>
            <pre>
                {{ countryData }}
            </pre>
        </div>
    </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const APICovid = 'https://corona.lmao.ninja/v2/';

export default {
    name: 'tabs-dunia',
    data: () => {
        return {
            countriesData: '',
            countryData: '',
            indonesiaData: ''
        }
    },
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
}
</style>