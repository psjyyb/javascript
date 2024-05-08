package com.yedam.common;

import java.util.List;
import org.apache.ibatis.session.*;
import com.yedam.mapper.EmpMapper;
import com.yedam.vo.EmployeeVO;

public class DataTest {
	public static void main(String[] args) {

		SqlSessionFactory factory = DataSource.getInstance();
		SqlSession session = factory.openSession(true); // 자동커밋

		EmpMapper mapper = session.getMapper(EmpMapper.class);
		EmployeeVO evo = new EmployeeVO();
		
		// 데이터 가져오기
		//List<EmployeeVO> list = mapper.selectEmp();// session.selectList("com.yedam.mapper.EmpMapper.selectEmp");
		//for (EmployeeVO emp : list) {
		//	System.out.println(emp.toString());
		//}
		
		evo.setEmployeeId(202);
		evo.setFirstName("길동");
		evo.setLastName("홍");
		evo.setEmail("hong@email");
		evo.setJobId("it_prog");
		// 추가
		// int sr = mapper.insertEmp(evo);
		// System.out.println("추가" + sr + "건 처리");
		// session.commit(); // 커밋.

		// 삭제 처리
		int dr = mapper.deleteEmp(evo.getEmployeeId());
		System.out.println("삭제 " + dr + "건 처리");
		
		
		

	}
}
