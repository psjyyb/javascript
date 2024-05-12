package com.shop.member.service;

import org.apache.ibatis.session.SqlSession;

import com.shop.common.DataSource;
import com.shop.member.VO.MemberVO;
import com.shop.member.mapper.*;

public class MemberServiceImpl implements MemberService {

	SqlSession session = DataSource.getInstance().openSession(true);
	MemberMapper mapper = session.getMapper(MemberMapper.class);

	@Override
	public boolean addMember(MemberVO mvo) {
		return mapper.addMember(mvo) == 1;
	}
	@Override
	public MemberVO login(String id, String pw) {
		return mapper.login(id, pw);
	}



}
