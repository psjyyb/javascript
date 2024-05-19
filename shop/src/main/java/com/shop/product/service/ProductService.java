package com.shop.product.service;

import java.util.List;

import com.shop.product.VO.ProductVO;

public interface ProductService {
	List<ProductVO> productList();
	boolean addProduct(ProductVO pvo);
	ProductVO productInfo(int productNo);
	boolean deleteProduct(int productNo);
	
}
