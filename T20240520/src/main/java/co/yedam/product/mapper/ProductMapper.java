package co.yedam.product.mapper;

import java.util.List;

import co.yedam.product.ProductVO;

public interface ProductMapper {
	List<ProductVO> selcetList();
	ProductVO ProductInfo(String pCode);
	List<ProductVO> relatedProduct();
}
