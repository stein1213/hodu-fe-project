const exImgs = document.querySelector(".img-list")
let pageToFetch = 1;
async function fetchImages(pageNum){
  try {
    const response = await fetch('https://picsum.photos/v2/list?page='+ pageNum +'&limit=21');
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }
    const datas = await response.json();
    makeImageList(datas);
  } catch (error) {
    console.log('데이터를 가져오는데 문제가 발생했습니다 :', error);
  }
}
function makeImageList(datas) {
  datas.forEach((item)=>{
    exImgs.innerHTML += '<li><img src="'+ item.download_url +'" alt="" class="load-img"/></li>'
  })
}
const imgBtn = document.querySelector(".gallery-btn")
imgBtn.addEventListener('click', ()=>{
  if (pageToFetch == 1){
    fetchImages(pageToFetch += 1)
  }
})
const infinityScroll = () => {
    if (exImgs.scrollTop + exImgs.offsetHeight + 10 >= exImgs.scrollHeight){
      fetchImages(pageToFetch += 1)
    }
}
const throttling = (callback, delay) => {
  let timer = null;
  return  () => {
    if (timer === null) {
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    }
  };
}
exImgs.addEventListener('scroll', throttling(infinityScroll, 100))