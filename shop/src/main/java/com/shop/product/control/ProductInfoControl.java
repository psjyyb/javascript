package com.shop.product.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shop.common.Control;
import com.shop.product.VO.ProductVO;
import com.shop.product.service.ProductService;
import com.shop.product.service.ProductServiceImpl;

public class ProductInfoControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String pno = req.getParameter("product");
	
		
		ProductService svc = new ProductServiceImpl();
		ProductVO pvo = svc.productInfo(Integer.parseInt(pno));
		
		req.setAttribute("pno", pvo);
		
		String path = "WEB-INF/shop/productInfo.jsp";
		req.getRequestDispatcher(path).forward(req, resp);
	}

}
