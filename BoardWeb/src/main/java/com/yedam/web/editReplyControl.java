package com.yedam.web;

import java.io.IOException;

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
		String replyNo = req.getParameter("replyNo");
		String reply = req.getParameter("modal_reply");
		System.out.println("댓글번호"+replyNo);
		System.out.println("댓글"+reply);
		
		ReplyVO rvo = new ReplyVO();
		rvo.setBoardNo(Integer.parseInt(replyNo));
		rvo.setReply(reply);
		
		ReplyService svc = new ReplyServiceImpl();
		
		if(svc.editReply(rvo)) {
			resp.sendRedirect("main.do");
		}
	}

}
