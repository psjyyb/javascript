package com.yedam.service;

import java.util.List;

import com.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList();
	boolean addBoard(BoardVO board);
	BoardVO getBoard(int boardNo);
	int addViewCtn(int boardNo);
	// 수정.
	boolean modifyBoard(BoardVO board);
	// 삭제
	boolean removeBoard(int boardNo);
}
