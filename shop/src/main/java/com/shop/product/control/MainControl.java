package com.shop.product.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import com.shop.common.Control;
import com.shop.product.VO.ProductVO;
import com.shop.product.service.*;

public class MainControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String path = "WEB-INF/shop/shopmain.jsp";
		path = "shop/shopmain.tiles";
		
		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = svc.productList();
		req.setAttribute("productList", list);
		
		req.getRequestDispatcher(path).forward(req, resp);
	}

}
