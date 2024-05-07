package com.yedam.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.yedam.dao.EmpDao;

@WebServlet("/empDel.do")
public class empDeleteServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String no = req.getParameter("eno");
		EmpDao edao = new EmpDao();
		int eno = Integer.parseInt(no);
		if(edao.delEmp(eno)) {
			resp.getWriter().print("{\"retCode\" : \"OK\" }");
		}else {
			resp.getWriter().print("{\"retCode\" : \"NG\"}");
		}
	}
}
