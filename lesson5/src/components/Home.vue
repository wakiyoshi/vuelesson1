<template>
    <div class="home">
        <p>STEP1</p>
        <h1>お客様の情報を入力してください</h1>
        <form method="post" action="">
            <p>-性別-</p>
            <input type="radio" name="r1" value="men">男性
            <input type="radio" name="r1" value="women">女性
            <p>-生年月日-</p>
              <select name="year" id="id_year" @change="updateYear">
                <option v-for="(year, key) in years" :key="key">{{ year }}</option>
              </select>年
              <select name="month" id="id_month" @change="updateMonth">
                <option v-for="(month, key) in months" :key="key">{{ month }}</option>
              </select>月
              <select name="day" id="id_day" @change="updateDay">
                <option v-for="(day, key) in days" :key="key">{{ day }}</option>
              </select>日
        </form>
    <button><router-link to="/survey">次へ進む</router-link></button>

  </div>
</template>

<script>
import { yearList, monthList, dayList } from '@/date.js';

export default {
  data() {
    return {
      years: yearList,
      months: monthList,
      days: dayList,
    }
  },
  methods: {
    updateGender (e) {
      this.$store.commit('updateGender', e.target.value)
    },
    updateYear (e) {
      this.$store.commit('updateYear', e.target.value)
    },
    updateMonth (e) {
      this.$store.commit('updateMonth', e.target.value)
    },
    updateDay (e) {
      this.$store.commit('updateDay', e.target.value)
    },
  }
}


</script>