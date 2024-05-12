package com.shop.product.mapper;

import java.util.List;

import com.shop.product.VO.ProductVO;

public interface ProductMapper {
	List<ProductVO> productList();
	int addProduct(ProductVO product);
	ProductVO productInfo(int productNo);
}
