function onScroll(up, down) {
  let distance = 100; //距离视窗还用100的时候，开始触发；
  if (window.scrollY == 0) {
    window.scrollTo(0, 600);
  }

  let isClick = false;

  // 获取当前滚动条的位置
  function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }

  // 获取当前可视范围的高度
  function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
  }

  // 获取文档完整的高度
  function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }

  setTimeout(() => {
    if (getScrollTop() + getClientHeight() > getScrollHeight() - distance) {
      window.scrollTo(0, window.scrollY - 600);
      console.log("asdfsadf");
    }
  }, 80);
  setTimeout(() => {
    window.onscroll = function (e) {
      if (window.scrollY < distance && !isClick) {
        isClick = true;
        up();
      }
      if (getScrollTop() + getClientHeight() > getScrollHeight() - distance && !isClick) {
        isClick = true;
        down();
      }
    };
  }, 500);
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}
const initScroll = (page, totalPage) =>
  onScroll(
    () => {
      if (page > 0) {
        location.replace(updateQueryStringParameter(location.search, "page", page - 1));
      } else {
        history.back();
      }
    },
    () => {
      if (page < totalPage - 1) {
        location.replace(updateQueryStringParameter(location.search, "page", page + 1));
      } else {
        history.back();
      }
    }
  );
