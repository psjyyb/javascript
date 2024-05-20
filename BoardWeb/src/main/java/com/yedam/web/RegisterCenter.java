package com.yedam.web;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StreamUtils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.CenterVO;

public class RegisterCenter implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// json문자열 -> 객체 -> mapper처리.
		ServletInputStream sis = req.getInputStream();
		String json = StreamUtils.copyToString(sis,StandardCharsets.UTF_8);
		//System.out.println(json);
		
		ObjectMapper mapper = new ObjectMapper();
		CenterVO[] Centers = mapper.readValue(json,CenterVO[].class);
		
		ReplyService svc = new ReplyServiceImpl();
		int cnt = svc.addCenter(Centers);
		
		// 처리된 건수 반환
		resp.getWriter().print(cnt);
		
	}

}
