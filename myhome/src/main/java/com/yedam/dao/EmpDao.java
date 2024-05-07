package com.yedam.dao;

import java.sql.SQLException;
import java.util.*;
import com.yedam.common.DAO;
import com.yedam.vo.EmpVo;

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
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			disCon();
		}
		return list;
		
	}
	
	// 목록 List<empVo> selectList();
	public List<EmpVo> selectList(){
		List<EmpVo> list = new ArrayList<EmpVo>();
		conn();
		try {
			psmt = conn.prepareStatement("select * from emp");
			rs =psmt.executeQuery();
			while(rs.next()) {
				EmpVo emp = new EmpVo();
				emp.setEmpNo(rs.getInt("emp_no"));
				emp.setEmpName(rs.getString("emp_name"));
				emp.setEmpPhone(rs.getString("emp_phone"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setSalary(rs.getInt("salary"));
				list.add(emp);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	public EmpVo selectEmp(int empNo) {
		conn();
		try {
			psmt = conn.prepareStatement("select * from emp where emp_no =? ");
			psmt.setInt(1, empNo);
			rs =psmt.executeQuery();
			if(rs.next()) {
				EmpVo emp = new EmpVo();
				emp.setEmpNo(rs.getInt("emp_no"));
				emp.setEmpName(rs.getString("emp_name"));
				emp.setEmpPhone(rs.getString("emp_phone"));
				emp.setEmail(rs.getString("email"));
				emp.setHireDate(rs.getString("hire_date"));
				emp.setSalary(rs.getInt("salary"));
				return emp;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	// 등록 return boolean insertEmp(EmpVo evo);
	public boolean insertEmp(EmpVo evo) {
		conn();
		String sql = "insert into emp (emp_no,"
				+ "emp_name,emp_phone,email,hire_date,salary) values(?,?,?,?,?,?)";
		String seqSql = "select emp_seq.nextval from dual";
		int seq = 0;
		try {
			psmt =conn.prepareStatement(seqSql);
			rs = psmt.executeQuery();
			if(rs.next()) {
				seq = rs.getInt(1);
				evo.setEmpNo(seq);// 매개변수의 evo에 empNo 저장.
			}
			psmt =conn.prepareStatement(sql);
			psmt.setInt(1, seq);
			psmt.setString(2, evo.getEmpName());
			psmt.setString(3, evo.getEmpPhone());
			psmt.setString(4,evo.getEmail());
			psmt.setString(5,evo.getHireDate());
			psmt.setInt(6,evo.getSalary() );
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	// 수정 boolean updateEmp(int empNo); // 이메일, 급여 변경
	public boolean updateEmp(EmpVo evo) {
		conn();
		String sql = "update emp set email = ?,salary = ? where emp_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,evo.getEmail());
			psmt.setInt(2,evo.getSalary());
			psmt.setInt(3,evo.getEmpNo());
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	// 삭제 boolean deleteEmp(int empNo); 
	public boolean deleteEmp(int emp) {
		conn();
		String sql = "delete emp where emp_no = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp);
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
// 부서별 인원 현황. {부서 : 인원현황}.
	public Map<String, Integer> getCntperDept(){
	      conn();
	      HashMap<String, Integer> map = new HashMap<String, Integer>();
	      String sql = "select d.department_name,\r\n"
	            + "            count(1) as cnt\r\n"
	            + "from hr.employees e\r\n"
	            + "join hr.departments d\r\n"
	            + "on e.department_id = d.department_id\r\n"
	            + "group by d.department_name";
	      
	      try {
	         psmt = conn.prepareStatement(sql);
	         rs = psmt.executeQuery();

	         while (rs.next()) {
	            map.put(rs.getString("department_name"), rs.getInt("cnt"));
	         }
	      } catch (SQLException e) {
	         // TODO Auto-generated catch block
	         e.printStackTrace();
	      } finally {
	         disCon();
	      }
	      return map;
	   }
	public List<List<String>> empLists(){
		List<List<String>> list = new ArrayList<>();
		conn();
		try {
			psmt = conn.prepareStatement("select e.*"
					+ "from jsp.employees e");
			rs = psmt.executeQuery();
			while(rs.next()) {
				List<String> map = new ArrayList<>();
				map.add(rs.getString("employee_id"));
				map.add(rs.getString("first_name"));
				map.add(rs.getString("email"));
				map.add(rs.getString("phone_number"));
				map.add(rs.getString("salary"));
				list.add(map);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			disCon();
		}
		return list;
		
	}
	
	// jsp.employees 테이블의 사원번호값을 찾아서 한건 삭제하는 기능도 추가.
	// 서블릿 만들어야됨
	public boolean delEmp(int emp) {
		conn();
		String sql = "delete from employees where employee_id = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp);
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
		
	}
}
