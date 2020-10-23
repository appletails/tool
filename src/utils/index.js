export const sleep = async (i = 1) => new Promise(resolve => setTimeout(() => resolve(), 1000 * i))
/**
  * 关于dom滚动的方法
  * @param {dom} 需要滚动的dom
  * @param {number} 滚动的结束位置的高度
  * @param {time} 滚动过程所需的时间
*/
export const ScrollTop = (dom, number = 0, time) => {
  if (!time) {
    dom.scrollTop = number
    return number
  }
  const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime // 计算循环的次数
  let nowTop = dom.scrollTop // 获取当前滚动条位置
  const everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
  const scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--
      ScrollTop(dom, nowTop += everTop)
    } else {
      clearInterval(scrollTimer) // 清除计时器
    }
  }, spacingTime)
}
