package com.example.demo.crud;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Table;


@Entity
@Table( appliesTo="stu_info")
public class stu_info {
    
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Id" )
	private int Id;
	
	@Column(name="Name")
	private String Name;
	
	@Column(name="Course")
	private String Course;
	
    public int getId() {
    	return Id;
    }

	public String getName() {
		return Name;
	}

	
	public void setId(int Id)
	{
		this.Id=Id;
	}
	
	public void setName(String Name) {
		this.Name = Name;
	}

	public String getCourse() {
		return Course;
	}

	public void setCourse(String Course) {
		this.Course = Course;
	}
   
	
	
}
