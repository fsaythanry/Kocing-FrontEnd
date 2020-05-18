<template>
  <div class="container-covid">
    <div>
      <h1 class="page-title">Informasi Covid19</h1>
    </div>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />
    <div class="content">
      <div v-if="currentTab === 'tab-indonesia'">
        <pre> {{ indonesiaData }}</pre>
      </div>

      <div v-if="currentTab === 'tab-dunia'">
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

      <div v-if="currentTab === 'tab-lain'"></div>
    </div>
  </div>
</template>

<script>
import Tabs from 'vue-tabs-with-active-line';
import axios from 'axios';

const TABS = [
  { title: 'Indonesia', value: 'tab-indonesia' },
  { title: 'Seluruh Dunia', value: 'tab-dunia' },
  { title: 'Info Lain', value: 'tab-lain' }
];

const APICovid = 'https://corona.lmao.ninja/v2/';

export default {
  name: 'Covid',
  components: {
    Tabs
  },
  data: () => ({
    tabs: TABS,
    currentTab: 'tab-indonesia',
    countriesData: '',
    countryData: '',
    indonesiaData: ''
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
    handleClick(newTab) {
      this.currentTab = newTab;
    },
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
};
</script>

<style lang="scss">
.container-covid {
  padding: 24px 16px;
  .page-title {
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 40px;
  }
}
.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 0 12px;
    padding: 0px;
    padding-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: gray;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: #1a6134;
    }
    &:hover {
      border-bottom: 2px solid #1a6134;
      color: #1a6134;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid #1a6134;
      color: #1a6134;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #1a6134;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
.content {
  margin-top: 30px;
  font-size: 20px;
}
</style>
