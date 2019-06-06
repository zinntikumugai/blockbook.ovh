<template>
  <div class="container">
    <h1 class="text-center mt-3">blockbook.ovh</h1>
    <p class="text-right mb-1">blockbook hosted by zinntikumugai</p>
    <h4 class="list-title">Main Net</h4>
    <div class="row p-2 pb-3">
      <div class="col-6 col-md-4 col-lg-3 p-2" v-for="coin in coinsMainNet" :key="coin">
        <div class="pb-3 text-center">
          <b-link :href="coin.url">
            <h4 class>{{coin.name}}</h4>
            <b-img :src="coin.imgurl" width="120"/>
            <h5>Backend</h5>
            <div>
              <b-table stacked :items="coin.backend"></b-table>
            </div>
            <h5>BlockBook</h5>
            <div>
              <b-table stacked :items="coin.blockbook"></b-table>
            </div>
          </b-link>
        </div>
      </div>
    </div>
    <h3 class="list-title">Test Net</h3>
    <div class="row p-2 pb-5">
      <div class="col-6 col-md-4 col-lg-3 p-2" v-for="coin in coinsTestNet" :key="coin">
        <div class="pb-3 text-center">
          <b-link :href="coin.url">
            <h4>{{coin.name}}</h4>
            <b-img :src="coin.imgurl" width="120"/>
          </b-link>
        </div>
      </div>
    </div>
    <div class="text-center pb-5">
      <a
        href="https://twitter.com/uesitananame55"
        target="_blank"
        class="btn bg-twitter text-white"
      >
        <i class="fab fa-twitter fa-fw"></i> @uesitananame55
      </a>
      <a
        href="https://github.com/zinntikumugai/blockbook"
        target="_blank"
        class="btn bg-github text-white"
      >
        <i class="fab fa-github fa-fw"></i> GitHub
      </a>
      <a
        href="https://github.com/trezor/blockbook"
        target="_blank"
        class="btn bg-github text-white"
      >
        <i class="fab fa-github fa-fw"></i> Orignal GitHub
      </a>
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
  async asyncData({ app, params, context }) {
    let data = {
      coinsMainNet: [
        {
          name: "BitZeny",
          url: "https://zny.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bitzenyPlus/BitZenyPlus@z2.0.x/src/qt/res/icons/bitcoin.png?raw=true"
        },
        {
          name: "Bellcoin",
          url: "https://bell.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bellcoin-org/bellcoin@master/src/qt/res/src/bitcoin.svg?raw=true"
        },
        {
          name: "Koto",
          url: "https://koto.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/KotoDevelopers/koto@master/src/qt/res/icons/koto.png?raw=true"
        },
        {
          name: "Monacoin",
          url: "https://mona.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/monacoinproject/monacoin@master-0.16/src/qt/res/src/bitcoin.svg?raw=true"
        }
      ].sort(sort),
      coinsTestNet: [
        {
          name: "BitZeny",
          url: "https://test-zny.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/bitzenyPlus/BitZenyPlus@z2.0.x/src/qt/res/icons/bitcoin.png?raw=true"
        },
        {
          name: "Koto",
          url: "https://test-koto.blockbook.ovh/",
          imgurl:
            "https://cdn.jsdelivr.net/gh/KotoDevelopers/koto@master/src/qt/res/icons/koto.png?raw=true"
        }
      ].sort(sort)
    };
    for (const i in data.coinsMainNet) {
      let url = data.coinsMainNet[i].url + "api/";
      let e = await app.$axios.$get(url);
      data.coinsMainNet[i].backend = [
        {
          version: e.backend.version,
          blocks: e.backend.blocks
        }
      ];
      data.coinsMainNet[i].blockbook = [
        {
          version: e.blockbook.version,
          buildtime: (() => {
            let v = e.blockbook.version.split(".")[1];
            let buildtime;
            switch (v) {
              case "2":
                buildtime = e.blockbook.buildtime;
                break;
              case "3":
                buildtime = e.blockbook.buildTime;
                break;
              default:
                buildtime = null;
            }
            return buildtime;
          })()
        }
      ];
    }

    return data;
  },
  data() {
    return {};
  }
};
</script>

<style>
h4 {
  font-weight: normal;
}
</style>
