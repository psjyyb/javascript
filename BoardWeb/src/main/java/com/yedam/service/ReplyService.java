package com.yedam.service;

import java.util.List;

import com.yedam.common.SearchVO;
import com.yedam.vo.ReplyVO;

public interface ReplyService {
	List<ReplyVO> replyList(SearchVO search);
	boolean removeReply(int replyNo); // 댓글삭제
	boolean addReply(ReplyVO rvo); 
	int getReplyCnt(int boardNo);
	boolean editReply(ReplyVO rvo);
	
}
