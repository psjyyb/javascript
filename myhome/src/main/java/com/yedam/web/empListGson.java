package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.dao.EmpDao;

@WebServlet("/getList.do")
public class empListGson extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		EmpDao edao = new EmpDao();
		List<List<String>> list = edao.empLists();
		
		Map<String,Object> map = new HashMap<>();
		map.put("data", list);
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(map);
		resp.getWriter().print(json);
	}
}
