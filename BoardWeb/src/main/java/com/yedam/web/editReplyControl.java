package com.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class editReplyControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String rno = req.getParameter("rno");
		String reply = req.getParameter("reply");
		System.out.println("댓글번호"+rno);
		System.out.println("댓글"+reply);
		
		ReplyVO rvo = new ReplyVO();
		rvo.setReplyNo(Integer.parseInt(rno));
		rvo.setReply(reply);
		
		ReplyService svc = new ReplyServiceImpl();
		
		Map<String,Object> result = new HashMap<>(); 
		
		if(svc.editReply(rvo)) {
			result.put("retCode", "OK");
		}else {
			result.put("retCode", "NG");
		}
	}

}
