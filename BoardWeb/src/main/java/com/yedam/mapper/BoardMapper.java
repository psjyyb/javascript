package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.BoardVO;

public interface BoardMapper {
	List<BoardVO> boardList();// 목옥
	int insertBoard(BoardVO board);
}
