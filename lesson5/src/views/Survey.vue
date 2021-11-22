<template>
  <div class="survey">
      <p>STEP2</p>
      <h1>以下にお答えください</h1>
      <form method="post" action="">
      <p>現在生命保険に加入されていますか？</p>
          <input type="radio" name="r1">はい
          <input type="radio" name="r1" >いいえ
      <p>現在入院中ですか。または、最近３ヵ月以内に医師の診察・検査の結果、入院手術を勧められたことはありますか？</p>
          <input type="radio" name="r2">はい
          <input type="radio" name="r2" >いいえ
      <p>過去５年以内に、病気やけがで手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <input type="radio" name="r3">はい
          <input type="radio" name="r3" >いいえ
    </form>
        <button><router-link to="/">前へ戻る</router-link></button>
    <button><router-link to="/form">次へ進む</router-link></button>

  </div>
</template>

<script>


export default {
  name: 'Survey',
}
</script>

