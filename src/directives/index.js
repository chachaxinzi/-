export const imagerror = {
  inserted(dom, options) { // 这个钩子函数是在dom元素插入节点之后调用的
    if (dom.src) {
      // 这里的dom是一个img标签。图片有一个事件是onerror

      dom.onerror = function() {
        dom.src = options.value
      }
    }
  }
}
