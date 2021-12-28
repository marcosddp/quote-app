<template>
  <button @click="randomQuote" id="random">
    random<span class="material-icons">mdi-sync</span>
  </button>

  <h1 v-if="all">{{ author }}</h1>
  <div id=box>
  <div id="container" v-for="q in quotes">
    <Card :text="q.quoteText" />
  </div>
  <div v-if="!all" @click="allAuthor(author)" id="card-author">
    {{ author }}
    <p>{{ genre }}</p>
  </div>
  </div>
</template>

<script>
import QuoteApi from "@/api/QuoteApi";
import Card from "@/components/Card";

export default {
  components: {
    Card,
  },

  data() {
    return {
      quotes: [],
      all: false,
      author: "",
      genre: "",
    };
  },

  created() {
    this.randomQuote();
  },

  methods: {
    async randomQuote() {
      this.quotes = [];
      this.author = "";
      this.genre = "";
      let result = await QuoteApi();

      result.map((r) => {
        this.quotes.push(r);
        this.author = r.quoteAuthor;
        this.genre = r.quoteGenre;
      });

      this.all = false;
    },
    async allAuthor(author) {
      this.author = "";
      this.all = true;
      this.quotes = [];
      let result = await QuoteApi(author);

      result.map((r) => {
        this.quotes.push(r);
        this.author = r.quoteAuthor;
        this.genre = r.quoteGenre;
      });
    },
  },
};
</script>

<style>

#box{
  min-height:600px;
}

#container {
  display: flex;
  justify-content: center;
  margin-top:45px;
}

#random {
  background: transparent;
  border: transparent;
  position: absolute;
  left: 1000px;
  top: 31px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  color: #333333;
  display: flex;
  justify-content: center;
}

#random span {
  margin-left: -73px;
}

#card-author {
  width: 672px;
  height: 151px;

  margin-top: 109px;
  margin-bottom: 50px;

  background: white;
  color: #333333;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 29px;
  transition-duration: 1s;
}

#card-author p {
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 16px;
  margin-top: 8px;
  color: #828282;
}

#card-author:hover {
  background: #333333;

  color: #f2f2f2;
}

#random:hover {
  cursor: pointer;
}

h1 {
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 42px;

  color: #333333;
  margin-top: 101px;
  margin-left: 106px;
}
</style>
