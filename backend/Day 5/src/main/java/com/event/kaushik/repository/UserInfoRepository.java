package com.event.kaushik.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.kaushik.Entity.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

}
 