package com.yedam.dao;

import java.sql.SQLException;
import java.util.*;
import com.yedam.common.*;

public class EmpDao extends DAO{
		
	public List<Map<String, Object>> empList(){
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		conn();
		try {
			psmt = conn.prepareStatement("select * from emp");
			rs = psmt.executeQuery();
			while(rs.next()) {
				Map<String,Object> map = new HashMap<>();
				map.put("사원번호", rs.getString("emp_no"));
				map.put("사원이름", rs.getString("emp_name"));
				map.put("연락처", rs.getString("emp_phone"));
				map.put("이메일", rs.getString("email"));
				list.add(map);
			}
			System.out.println(list.size());
			System.out.println(list.get(0).size());
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			disCon();
		}
		return list;
		
	}
}
