function switchAuthTab(tab) {
  const isLogin = (tab === 'login');
  
  // Thêm/Xóa class active cho tab tiêu đề
  document.getElementById('tabLoginBtn').classList.toggle('active', isLogin);
  document.getElementById('tabRegisterBtn').classList.toggle('active', !isLogin);
  
  // SỬA TẠI ĐÂY: Điều khiển trực tiếp display để tránh xung đột CSS animation
  if (isLogin) {
    document.getElementById('loginPanel').style.display = 'block';
    document.getElementById('loginPanel').classList.add('active');
    document.getElementById('registerPanel').style.display = 'none';
    document.getElementById('registerPanel').classList.remove('active');
  } else {
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('loginPanel').classList.remove('active');
    document.getElementById('registerPanel').style.display = 'block';
    document.getElementById('registerPanel').classList.add('active');
  }
  
  // Xóa thông báo lỗi cũ
  document.getElementById('loginError').textContent = '';
  document.getElementById('registerError').textContent = '';
}

