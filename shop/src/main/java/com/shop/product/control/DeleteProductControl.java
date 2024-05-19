package com.shop.product.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shop.common.Control;
import com.shop.product.service.ProductService;
import com.shop.product.service.ProductServiceImpl;

public class DeleteProductControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String pno = req.getParameter("pno");
		
		ProductService svc = new ProductServiceImpl();
		
		if(svc.deleteProduct(Integer.parseInt(pno))) {
			resp.sendRedirect("shopmain.do");
			System.out.println("여기탔어요");
		}else {
			resp.sendRedirect("deleteProduct.do");
			System.out.println("여기안탔어요");
		}
		
		

	}

}
