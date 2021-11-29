<template>
    <div class="home">
        <p>STEP1</p>
        <h1>お客様の情報を入力してください</h1>
        <form method="post" action="">
            <p>-性別-</p>
            <input type="radio" name="r1" value="men">男性
            <input type="radio" name="r1" value="women">女性
            <p>-生年月日-</p>
            <div id="app">
              <select v-model="selected">
                <option v-for="year in list" :key="year" :value="year">{{ year }}年</option>
              </select>
            </div>

                <select name="month">
                <option value="">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select> 月
            <select name="day">
                <option value="">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                </select> 日
        </form>
    <button><router-link to="/survey">次へ進む</router-link></button>

  </div>
</template>

<script>

export default {
  name: 'Home',
  
}

var app = new Vue({
  el: '#app',
  data: {
    // v-model とバインディングされる
    selected: null,
    // select に入れる年を入れる配列
    list: [],
    // 〜◯◯年前の設定
    num: 100
  },
  created() {
    // 今年
    const year = new Date().getFullYear()
    // 指定年まで配列に追加
    for (let i = 0; i < this.num; i++) {
      this.list.unshift(year - i)
    }
    // 初期値の設定
    this.selected = this.list[this.list.length * 0.6]
  }
})


</script>