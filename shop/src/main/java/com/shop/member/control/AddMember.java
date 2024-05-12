package com.shop.member.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.shop.common.Control;
import com.shop.member.VO.MemberVO;
import com.shop.member.service.MemberService;
import com.shop.member.service.MemberServiceImpl;

public class AddMember implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String name = req.getParameter("name");
		String phone = req.getParameter("phone");
		
		MemberVO mvo = new MemberVO();
		mvo.setMemberId(id);
		mvo.setMemberPw(pw);
		mvo.setMemberName(name);
		mvo.setMemberPhone(phone);
		
		MemberService svc = new MemberServiceImpl();
		
		if(svc.addMember(mvo)) {
			resp.sendRedirect("shopmain.do");
		}else {
			resp.sendRedirect("addMemberForm.do");
		}
	
	}

}
