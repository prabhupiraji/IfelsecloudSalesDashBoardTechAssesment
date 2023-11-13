package com.ifelsecloud.entity;

import java.sql.Timestamp;
import java.time.LocalDateTime;
//import java.util.Date;
import java.util.Date;

//import org.springframework.data.jpa.repository.Temporal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
//import jakarta.persistence.Temporal;
//import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="productorders")
public class RecentOrder {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    String product;
   Date delivery_date; 
    String status;
    String tracking_no;
    boolean shipping;


	
}
