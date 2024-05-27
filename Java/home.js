        
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})



prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
document.addEventListener('DOMContentLoaded', function() {
    const toBottom = document.querySelector('.to-bottom a');

    // Xử lý sự kiện click trên phần tử to-bottom
    toBottom.addEventListener('click', function(event) {
        event.preventDefault();

        // Lấy vị trí của phần footer
        const section = document.querySelector('.wp-products');
        const sectionPosition = section.getBoundingClientRect().top;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth' // Cuộn mượt
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const subitem = document.querySelector('.subitem a');

    // Xử lý sự kiện click trên phần tử to-bottom
    subitem.addEventListener('click', function(event) {
        event.preventDefault();

        // Lấy vị trí của phần footer
        const section = document.querySelector('.wp-products');
        const sectionPosition = section.getBoundingClientRect().top;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth' // Cuộn mượt
        });
    });
});ventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(urlParams.get('page')) || 1; // Lấy tham số 'page' từ URL

    const itemsPerPage = 8; // Số lượng sản phẩm mỗi trang
    const listProducts = document.getElementById('list-products');
    const allItems = listProducts.querySelectorAll('.item');
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Ẩn tất cả các sản phẩm
    allItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block'; // Hiển thị sản phẩm nằm trong trang hiện tại
        } else {
            item.style.display = 'none'; // Ẩn các sản phẩm không nằm trong trang hiện tại
        }
    });

    // Đặt lại đường dẫn cho các trang
    const listPageItems = document.querySelectorAll('.list-page .item a');
    listPageItems.forEach(item => {
        const pageNum = parseInt(item.textContent);
        item.href = `?page=${pageNum}`; // Đặt lại đường dẫn với số trang tương ứng
    });
});

