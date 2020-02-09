package com.example.demo.crud;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class studentService {

	 @Autowired
	    private studentRepository repo;
	     
	    
	    public List<stu_info> listAll() {
	        return repo.findAll();
	    }
	    
	   public stu_info createStudent(stu_info st) {
		   
		    return repo.save(st);
	   }
       
	   public stu_info readStudent(int Id)
	   {
		   return repo.findById(Id).get();
	   }
	   
	   public stu_info updateStudent(int Id,stu_info st)
	   {
		   stu_info obj=repo.findById(Id).get();
		   obj.setCourse(st.getCourse());
		   obj.setName(st.getName());
		   return repo.save(obj);
		   
	   }
	   
	   public void deleteStudent(int Id)
	   {
		   stu_info obj=repo.findById(Id).get();
		   repo.delete(obj);
		   repo.akash();
	   }
	  
}
