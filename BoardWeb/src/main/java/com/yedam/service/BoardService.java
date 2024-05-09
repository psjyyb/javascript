package com.yedam.service;

import java.util.List;

import com.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList();
	boolean addBoard(BoardVO board);
}
