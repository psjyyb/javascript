package co.yedam.product.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.ProductVO;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductServiceImpl;

public class ProductInfoControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse res) {
		String pCode = req.getParameter("pCode");
		
		ProductService svc = new ProductServiceImpl();
		
		ProductVO pvo = svc.ProductInfo(pCode);
		
		List<ProductVO> list = svc.relatedProduct();
		
		req.setAttribute("pInfo", pvo);
		req.setAttribute("list", list);
		String path = "product/productInfo.tiles";
		try {
			req.getRequestDispatcher(path).forward(req, res);
		} catch (ServletException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
