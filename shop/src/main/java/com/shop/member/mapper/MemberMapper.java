package com.shop.member.mapper;

import org.apache.ibatis.annotations.Param;

import com.shop.member.VO.MemberVO;

public interface MemberMapper {
	int addMember(MemberVO mvo);
	MemberVO login(@Param("id") String id, @Param("pw") String pw);

	
}
