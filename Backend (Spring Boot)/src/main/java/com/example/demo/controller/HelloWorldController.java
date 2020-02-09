package com.example.demo.controller;

import com.example.demo.crud.*;
import com.example.demo.service.*;
import com.example.demo.crud.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/")
public class HelloWorldController {

	@Autowired
	private studentService service;
	
	
	@GetMapping( "/hello" )
		public String firstPage() {
			return "Hello World";
		}
	@GetMapping("/all")
	public List<stu_info> viewHomepage()
	{
        System.out.print("HI");
		return service.listAll();
	}
	
	@PostMapping(path="/save",consumes="application/json")
	public stu_info create(@RequestBody stu_info S)
	{ 
		System.out.println(S);
		
	    return service.createStudent(S);
	}
	
	@PutMapping("/id")
	public stu_info update(@RequestParam int id, @RequestBody stu_info S)
	{
		return service.updateStudent(id,S);
	}
	
	
	@DeleteMapping("/id")
	@ResponseBody
	public void delete(@RequestParam int id)
	{
		
		 service.deleteStudent(id);
	}
	
	
	}
	

