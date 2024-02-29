package com.event.kaushik.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.kaushik.Entity.Appuser;

public interface UserRepo extends JpaRepository <Appuser,Integer>{
    
}
