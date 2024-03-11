package com.event.kaushik.service;

import com.event.kaushik.DTO.UserDto;

public interface UserService {
    void createUser(UserDto userDto);
    UserDto getUserById(int userId);
    boolean updateUser(int userId, UserDto userDto);
    boolean deleteUser(int userId);
}
