<template>
<div>
  <div class="form">
    <div class="header">
      <p id="step">STEP4</p>
      <p id="inst">以下の内容をご確認ください</p>
    </div>
    <div class="body">
      <div>
        <p class="genre">-性別-</p>
        <p class="answer">{{ gender }}</p>
      </div>
      <div>
        <p class="genre">-生年月日-</p>
        <p class="answer">{{ year }}{{ month }}{{ day }}</p>
      </div>
      <div>
        <p class="genre">-現在、生命保険に加入されていますか？-</p>
        <p class="answer">{{ q1 }}</p>
      </div>
      <div>
        <p class="genre">-現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？-</p>
        <p class="answer">{{ q2 }}</p>
      </div>
      <div>
        <p class="genre">-過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？-</p>
        <p class="answer">{{ q3 }}</p>
      </div>
      <div>
        <p class="genre">-ご相談内容-</p>
        <p class="answer">{{ consultation }}</p>
      </div>
    </div>
  </div>
  <div class="button-group">
    <router-link to="/form" class="button">＜ 前へ戻る </router-link>
    <router-link to="/submit" class="button">送信 ＞</router-link>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      gender: 'gender',
      year: 'year',
      month: 'month',
      day: 'day',
      q1: 'q1',
      q2: 'q2',
      q3: 'q3',
      consultation: 'consultation',
    })
  }
}
</script>
