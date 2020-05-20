<template>
  <div class="container-covid">
    <h1 class="page-title">Informasi Covid19</h1>
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
        <p class="sub-title">Seluruh Indonesia</p>
        <div class="card-covid-wrapper">
          <div class="card-covid">
            <p>{{ numberFormat(indonesia.cases) }}</p>
            <p>Terkonfirmasi</p>
          </div>

          <div class="card-covid">
            <p>{{ numberFormat(indonesia.recovered) }}</p>
            <p>Sembuh</p>
          </div>

          <div class="card-covid">
            <p>{{ numberFormat(indonesia.deaths) }}</p>
            <p>Meninggal</p>
          </div>

          <div class="card-covid">
            <p>{{ numberFormat(indonesia.active) }}</p>
            <p>Dalam Perawatan</p>
          </div>
        </div>
      </div>

      <div v-if="currentTab === 'tab-dunia'">
        <p class="sub-title">Lihat Kasus Berdasarkan:</p>
        <v-select
          :options="selectOptions"
          @input="changeByCountry"
          :value="selectedOption"
        >
          <template v-slot:option="option">
            <img
              :src="option.icon"
              style="width: 25px; height:25px; border-radius:25px;  margin-right: 8px; margin-bottom: 4px; margin-top:4px"
            />
            {{ option.label }}
          </template>
        </v-select>
        <div class="card-covid-wrapper">
          <div class="card-covid">
            <p>
              {{ numberFormat(country.cases) }}
              <sup>+{{ numberFormat(country.todayCases) }}</sup>
            </p>
            <p>Terkonfirmasi</p>
          </div>

          <div class="card-covid">
            <p>{{ numberFormat(country.recovered) }}</p>
            <p>Sembuh</p>
          </div>

          <div class="card-covid">
            <p>
              {{ numberFormat(country.deaths) }}
              <sup>+{{ numberFormat(country.todayDeaths) }}</sup>
            </p>
            <p>Meninggal</p>
          </div>

          <div class="card-covid">
            <p>{{ numberFormat(country.active) }}</p>
            <p>Dalam Perawatan</p>
          </div>
        </div>

        <p class="mt-2" style="font-size: 12px;">
          Diperbaharui pada {{ new Date(country.updated).toLocaleString() }}
        </p>

        <h2 class="title">Peta Lokasi</h2>
        <div class="maps"></div>
      </div>

      <div v-if="currentTab === 'tab-lain'">
        <tab-info-lain></tab-info-lain>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from 'vue-tabs-with-active-line';
import axios from 'axios';
import vSelect from 'vue-select';
import TabInfoLain from '../components/covid/TabInfoLain';

const TABS = [
  { title: 'Indonesia', value: 'tab-indonesia' },
  { title: 'Seluruh Dunia', value: 'tab-dunia' },
  { title: 'Info Lain', value: 'tab-lain' }
];

const APICovid = 'https://corona.lmao.ninja/v2/';

export default {
  name: 'Covid19',
  components: {
    Tabs,
    vSelect,
    TabInfoLain
  },
  data: () => ({
    tabs: TABS,
    currentTab: 'tab-indonesia',
    countries: '',
    indonesia: '',
    country: '',
    selectOptions: '',
    selectedOption: ''
  }),
  created() {
    this.setCountries();
  },
  watch: {
    countries() {
      this.indonesia = this.countries.find(
        country => country.countryInfo.iso2 === 'ID'
      );

      this.selectOptions = this.countries
        .filter(
          country =>
            (country.country !== null) & (country.countryInfo._id !== null)
        )
        .map(country => ({
          label: country.country,
          code: country.countryInfo._id,
          icon: country.countryInfo.flag
        }));
    },
    selectOptions() {
      this.selectedOption = this.selectOptions.find(
        country => country.code === 4
      );
    },
    selectedOption() {
      this.country = this.countries.find(
        country => country.countryInfo._id === this.selectedOption.code
      );
    }
  },
  methods: {
    numberFormat(value) {
      return !value ? '0' : Number(value.toFixed(1)).toLocaleString();
    },
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    setCountries() {
      axios
        .get(APICovid + 'countries/')
        .then(res => {
          if (res.status == '200') this.countries = res.data;
          if (res.status != '200') throw new Error('Bad Server');
        })
        .catch(error => console.log(error));
    },
    changeByCountry(value) {
      let res = this.countries
        .filter(country => country.countryInfo._id == value.code)
        .map(country => {
          return {
            label: country.country,
            code: country.countryInfo._id,
            icon: country.countryInfo.flag
          };
        });

      this.selectedOption = res[0];
    }
  }
};
</script>

<style lang="scss">
@import 'vue-select/src/scss/vue-select.scss';

.vs__dropdown-toggle {
  height: 56px;
  font-size: 16px;
  padding-left: 8px;
  background-color: #f1f1f1;
  border: none;
  margin-bottom: 24px;
  border-radius: 8px;
}
.vs__actions {
  padding-right: 16px;
}
.vs__dropdown-menu {
  border: none;
}
.vs--open {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
  & > .vs__dropdown-toggle {
    background-color: #fff;
    font-size: 12px;
  }
}

.container-covid {
  padding: 24px 16px;
  height: 100%;
  overflow: hidden;
  font-family: Roboto, 'sans-serif';
  margin-bottom: 100px;
  .page-title {
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 40px;
    margin-top: 0;
    text-transform: uppercase;
  }
  .title {
    margin-bottom: 16px;
    margin-top: 32px;
    font: Bold 16px/19px Roboto;
  }
  .maps {
    width: 100%;
    height: 400px;
    background-color: grey;
    display: block;
  }
  .sub-title {
    font-size: 14px;
    color: #1e1e1e;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    font-weight: 500;
  }
  .card-covid-wrapper {
    display: flex;
    flex-wrap: wrap;

    .card-covid {
      border-radius: 8px;
      width: calc(50% - 8px);
      text-align: center;
      height: 103px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      overflow: hidden;

      &:after {
        content: '';
        display: block;
        width: 205px;
        height: 205px;
        position: absolute;
        top: -73px;
        left: -73px;
        background-size: cover;
        opacity: 0.1;
      }

      p:nth-child(1) {
        font: Bold 18px/22px Roboto;
        margin: 0;
        padding: 0;
      }
      p:nth-child(2) {
        font: 12px/14px Roboto;
        margin: 0;
        padding: 0;
        padding-top: 4px;
      }
    }
    .card-covid:nth-child(odd) {
      margin-right: 8px;
    }
    .card-covid:nth-child(even) {
      margin-left: 8px;
    }
    .card-covid:nth-child(1) {
      background: #f2ef87 0% 0% no-repeat padding-box;
      color: #675613;

      &:after {
        background: url('../assets/1F614_black.png');
      }
    }
    .card-covid:nth-child(2) {
      background: #87f292 0% 0% no-repeat padding-box;
      color: #0e6146;

      &:after {
        background: url('../assets/1F60A_black.png');
      }
    }
    .card-covid:nth-child(3) {
      background: #f28787 0% 0% no-repeat padding-box;
      color: #5a0d0d;
      margin-top: 16px;

      &:after {
        background: url('../assets/1F622_black.png');
      }
    }
    .card-covid:nth-child(4) {
      background: #87cef2 0% 0% no-repeat padding-box;
      color: #0c4857;
      margin-top: 16px;

      &:after {
        background: url('../assets/1F637_black.png');
      }
    }
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
    letter-spacing: 0px;
    color: #4e4e4e;
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    font-family: Roboto;
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
  margin-top: 32px;
}
</style>
