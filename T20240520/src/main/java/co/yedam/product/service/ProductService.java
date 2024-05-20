package co.yedam.product.service;

import java.util.List;

import co.yedam.product.ProductVO;

public interface ProductService {
	List<ProductVO> selcetList();
	ProductVO ProductInfo(String pCode);
	List<ProductVO> relatedProduct();
}
