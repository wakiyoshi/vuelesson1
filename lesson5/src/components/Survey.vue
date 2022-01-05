<template>
  <div class="survey">
      <p>STEP2</p>
      <h1>以下にお答えください</h1>
      <form method="post" action="">
      <p>現在生命保険に加入されていますか？</p>
          <input type="radio" name="q1" value="はい" @change="updateQ1">はい
          <input type="radio" name="q1" value="いいえ" @change="updateQ1">いいえ
      <p>現在入院中ですか。または、最近３ヵ月以内に医師の診察・検査の結果、入院手術を勧められたことはありますか？</p>
          <input type="radio" name="q2" value="はい" @change="updateQ2">はい
          <input type="radio" name="q2" value="いいえ" @change="updateQ2">いいえ
      <p>過去５年以内に、病気やけがで手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <input type="radio" name="q3" value="はい" @change="updateQ3">はい
          <input type="radio" name="q3" value="いいえ" @change="updateQ3">いいえ
    </form>
        <button><router-link to="/">前へ戻る</router-link></button>
    <button><router-link to="/form">次へ進む</router-link></button>

  </div>
</template>

<script>
export default {
  name: 'Survey',
   methods:{
    updateQ1(e){
    this.$store.commit('updateQ1',e.target.value)
    },
    updateQ2(e){
    this.$store.commit('updateQ2',e.target.value)
    },
    updateQ3(e){
    this.$store.commit('updateQ3',e.target.value)
    },
}
}

</script>

