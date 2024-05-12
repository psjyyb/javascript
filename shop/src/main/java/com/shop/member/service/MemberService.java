package com.shop.member.service;

import com.shop.member.VO.MemberVO;

public interface MemberService {
	boolean addMember(MemberVO mvo);
	
	MemberVO login(String id, String pw);
}
