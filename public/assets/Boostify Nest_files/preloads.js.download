
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.b551ee20ebd5234699e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/143.latest.en.cdcd46f642964c351866.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4109.latest.en.0218a052e976e7974c26.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.9f43ba93f8b7ea7298cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.82a35c77ad162921ceb6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/513.latest.en.88a1e6bdcc23526ed8e7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9719.latest.en.a3e0bf864cb5194fbfc5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.latest.en.6a6927dbcebfe2a055b7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.en.e78374d287cb043131f7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2872.latest.en.2abfdc80477347ac4630.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.a6d0b5784ee0abbe548d.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/143.latest.en.2bca5c0a646fa4b3c156.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.71184ade77e999e513cd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.39b8b43a48d637104e94.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  