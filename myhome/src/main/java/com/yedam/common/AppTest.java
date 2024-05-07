package com.yedam.common;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.yedam.dao.EmpDao;
import com.yedam.vo.EmpVo;

public class AppTest {

	public static void main(String[] args) {
		EmpDao edao = new EmpDao();
		Map<String, Integer> resultMap = edao.getCntperDept();
		Set<String> keyset = resultMap.keySet();
		for(String key : keyset) {
			System.out.println("key: "+key+", val:"+resultMap.get(key));
		}
//		EmpVo vo = new EmpVo();
//		vo.setEmpName("하이");
//		vo.setEmpPhone("10-325-555");
//		vo.setEmail("hgfs@1123");
//		vo.setHireDate("2024-05-01");
//		vo.setSalary(5000);
//		if(edao.insertEmp(vo)) {
//			System.out.println("성공");
//		}else {
//			System.out.println("실패");
//		}
//		EmpVo vo1 = new EmpVo();
//		vo1.setEmail("asd@sad");
//		vo1.setSalary(455);
//		vo1.setEmpNo(61);
//		if(edao.updateEmp(vo1)) {
//			System.out.println("성공");
//		}else {
//			System.out.println("실패");
//		}
//		EmpVo vo2 = new EmpVo();
//		if(edao.deleteEmp(64)) {
//			System.out.println("성공");
//		}else {
//			System.out.println("실패");
//		}
//			
//		List<EmpVo> list = edao.selectList();
//		for (EmpVo vo3 : list) {
//			System.out.println(vo3.toString());
//		}
	}

}
