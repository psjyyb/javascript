package com.shop.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.*;

public interface Control {
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException;
}
