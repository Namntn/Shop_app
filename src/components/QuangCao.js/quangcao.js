import React, { useState } from 'react';
import './quangcao.css'; // Tệp CSS của chúng ta

const Quangcao = () => {
  // Danh sách các URL hình ảnh quảng cáo
  const images = [
    './IMG/png1.png',
    './IMG/png2.png',
    './IMG/png3.png',
    './IMG/png4.png'
  ];
  
  // useState để quản lý chỉ mục hiện tại của hình ảnh
  const [currentIndex, setCurrentIndex] = useState(0);  ;

  // Hàm xử lý khi nhấp vào mũi tên trái
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Hàm xử lý khi nhấp vào mũi tên phải
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
 
  

  return (
    <div>
      {/* Banner Quảng Cáo */}
      <div className="banner">
        <button className="arrow left" onClick={handlePrevClick}>&#8592;</button>
        <img src={images[currentIndex]} alt="Quảng cáo" className="banner-image" />
        <button className="arrow right" onClick={handleNextClick}>&#8594;</button>
      </div>

      {/* Phần Sản Phẩm */}
      <div className="products">
        <h2>SẢN PHẨM</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="./IMG/png2.png" alt="Mô hình xe 1" />
          </div>
          <div className="product-item">
            <img src="./IMG/png3.png" alt="Mô hình xe 2" />
          </div>
          <div className="product-item">
            <img src="./IMG/png4.png" alt="Mô hình xe 3" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Quangcao;





