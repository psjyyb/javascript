package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.dao.EmpDao;
import com.yedam.vo.EmpVo;

@WebServlet("/empsave.json")
public class EmpJson extends HttpServlet {

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 추가(add), 수정(edit), 삭제(delete).
		// 삭제기능(사원번호 emp.Html 에서 파라미터 수신)
		String job = req.getParameter("job");
		String eno = req.getParameter("empNo");
		String c = req.getParameter("salary");
		String e = req.getParameter("email");

		Map<String, Object> map = new HashMap<>();
		Gson gson = new GsonBuilder().create();

		EmpDao edao = new EmpDao();
		EmpVo evo = new EmpVo();
		System.out.println(job);
		if (job.equals("add")) {
			String a = req.getParameter("name");
			String b = req.getParameter("phone");
			String d = req.getParameter("hire");

			evo.setEmpName(a);
			evo.setEmpPhone(b);
			evo.setSalary(Integer.parseInt(c));
			evo.setHireDate(d);
			evo.setEmail(e);

			if (edao.insertEmp(evo)) {
				map.put("reCode", "OK");
				map.put("retVal", evo);

				 resp.getWriter().print(gson.toJson(map));
			} else {
				map.put("reCode", "NG");
				map.put("retVal", null);

				resp.getWriter().print(gson.toJson(map));
			}
		} else if (job.equals("edit")) {
			evo.setEmpNo(Integer.parseInt(eno));
			evo.setSalary(Integer.parseInt(c));
			evo.setEmail(e);
			if (edao.updateEmp(evo)) {
				evo = edao.selectEmp(evo.getEmpNo());
				map.put("reCode", "OK");
				map.put("retVal", evo);
				resp.getWriter().print(gson.toJson(map));
			} else {
				map.put("reCode", "NG");
				map.put("retVal", null);
				resp.getWriter().print(gson.toJson(map));
			}
		} else if (job.equals("delete")) {

			if (edao.deleteEmp(Integer.parseInt(eno))) {
				// {"retCode" : "OK" }
				resp.getWriter().print("{\"retCode\" : \"OK\" }");
			} else {
				// {"retCode" : "NG"}
				resp.getWriter().print("{\"retCode\" : \"NG\"}");
			}
		} // end of if.

	}
}
