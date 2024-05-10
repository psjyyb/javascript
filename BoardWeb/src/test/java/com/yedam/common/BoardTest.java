package com.yedam.common;

import java.util.List;

import com.yedam.service.*;
import com.yedam.vo.BoardVO;

public class BoardTest {
	public static void main(String[] args) {
		BoardService svc = new BoardServiceImpl();
		BoardVO vo = svc.getBoard(3);
		
		svc.boardList(1).forEach(board -> System.out.println(board));
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
//		if (vo != null) {
//			System.out.println(vo.toString());
//		} else {
//			System.out.println("조회결과없음");
//		}
//		vo.setTitle("등록제목");
//		vo.setContent("등록내용");
//		vo.setWriter("user03");
//
//		if (svc.addBoard(vo)) {
//			System.out.println("등록성공");
//		} else {
//			System.out.println("등록실패");
//		}
//		List<BoardVO> list = svc.boardList();
//		for(BoardVO board : list) {
//			System.out.println(list.toString());
//		}

	}
}
