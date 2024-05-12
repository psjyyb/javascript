package com.shop.orders.VO;

import java.util.Date;

import lombok.Data;

@Data
public class OrderVO {
	private int orderNo;
	private String orderName;
	private String orderPrice;
	private Date orderDate;
	private String orderId;
}
