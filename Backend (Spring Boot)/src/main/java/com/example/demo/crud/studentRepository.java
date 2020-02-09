package com.example.demo.crud;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;



@Repository
public  interface studentRepository extends JpaRepository<stu_info, Integer> {

	@Transactional
	@Modifying
	@Query(value="Alter table stu_info AUTO_INCREMENT=1",nativeQuery=true)
	void akash();
}