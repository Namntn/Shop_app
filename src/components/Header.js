import React, {useState} from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Quản lý giá trị tìm kiếm

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Cập nhật giá trị tìm kiếm khi người dùng nhập
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn form gửi
    console.log('Searching for:', searchQuery); // Thực hiện tìm kiếm (hoặc gọi API)
    // Bạn có thể làm gì đó với searchQuery ở đây, ví dụ: gửi yêu cầu tìm kiếm đến API hoặc filter dữ liệu.
  };


    return (
        <div className="header">
            <ul id="nav">
                <li>
                <img src="https://s3-alpha-sig.figma.com/img/3208/02d8/1c9a2d9295fe8c73e9766a9febdab91d?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iby7Pp7aPOplfzuT~mqcw91rQ8cn8TqdtVTwSY19VgAb-CrNUShO2Gi32Mdy-qxXqFcHgwlMv~k0TKQxEJfnbLtVzf8iHMU-~Kjc0QBSzK70C7ulbgRFqcCrOS9dlQSmv6HYV2G3OmkZykVa0nZlCNRrBmuxzPeIY6D~Hh0VS-VhkYPwlRH8dcmuSu64IMBuEcKOi9CDGGA-DrhR9u8tM5qBuctnyOJBZN3PqzB~uSCxOvKIz~rK3~8vhk-mHJsl21FGSqv4hLSSS7Bgjo8DAnF4HhK5i4CTyGEKtYiWMCjN8xKaVphvaoDMafKpKSceIaqXD5reykm0ddnlEeO1TQ__"></img>
                </li>
                <li><a href="#">Giới Thiệu</a></li>
                <li><a href="#">Sản Phẩm</a></li>
                <li><a href="#">Bảng Giá</a></li>
                <li><a href="#">Liên Hệ</a></li>
                <li className='searchButton'>
                <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
                <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Tìm kiếm..."
                      style={{ padding: '5px', marginRight: '10px' }}
                    />
                    <button type="submit" style={{ padding: '5px 10px' }}>
                    <i className="fa fa-search"></i> 
                    </button>
                  </form>
                </li>
            </ul>
        </div>
    );
};

export default Header;