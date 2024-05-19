package com.shop.product.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.shop.common.Control;

public class EditProductControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String savePath = req.getServletContext().getRealPath("images");
		int maxSize = 5 * 1024 * 1024;

		MultipartRequest mr = new MultipartRequest(req, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy());
		
		String pno = mr.getParameter("pno");
		String Name = mr.getParameter("productName");
		String Give = mr.getParameter("productGive");
		String price = mr.getParameter("productPrice");
		String img = mr.getFilesystemName("img");
		
		
	}

}
