package com.yedam.mapper;

import java.util.List;

import com.yedam.common.SearchVO;
import com.yedam.vo.CartVO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	// 댓글목록.
	List<ReplyVO> replyList(int boardNo);
	List<ReplyVO> replyListPaging(SearchVO search);
	// 댓글삭제
	int deleteReply(int replyNo);
	// 댓글등록
	int insertReply(ReplyVO rvo);
	// 전체 댓글 갯수확인
	int getReplyCnt(int boardNo);
	// 댓글수정
	int modifyReply(ReplyVO rvo);
	
	// cart...목록, 수정, 삭제
	List<CartVO> selectList();
	int updateCart(CartVO cvo);
	int deleteCart(int no);
	
}
