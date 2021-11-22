<template>
  <div class="form">
      <p>STEP2</p>
      <h1>ご相談内容をご記入ください</h1>
      <form method="post" action="">
      
          <textarea name="consultation" rows="10" cols="40"></textarea>
    </form>
    <button><router-link to="/survey">前へ戻る</router-link></button>
    <button><router-link to="">次へ進む</router-link></button>
  </div>
</template>

<script>


export default {
  name: 'Form',
}
</script>