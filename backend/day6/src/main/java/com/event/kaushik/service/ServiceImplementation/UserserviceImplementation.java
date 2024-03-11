package com.event.kaushik.service.ServiceImplementation;

import org.springframework.stereotype.Service;

import com.event.kaushik.DTO.UserDto;
import com.event.kaushik.Entity.Appuser;
import com.event.kaushik.repository.UserRepo;
import com.event.kaushik.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserserviceImplementation implements UserService {
    private final UserRepo userRepo;

    @Override
    public void createUser(UserDto userDto) {
        Appuser appuser = new Appuser();
        appuser.setUsername(userDto.getUsername());
        appuser.setPassword(userDto.getPassword());
        userRepo.save(appuser);
    }

    @Override
    public UserDto getUserById(int userId) {
        Appuser appuser = userRepo.findById(userId).orElse(null);
        if (appuser != null) {
            return new UserDto(appuser.getId(), appuser.getUsername(), appuser.getPassword());
        } else {
            return null;
        }
    }

    @Override
    public boolean updateUser(int userId, UserDto userDto) {
        Appuser existingUser = userRepo.findById(userId).orElse(null);
        if (existingUser != null) {
            existingUser.setUsername(userDto.getUsername());
            existingUser.setPassword(userDto.getPassword());
            userRepo.save(existingUser);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteUser(int userId) {
        if (userRepo.existsById(userId)) {
            userRepo.deleteById(userId);
            return true;
        } else {
            return false;
        }
    }
}
