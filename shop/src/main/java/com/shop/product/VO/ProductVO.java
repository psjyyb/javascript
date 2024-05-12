package com.shop.product.VO;

import java.sql.Date;
import lombok.Data;

@Data
public class ProductVO {
	private int productNo;
	private String productName;
	private int productPrice;
	private Date productDate;
	private String productId;
	private String img;
	private String logId;
	private String productGive;
}
