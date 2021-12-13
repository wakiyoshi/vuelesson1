<template>
    <div class="home">
        <p>STEP1</p>
        <h1>お客様の情報を入力してください</h1>
        <form method="post" action="">
            <p>-性別-</p>
            <input type="radio" name="r1" value="men">男性
            <input type="radio" name="r1" value="women">女性
             <p>-生年月日-</p>
            
            <date>
            <div id="app">
            
              <select v-model="selected">
                <option v-for="(year,index) in list" :key="index" :value="year">{{ year }}</option>
              </select>年
            
              <select v-model="selected2">
                <option v-for="(month,index2) in list2" :key="index2" :value="month">{{ month }}月</option>
              </select> 月
              <select v-model="selected3">
                <option v-for="(day,index3) in list3" :key="index3" :value="day">{{ day }}日</option>
              </select> 日
            </div>
            </date>
       
        </form>
    <button><router-link to="/survey">次へ進む</router-link></button>

  </div>
</template>

<script>

import date from '@/src/date.js'
export default {
  name:'Home',
  data() {
    return{
    // v-model とバインディングされる
    selected_year: null,
    // select に入れる年を入れる配列
    year_list: [],
    // 〜◯◯年前の設定
    year_num: 100,
   
    selected_month: null,
    month_list: [],
    month_num:11,

    selected_day: null,
    day_list: [],
    day_num:31
    }
  },
    methods: {
      test() {
        // date.js内のメソッドを読み込み
        date.showDate();
      },
    },

}
</script>