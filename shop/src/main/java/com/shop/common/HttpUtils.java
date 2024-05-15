package com.shop.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class HttpUtils {
	public static void forward(HttpServletRequest req, HttpServletResponse resp, String path) {
		try {
			String logPath = (String) req.getAttribute("logPath");

			HttpSession session = req.getSession();
			// 로그인정보가 있어야 사용하능한 페이지
			if (logPath != null && session.getAttribute("logId") == null) {
				resp.sendRedirect(req.getContextPath() + logPath);
				return;
			}

			// 로그인 정보가 없어도 사용가능한 페이지
			req.getRequestDispatcher(path).forward(req, resp);

		} catch (ServletException | IOException e) {
			e.printStackTrace();
		}
	}
}
