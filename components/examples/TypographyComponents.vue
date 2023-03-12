<template>
  <section style="border: 1px solid #999">
    <n-h2>
      <n-text type="info"> Typography </n-text>
    </n-h2>

    <NDivider />
    <n-h3>
      <n-text type="info"> Headings </n-text>
    </n-h3>

    <div style="padding-left: 24px; position: relative">
      <div
        style="
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 24px;
          background-color: rgba(128, 128, 128, 0.5);
        "
      />
      <n-h1>
        <n-text type="primary"> sin(x) </n-text>
      </n-h1>
      <n-h1 prefix="bar">
        <n-text type="primary"> sin(x) </n-text>
      </n-h1>
      <n-h1 prefix="bar" align-text>
        <n-text type="primary"> sin(x) </n-text>
      </n-h1>
      <n-h1 prefix="bar" align-text type="success">
        <n-text type="success"> sin(x) </n-text>
      </n-h1>
      <n-h1 prefix="bar" align-text type="info">
        <n-text type="info"> sin(x) </n-text>
      </n-h1>
      <n-h1 prefix="bar" align-text type="warning">
        <n-text type="warning"> sin(x) </n-text>
      </n-h1>
      <n-h1 prefix="bar" align-text type="error">
        <n-text type="error"> sin(x) </n-text>
      </n-h1>

      <n-h2>cos(x)</n-h2>
      <n-h2 prefix="bar"> cos(x) </n-h2>
      <n-h2 prefix="bar" align-text> cos(x) </n-h2>
      <n-h3>-sin(x)</n-h3>
      <n-h3 prefix="bar"> -sin(x) </n-h3>
      <n-h3 prefix="bar" align-text> -sin(x) </n-h3>
      <n-h4>-cos(x)</n-h4>
      <n-h4 prefix="bar"> -cos(x) </n-h4>
      <n-h4 prefix="bar" align-text> -cos(x) </n-h4>
      <n-h5>sin(x)</n-h5>
      <n-h5 prefix="bar"> sin(x) </n-h5>
      <n-h5 prefix="bar" align-text> sin(x) </n-h5>
      <n-h6>What a loop!</n-h6>
      <n-h6 prefix="bar"> What a loop! </n-h6>
      <n-h6 prefix="bar" align-text> What a loop! </n-h6>
    </div>

    <NDivider />

    <n-h3>
      <n-text type="info"> Tags </n-text>
    </n-h3>

    <n-a
      href="https://en.wikipedia.org/wiki/Hear_the_Wind_Sing"
      target="_blank"
    >
      Hear the Wind Sing
    </n-a>
    <n-h1>h1 tag</n-h1>
    <n-p>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-p>
    <n-h2>h2 tag</n-h2>
    <n-p>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-p>
    <n-h3>h3 tag</n-h3>
    <n-p>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-p>
    <n-h4>h4 tag</n-h4>
    <n-p>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-p>
    <n-h5>h5 tag</n-h5>
    <n-p>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-p>
    <n-h6>h6 tag</n-h6>
    <n-p>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-p>
    <n-ul>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
    </n-ul>
    <n-hr />
    <n-ol>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
    </n-ol>
    <n-ul align-text>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
    </n-ul>
    <n-hr />
    <n-ol align-text>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
      <n-li>li tag</n-li>
    </n-ol>
    <n-blockquote>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-blockquote>
    <n-blockquote align-text>
      Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by
      Japanese writer Haruki Murakami. It first appeared in the June 1979 issue
      of Gunzo (one of the most influential literary magazines in Japan), and in
      book form the next month. The novel was adapted by Japanese director
      Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English
      translation by Alfred Birnbaum appeared in 1987.
    </n-blockquote>

    <NDivider />

    <n-h3>
      <n-text type="info"> Text </n-text>
    </n-h3>

    <div>
      <n-text type="info"> Info </n-text>
      <n-text type="success"> Success </n-text>
      <n-text type="warning"> Warning </n-text>
      <n-text type="error"> Error </n-text> <n-text strong> Strong </n-text>
      <n-text italic> Italic </n-text> <n-text underline> Underline </n-text>
      <n-text delete> Delete </n-text> <n-text code> Code </n-text>
      <n-text code delete> Code </n-text>
      <n-text depth="1"> Primary Depth </n-text>
      <n-text depth="2"> Secondary Depth </n-text>
      <n-text depth="3"> Tertiary Depth </n-text>
      <n-text tag="div"> As Div </n-text>
    </div>

    <NDivider />

    <n-h3>
      <n-text type="info">
        Use
        <n-text code>n-a</n-text>
        with
        <n-text code>router-link</n-text>
      </n-text>
    </n-h3>
    <router-link to="/" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate"> Back Home </n-a>
    </router-link>

    <NDivider />

    <n-h3>
      <n-text type="warning">
        Use
        <n-text code>n-a</n-text>
        with
        <n-text code>nuxt-link</n-text>
      </n-text>
    </n-h3>
    <n-text tag="div" type="warning"> Issue with the nuxt link </n-text>
    <n-text tag="div" code>
      [Vue warn]: Extraneous non-props attributes (rel) were passed to component
      but could not be automatically inherited because component renders
      fragment or text root nodes.
    </n-text>

    <div>
      <n-a href="https://github.com/vuejs/core/issues/5933">
        Vue issue! Maybe it's related
      </n-a>
    </div>

    <nuxt-link to="/" #="{ navigate, href }" custom>
      <n-a :href="href" @click="navigate"> Back Home </n-a>
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
import {
  NH1,
  NH2,
  NH3,
  NH4,
  NH5,
  NH6,
  NText,
  NDivider,
  NBlockquote,
  NUl,
  NLi,
  NP,
  NA,
  NHr,
  NOl,
} from "naive-ui";
</script>

<style scoped></style>
