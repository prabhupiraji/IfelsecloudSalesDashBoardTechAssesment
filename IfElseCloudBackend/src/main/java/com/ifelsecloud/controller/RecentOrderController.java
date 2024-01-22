package com.ifelsecloud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ifelsecloud.entity.RecentOrder;
import com.ifelsecloud.service.RecentOrderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RecentOrderController {

	@Autowired
	RecentOrderService orderService;
	
	@PostMapping("/createorder")
	public ResponseEntity<RecentOrder> orderProduct(@RequestBody RecentOrder order){
		RecentOrder service=orderService.createNewOrder(order);
		return  new ResponseEntity<RecentOrder>(service,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/getallorders")
	public List<RecentOrder> getAllOrders(){
		
	  return orderService.getAllOrders();
		
	}
  //dummycode git pull checking  new changes in remote to local repo
	@DeleteMapping
	public deleteAllOrders(){
	  return orderService.deleteAllOrders();
		
	}


 //dummycode  for git push checking from local to remote repo
	@DeleteMapping
	public deleteAllOrders(){
	  return orderService.deleteAllOrders();
		
	}
}
