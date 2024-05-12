package com.shop.product.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.shop.common.Control;
import com.shop.product.VO.ProductVO;
import com.shop.product.service.ProductService;
import com.shop.product.service.ProductServiceImpl;

public class AddProductControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		// TODO Auto-generated method stub
		String savePath = req.getServletContext().getRealPath("images");
		int maxSize = 5 * 1024 * 1024;
		
		MultipartRequest mr = new MultipartRequest(req, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());
		String name = mr.getParameter("name");
		String price = mr.getParameter("price");
		String img = mr.getFilesystemName("myImg");
		String logId = mr.getParameter("logId");
		String give = mr.getParameter("give");
			
		
		
		ProductService svc= new ProductServiceImpl();
		
		ProductVO pvo = new ProductVO();
		pvo.setProductName(name);
		pvo.setProductPrice(Integer.parseInt(price));
		pvo.setImg(img);
		pvo.setLogId(logId);
		pvo.setProductGive(give);
		if(svc.addProduct(pvo)) {
			resp.sendRedirect("shopmain.do");
		}else{
			resp.sendRedirect("addProductForm.do");
		}
	}

}
