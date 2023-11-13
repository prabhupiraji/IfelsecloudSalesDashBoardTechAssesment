package com.ifelsecloud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifelsecloud.entity.RecentOrder;
import com.ifelsecloud.repository.RecentOrderRepo;

@Service
public class RecentOrderService {

	@Autowired
	RecentOrderRepo orderRepo;
	public RecentOrder createNewOrder(RecentOrder order) {
		// TODO Auto-generated method stub
		return orderRepo.save(order);
	}

	public List<RecentOrder> getAllOrders() {
		// TODO Auto-generated method stub
		return orderRepo.findAll();
	}

}
