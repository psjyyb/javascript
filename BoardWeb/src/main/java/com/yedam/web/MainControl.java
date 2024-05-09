package com.yedam.web;

import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.yedam.common.Control;
import com.yedam.service.*;
import com.yedam.vo.BoardVO;

public class MainControl implements Control{

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String path = "WEB-INF/board/boardList.jsp";
		
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList();
		
		// jsp 페이지에 정보를 전달.(같은객체 참조)
		req.setAttribute("boardList", list);
		
		req.getRequestDispatcher(path).forward(req, resp);
		
	}

}
