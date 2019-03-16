<template>
  <section class="container">
    <div>
      <h1 class="title">blockbook.ovh</h1>
      <h2 class="subtitle">blockbook hosted by zinntikumugai</h2>
      <div>
        <b-card-group columns>
          <div v-for="coin in coins" :key="coin">
            <b-link :href="coin.url">
              <b-card :title="coin.name">
                <b-img :src="coin.imgurl" width="200"/>
              </b-card>
            </b-link>
          </div>
        </b-card-group>
      </div>
      <div class="links">
        <a href="https://twitter.com/uesitananame55" target="_blank" class="button--green">About</a>
        <a href="https://github.com/zinntikumugai/blockbook" target="_blank" class="button--grey">GitHub</a>
        <a href="https://github.com/trezor/blockbook" target="_blank" class="button--grey">Orignal GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      coins: [
        {
          name: "BitZeny",
          url: "https://zny.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bitzenyPlus/BitZenyPlus@z2.0.x/src/qt/res/icons/bitcoin.png?raw=true",
          test: false
        },
        {
          name: "BitZeny(Testnet)",
          url: "https://test-zny.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bitzenyPlus/BitZenyPlus@z2.0.x/src/qt/res/icons/bitcoin.png?raw=true",
          test: true
        },
        {
          name: "Bellcoin",
          url: "https://bell.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bellcoin-org/bellcoin@master/src/qt/res/src/bitcoin.svg?raw=true",
          test: false
        },
        {
          name: "Koto",
          url: "https://koto.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/KotoDevelopers/koto@master/src/qt/res/icons/koto.png?raw=true",
          test: false
        },
        {
          name: "Koto(Testnet)",
          url: "https://test-koto.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/KotoDevelopers/koto@master/src/qt/res/icons/koto.png?raw=true",
          test: true
        },
        {
          name: "Monacoin",
          url: "https://mona.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/monacoinproject/monacoin@master-0.16/src/qt/res/src/bitcoin.svg?raw=true",
          test: false
        },
        {
          name: "Susucoin",
          url: "https://susu-blockbook.currency.ovh",
          imgurl:
            "https://cdn.jsdelivr.net/gh/susucoin-project/susucoin@master/src/qt/res/icons/bitcoin.png?raw=true",
          test: false
        },
        {
          name: "Susucoin(Testnet)",
          url: "https://testnet-susu-blockbook.currency.ovh",
          imgurl:
            "https://cdn.jsdelivr.net/gh/susucoin-project/susucoin@master/src/qt/res/icons/bitcoin.png?raw=true",
          test: true
        },
        {
          name: "Fujicoin",
          url: "https://fuji.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/fujicoin/fujicoin@master/src/qt/res/icons/fujicoin.png?raw=true",
          test: true
        },
        {
          name: "Bitcoin",
          url: "https://btc.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bitcoin/bitcoin@master/src/qt/res/icons/bitcoin.png?raw=true",
          test: true
        }
      ].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
