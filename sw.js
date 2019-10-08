importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/9520a5f2da5f40a0f2cf.js",
    "revision": "2c649cc838afcee69e0b6f5c485e1e36"
  },
  {
    "url": "/_nuxt/994fa74848c25b6230a5.js",
    "revision": "65acc5b48dd468b6b7fba04863f6eb18"
  },
  {
    "url": "/_nuxt/999ea4adb0e3aecf253d.js",
    "revision": "f5c60c3e1600fbcbce817942c3af06d0"
  },
  {
    "url": "/_nuxt/a1c0985a3a7f486e489f.js",
    "revision": "f628736d35f302e571302fe2898ee067"
  },
  {
    "url": "/_nuxt/ddcb1fdb969577617d86.js",
    "revision": "ac815e6a1a4a21631b6db48b80795964"
  }
], {
  "cacheId": "blockbook.ovh",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
