package com.shop.product.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.shop.common.DataSource;
import com.shop.product.VO.ProductVO;
import com.shop.product.mapper.ProductMapper;

public class ProductServiceImpl implements ProductService {

	SqlSession session = DataSource.getInstance().openSession(true);
	ProductMapper mapper = session.getMapper(ProductMapper.class);
	
	@Override
	public List<ProductVO> productList() {
		return mapper.productList();
	}
	@Override
	public boolean addProduct(ProductVO pvo) {
		return mapper.addProduct(pvo)==1;
	}
	@Override
	public ProductVO productInfo(int productNo) {
		return mapper.productInfo(productNo);
	}
}
