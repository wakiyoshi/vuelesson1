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
                <option v-for="(year,index) in list" :key="index" :value="year">{{ year }}</option>
              </select>年
            
              <select v-model="selected2">
                <option v-for="(month,index2) in list2" :key="index2" :value="month">{{ month }}月</option>
              </select> 月
              <select v-model="selected3">
                <option v-for="(day,index3) in list3" :key="index3" :value="day">{{ day }}日</option>
              </select> 日
            </div>
       
        </form>
    <button><router-link to="/survey">次へ進む</router-link></button>

  </div>
</template>

<script>

export default {
  name: 'date',
  data() {
    return{
          
    // v-model とバインディングされる
    selected: null,
    // select に入れる年を入れる配列
    list: [],
    // 〜◯◯年前の設定
    num: 100,
   
    selected2: null,
    list2: [],
    num2:11,
    selected3: null,
    list3: [],
    num3:31
    
    }
  },
  
  created() {
    //年
    const year = new Date().getFullYear()
    for (let i = 0; i < this.num; i++) {
      this.list.unshift(year - i)
    }
    this.selected = this.list[this.list.length * 0.6]
    //月
    const month = new Date().getMonth();
    for (let i = -1; i < this.num2; i++) {
      this.list2.unshift(month - i)
    }
    this.selected = this.list2[this.list2.length * 0.6]
    //日
    const day = 31;
    for (let i = 0; i < this.num3; i++) {
      this.list3.unshift(day - i)
    }
    this.selected = this.list3[this.list3.length * 0.6]
  },


  data2() {
    return{
    selected2: null,
    list2: [],
    num:12
    }
  },
  created2() {
    
    const month = new Date().getMonth();
    
    for (let i = 0; i < this.num; i++) {
      this.list2.unshift(month - i)
    }
    // 初期値の設定
    this.selected = this.list2[this.list2.length * 0.6]
  },
}




</script>