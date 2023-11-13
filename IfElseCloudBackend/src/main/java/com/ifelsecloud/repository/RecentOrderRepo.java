package com.ifelsecloud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifelsecloud.entity.RecentOrder;

@Repository
public interface RecentOrderRepo  extends JpaRepository<RecentOrder, Long>{

	
}
