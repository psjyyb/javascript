package com.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class TotalCountControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String bno = req.getParameter("bno");
			//{"totalCount":10}
		
			ReplyVO rvo = new ReplyVO();
			ReplyService svc = new ReplyServiceImpl();
			
			
		int cnt = svc.getReplyCnt(Integer.parseInt(bno));
		
		resp.getWriter().print("{\"totalCount\":"+cnt+"}");

	}

}
