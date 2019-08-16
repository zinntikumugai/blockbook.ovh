<template>
  <div class="container">
    <h1 class="text-center mt-3">blockbook.ovh</h1>
    <p class="text-right mb-1">blockbook hosted by zinntikumugai</p>
    <div v-if="maintenance">
      <h2>メンテナンス中です</h2>
      <p>終了のお知らせ等はTwitterから掘り出してみてください</p>
      <h2>ステータス</h2>
      <p>お好きな方をどうぞ</p>
      <a href="https://uptime.blockbook.ovh/">UpTime</a>
    </div>
    <div v-else>
      <h4 class="list-title">Main Net</h4>
      <div class="row p-2 pb-3">
        <div class="col-6 col-md-4 col-lg-3 p-2" v-for="(coin, index) in coinsMainNet" :key="index">
          <div class="pb-3 text-center">
            <b-link :href="coin.url">
              <h4 class>
                {{coin.name}}
                <b-img
                  v-if="coin.uptime"
                  :src="`https://img.shields.io/uptimerobot/ratio/${coin.uptime}.svg?style=flat-square&label=`"
                />
                <b-img
                  v-if="coin.uptime"
                  :src="`https://img.shields.io/uptimerobot/status/${coin.uptime}.svg?style=flat-square&label=`"
                />
              </h4>
              <b-img :src="coin.imgurl" width="120" />
            </b-link>
          </div>
        </div>
      </div>
      <h3 class="list-title">Test Net</h3>
      <div class="row p-2 pb-5">
        <div class="col-6 col-md-4 col-lg-3 p-2" v-for="(coin, index) in coinsTestNet" :key="index">
          <div class="pb-3 text-center">
            <b-link :href="coin.url">
              <h4>
                {{coin.name}}
                <b-img
                  v-if="coin.uptime"
                  :src="`https://img.shields.io/uptimerobot/ratio/${coin.uptime}.svg?style=flat-square&label=`"
                />
                <b-img
                  v-if="coin.uptime"
                  :src="`https://img.shields.io/uptimerobot/status/${coin.uptime}.svg?style=flat-square&label=`"
                />
              </h4>
              <b-img :src="coin.imgurl" width="120" />
            </b-link>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center pb-5">
      <ul class="list-inline">
        <li  class="list-inline-item pb-2">
          <a
            :href="`https://twitter.com/${sns.twitter}`"
            target="_blank"
            class="btn bg-twitter text-white"
          >
            <i class="fab fa-twitter fa-fw"></i>
            {{sns.twitter}}
          </a>
        </li>
        <li  class="list-inline-item pb-2">
          <a
            href="https://github.com/zinntikumugai/blockbook"
            target="_blank"
            class="btn bg-github text-white"
          >
            <i class="fab fa-github fa-fw"></i> zinntikumugai GitHub
          </a>
        </li>
        <li  class="list-inline-item pb-2">
          <a
            href="https://github.com/trezor/blockbook"
            target="_blank"
            class="btn bg-github text-white"
          >
            <i class="fab fa-github fa-fw"></i> trezor GitHub
          </a>
        </li>
        <li  class="list-inline-item pb-2">
          <a
            href="https://www.zinntikumugai.com/donation/"
            target="_blank"
            class="btn bg-info text-white"
          >
            <i class="fas fa-donate"></i> Donation
          </a>
        </li>
      </ul>
    </div>
    <div class="pb-5 text-center">&copy; 2019 blockbook.ovh</div>
  </div>
</template>

<script>
const sort = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};
export default {
  components: {},
  async asyncData() {
    return {
      sns: {
        twitter: "CurrencyOvh"
      },
      maintenance: false,
      coinsMainNet: [
        {
          name: "BitZeny",
          url: "https://zny.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bitzenyPlus/BitZenyPlus@z2.0.x/src/qt/res/icons/bitcoin.png?raw=true",
          uptime: "m782479834-70ab5a9ca84ea2dd1b1d534c"
        },
        {
          name: "Bellcoin",
          url: "https://bell.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bellcoin-org/bellcoin@master/src/qt/res/src/bitcoin.svg?raw=true",
          uptime: "m782479833-12e6fb4c51b7505ab0f13e6a"
        },
        {
          name: "Koto",
          url: "https://koto.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/KotoDevelopers/koto@master/src/qt/res/icons/koto.png?raw=true",
          uptime: "m782479838-f3e966f5ebbbbee971e540ae"
        },
        {
          name: "Monacoin",
          url: "https://mona.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/monacoinproject/monacoin@master-0.16/src/qt/res/src/bitcoin.svg?raw=true",
          uptime: "m782479841-6324434b71f0872b2b53d0d5"
        }
      ].sort(sort),
      coinsTestNet: [
        {
          name: "BitZeny",
          url: "https://test-zny.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bitzenyPlus/BitZenyPlus@z2.0.x/src/qt/res/icons/bitcoin.png?raw=true",
          uptime: "m782479835-b72b74e9b0bcdc870bcf78da"
        },
        {
          name: "Koto",
          url: "https://test-koto.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/KotoDevelopers/koto@master/src/qt/res/icons/koto.png?raw=true",
          uptime: "m782479840-bc3044c286c19197593f7cbf"
        }
      ].sort(sort)
    };
  }
};
</script>

<style>
h4 {
  font-weight: normal;
}
</style>
